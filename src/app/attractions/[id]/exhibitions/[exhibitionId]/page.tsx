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
    <div className="min-h-screen bg-[#1a1a1a] font-sans">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-8">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <Link
              href={`/attractions/${id}/exhibitions`}
              className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="uppercase tracking-[0.2em]">
                {language === "en" ? "Back" : "返回"}
              </span>
            </Link>
            <LanguageToggle />
          </div>
        </header>

        {/* Exhibition Image */}
        <div className="mb-10 overflow-hidden">
          <Image
            src={exhibition.imageUrl}
            alt={exhibition.name[language]}
            width={1000}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* Exhibition Info */}
        <div className="mb-12 border-b border-neutral-800 pb-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#e85a4f]">
            {attraction.name[language]}
          </p>
          <h1 className="mt-4 text-4xl font-light text-white md:text-5xl">
            {exhibition.name[language]}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400">
            {exhibition.description[language]}
          </p>
        </div>

        {exhibition.stories.length > 0 && (
          <>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-white">
                {language === "en" ? "Audio Stories" : "语音故事"}
              </h2>
              <span className="flex h-7 w-7 items-center justify-center bg-[#e85a4f] text-xs text-white">
                {exhibition.stories.length}
              </span>
            </div>

            <div className="space-y-6">
              {exhibition.stories.map((story, index) => {
                const colors = ["#e85a4f", "#4ecdc4", "#f7b731", "#a55eea", "#26de81"];
                const color = colors[index % colors.length];

                return (
                  <div
                    key={story.id}
                    className="border border-neutral-800 bg-[#1a1a1a]"
                  >
                    {/* Story Header */}
                    <div className="flex items-center gap-6 border-b border-neutral-800 p-6">
                      <div
                        className="flex h-14 w-14 items-center justify-center text-xl font-light text-white"
                        style={{ backgroundColor: color }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-white">
                          {story.title[language]}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-sm text-neutral-500">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {story.duration}
                        </p>
                      </div>
                    </div>

                    {/* Audio Player */}
                    <div className="border-b border-neutral-800 bg-[#222] p-6">
                      <audio
                        key={language}
                        controls
                        className="w-full"
                        src={story.audioUrl[language]}
                      >
                        {language === "en"
                          ? "Your browser does not support the audio element."
                          : "您的浏览器不支持音频元素。"}
                      </audio>
                    </div>

                    {/* Transcript */}
                    <div className="p-6">
                      <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 mb-3">
                        {language === "en" ? "Transcript" : "文字稿"}
                      </p>
                      <p className="leading-relaxed text-neutral-400">
                        {story.transcript[language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {exhibition.stories.length === 0 && (
          <div className="border border-neutral-800 p-12 text-center">
            <p className="text-xl font-light text-neutral-400">
              {language === "en"
                ? "Audio stories coming soon"
                : "语音故事即将推出"}
            </p>
            <p className="mt-3 text-sm text-neutral-600">
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
