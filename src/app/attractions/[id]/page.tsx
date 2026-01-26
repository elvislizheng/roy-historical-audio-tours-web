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
    <div className="min-h-screen bg-[#1a1a1a] font-sans">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <Link
              href="/"
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

        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#e85a4f]">
            {attraction.shortName}
          </p>
          <h1 className="mt-4 text-4xl font-light text-white md:text-5xl">
            {attraction.name[language]}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400">
            {attraction.description[language]}
          </p>
          <div className="mt-6 flex items-center gap-2 text-neutral-500">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{attraction.address[language]}</span>
          </div>
        </div>

        <Link
          href={`/attractions/${attraction.id}/exhibitions`}
          className="group inline-flex items-center gap-4 border border-[#e85a4f] px-8 py-4 text-[#e85a4f] transition-all hover:bg-[#e85a4f] hover:text-white"
        >
          <span className="text-lg font-light uppercase tracking-wider">
            {language === "en" ? "Start Audio Tour" : "开始语音导览"}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current text-sm">
            {attraction.exhibitions.length}
          </span>
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
      </main>
    </div>
  );
}
