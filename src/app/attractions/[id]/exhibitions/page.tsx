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

export default function ExhibitionsPage({ params }: PageProps) {
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
            href={`/attractions/${attraction.id}`}
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
            {language === "en"
              ? `Back to ${attraction.shortName}`
              : `返回${attraction.shortName}`}
          </Link>
          <LanguageToggle />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {language === "en" ? "Exhibitions" : "展览"}
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {attraction.name[language]}
          </p>
        </header>

        <div className="space-y-3">
          {attraction.exhibitions.map((exhibition) => (
            <Link
              key={exhibition.id}
              href={`/attractions/${attraction.id}/exhibitions/${exhibition.id}`}
              className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {exhibition.name[language]}
              </span>
              <svg
                className="h-5 w-5 text-zinc-400"
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
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
