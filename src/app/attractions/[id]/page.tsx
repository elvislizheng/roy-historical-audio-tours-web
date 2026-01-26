"use client";

import { attractions } from "@/data/attractions";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AttractionPage({ params }: PageProps) {
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
            href="/"
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

        <div className="overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-xl">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-500 px-8 py-10 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/20 p-3">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{attraction.name[language]}</h1>
                <p className="mt-1 text-sky-100">{attraction.shortName}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-lg leading-relaxed text-slate-700">
              {attraction.description[language]}
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-sky-50 p-4 text-slate-600">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{attraction.address[language]}</span>
            </div>

            <div className="mt-8">
              <Link
                href={`/attractions/${attraction.id}/exhibitions`}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0"
                  />
                </svg>
                {language === "en" ? "Start Audio Tour" : "开始语音导览"}
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                  {attraction.exhibitions.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
