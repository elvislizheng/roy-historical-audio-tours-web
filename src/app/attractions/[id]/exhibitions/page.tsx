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
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={`/attractions/${attraction.id}`}
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

        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-sky-600">
            {attraction.shortName}
          </p>
          <h1 className="bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
            {language === "en" ? "Choose Your Tour" : "选择您的导览"}
          </h1>
          <p className="mt-2 text-slate-600">
            {attraction.name[language]}
          </p>
        </header>

        <div className="grid gap-4">
          {attraction.exhibitions.map((exhibition) => {
            const exhibitionDetail = exhibitions[exhibition.id];
            const hasStories = exhibitionDetail?.stories?.length > 0;

            return (
              <Link
                key={exhibition.id}
                href={`/attractions/${attraction.id}/exhibitions/${exhibition.id}`}
                className="group overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center p-5">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-md">
                    <svg
                      className="h-6 w-6 text-white"
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
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold text-slate-800 group-hover:text-sky-700">
                      {exhibition.name[language]}
                    </h2>
                    {hasStories && (
                      <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                        <svg
                          className="h-4 w-4 text-sky-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {exhibitionDetail.stories.length}{" "}
                        {language === "en" ? "audio stories" : "个语音故事"}
                      </p>
                    )}
                    {!hasStories && (
                      <p className="mt-1 text-sm text-slate-400">
                        {language === "en" ? "Coming soon" : "即将推出"}
                      </p>
                    )}
                  </div>
                  <div className="ml-4 rounded-full bg-sky-100 p-2 transition-colors group-hover:bg-sky-200">
                    <svg
                      className="h-5 w-5 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
