"use client";

import { attractions } from "@/data/attractions";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-10 text-center">
          <div className="mb-4 flex justify-end">
            <LanguageToggle />
          </div>
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-sky-500 to-blue-500 p-4 shadow-lg">
              <svg
                className="h-10 w-10 text-white"
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
          </div>
          <h1 className="bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
            {language === "en" ? "Audio Tours" : "语音导览"}
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            {language === "en"
              ? "Discover history through immersive stories"
              : "通过沉浸式故事探索历史"}
          </p>
        </header>

        <div className="space-y-4">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              href={`/attractions/${attraction.id}`}
              className="group block overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center p-6">
                <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-md">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-sky-700">
                    {attraction.name[language]}
                  </h2>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
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
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                    {attraction.exhibitions.length}{" "}
                    {language === "en" ? "audio tours" : "个语音导览"}
                  </p>
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
          ))}
        </div>

        <footer className="mt-12 text-center text-sm text-slate-500">
          {language === "en"
            ? "Put on your headphones and start exploring"
            : "戴上耳机，开始探索之旅"}
        </footer>
      </main>
    </div>
  );
}
