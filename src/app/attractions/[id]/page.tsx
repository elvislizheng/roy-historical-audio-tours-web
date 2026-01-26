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
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
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
            {language === "en" ? "Back to Attractions" : "返回景点列表"}
          </Link>
          <LanguageToggle />
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {attraction.name[language]}
          </h1>
          <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">
            {attraction.shortName}
          </p>

          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            {attraction.description[language]}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {attraction.address[language]}
          </div>

          <div className="mt-8">
            <Link
              href={`/attractions/${attraction.id}/exhibitions`}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {language === "en" ? "View Exhibitions" : "查看展览"}
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-sm dark:bg-zinc-900/20">
                {attraction.exhibitions.length}
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
