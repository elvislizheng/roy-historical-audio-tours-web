"use client";

import { attractions } from "@/data/attractions";
import { exhibitions } from "@/data/exhibitions";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string; exhibitionId: string }>;
}

export default function ExhibitionDetailPage({ params }: PageProps) {
  const { id, exhibitionId } = use(params);
  const { language } = useLanguage();

  const attraction = attractions.find((a) => a.id === id);
  const exhibition = exhibitions[exhibitionId];

  if (!attraction || !exhibition) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={`/attractions/${id}/exhibitions`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {language === "en" ? "Back to Exhibitions" : "返回展览列表"}
          </Link>
          <LanguageToggle />
        </div>

        {/* Exhibition Image */}
        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src={exhibition.imageUrl}
            alt={exhibition.name[language]}
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <header className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {exhibition.name[language]}
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            {attraction.name[language]}
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            {exhibition.description[language]}
          </p>
        </header>

        {exhibition.stories.length > 0 && (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {language === "en" ? "Audio Stories" : "语音故事"}
              </h2>
            </div>

            <div className="space-y-4">
              {exhibition.stories.map((story) => (
                <div
                  key={story.id}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {story.title[language]}
                    </h3>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {story.duration}
                    </span>
                  </div>

                  {/* Audio Player */}
                  <audio
                    key={language}
                    controls
                    className="mb-4 w-full"
                    src={story.audioUrl[language]}
                  >
                    {language === "en"
                      ? "Your browser does not support the audio element."
                      : "您的浏览器不支持音频元素。"}
                  </audio>

                  <p className="text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {story.transcript[language]}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {exhibition.stories.length === 0 && (
          <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-500 dark:text-zinc-400">
              {language === "en"
                ? "No audio stories available yet."
                : "暂无语音故事。"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
