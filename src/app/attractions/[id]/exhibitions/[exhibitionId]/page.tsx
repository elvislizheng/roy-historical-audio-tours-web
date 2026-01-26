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
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={`/attractions/${id}/exhibitions`}
            className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:bg-sky-100 hover:shadow-md"
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
            {language === "en" ? "Back" : "返回"}
          </Link>
          <LanguageToggle />
        </div>

        {/* Exhibition Image */}
        <div className="mb-6 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={exhibition.imageUrl}
            alt={exhibition.name[language]}
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        {/* Exhibition Info */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-sky-200 bg-white p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-md">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                {exhibition.name[language]}
              </h1>
              <p className="mt-1 text-sm text-sky-600">
                {attraction.name[language]}
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                {exhibition.description[language]}
              </p>
            </div>
          </div>
        </div>

        {exhibition.stories.length > 0 && (
          <>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"></div>
              <h2 className="text-xl font-bold text-slate-800">
                {language === "en" ? "Audio Stories" : "语音故事"}
              </h2>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                {exhibition.stories.length}
              </span>
            </div>

            <div className="space-y-4">
              {exhibition.stories.map((story, index) => (
                <div
                  key={story.id}
                  className="overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-md"
                >
                  {/* Story Header */}
                  <div className="flex items-center gap-4 bg-sky-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-lg font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-slate-800">
                        {story.title[language]}
                      </h3>
                      <p className="flex items-center gap-1 text-sm text-slate-500">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {story.duration}
                      </p>
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="px-4 py-3">
                    <audio
                      key={language}
                      controls
                      className="w-full rounded-lg"
                      src={story.audioUrl[language]}
                    >
                      {language === "en"
                        ? "Your browser does not support the audio element."
                        : "您的浏览器不支持音频元素。"}
                    </audio>
                  </div>

                  {/* Transcript */}
                  <div className="border-t border-sky-100 p-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {story.transcript[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {exhibition.stories.length === 0 && (
          <div className="rounded-2xl border border-sky-200 bg-white p-10 text-center shadow-lg">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
              <svg
                className="h-8 w-8 text-sky-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-slate-600">
              {language === "en"
                ? "Audio stories coming soon"
                : "语音故事即将推出"}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {language === "en"
                ? "Check back later for immersive audio content"
                : "请稍后查看沉浸式语音内容"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
