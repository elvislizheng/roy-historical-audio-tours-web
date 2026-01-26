"use client";

import { attractions } from "@/data/attractions";
import { exhibitions } from "@/data/exhibitions";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ExhibitionsPage({ params }: PageProps) {
  const { id } = use(params);
  const { language } = useLanguage();
  const attraction = attractions.find((a) => a.id === id);

  if (!attraction) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] font-sans">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <Link
              href={`/attractions/${attraction.id}`}
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

        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#e85a4f]">
            {attraction.shortName}
          </p>
          <h1 className="mt-4 text-4xl font-light text-white md:text-5xl">
            {language === "en" ? "Exhibitions" : "展览"}
          </h1>
          <p className="mt-4 text-neutral-400">
            {attraction.name[language]}
          </p>
        </div>

        <div className="grid gap-4">
          {attraction.exhibitions.map((exhibition, index) => {
            const exhibitionDetail = exhibitions[exhibition.id];
            const hasStories = exhibitionDetail?.stories?.length > 0;
            const colors = ["#e85a4f", "#4ecdc4", "#f7b731", "#a55eea", "#26de81"];
            const color = colors[index % colors.length];

            return (
              <Link
                key={exhibition.id}
                href={`/attractions/${attraction.id}/exhibitions/${exhibition.id}`}
                className="group flex items-center justify-between border border-neutral-800 p-6 transition-all hover:border-neutral-600 hover:bg-[#222]"
                style={{ "--hover-color": color } as React.CSSProperties}
              >
                <div className="flex items-center gap-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center text-xl font-light text-white"
                    style={{ backgroundColor: color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="text-xl font-light text-white group-hover:text-[var(--hover-color)]">
                      {exhibition.name[language]}
                    </h2>
                    {hasStories ? (
                      <p className="mt-1 text-sm text-neutral-500">
                        {exhibitionDetail.stories.length}{" "}
                        {language === "en" ? "audio stories" : "个语音故事"}
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-neutral-600">
                        {language === "en" ? "Coming soon" : "即将推出"}
                      </p>
                    )}
                  </div>
                </div>
                <svg
                  className="h-6 w-6 text-neutral-600 transition-all group-hover:translate-x-1 group-hover:text-[var(--hover-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
