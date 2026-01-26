"use client";

import { attractions } from "@/data/attractions";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#1a1a1a] font-sans">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-16">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <h1 className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
              {language === "en" ? "Audio Guide" : "语音导览"}
            </h1>
            <LanguageToggle />
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-5xl font-light tracking-tight text-white md:text-6xl">
              {language === "en" ? "Explore" : "探索"}
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              {language === "en"
                ? "Discover history through immersive audio stories"
                : "通过沉浸式语音故事探索历史"}
            </p>
          </div>
        </header>

        <div className="space-y-6">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              href={`/attractions/${attraction.id}`}
              className="group block border border-neutral-800 bg-[#1a1a1a] p-8 transition-all hover:border-[#e85a4f] hover:bg-[#222]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#e85a4f]">
                    {attraction.shortName}
                  </p>
                  <h3 className="mt-2 text-2xl font-light text-white group-hover:text-[#e85a4f] md:text-3xl">
                    {attraction.name[language]}
                  </h3>
                  <p className="mt-3 text-neutral-500">
                    {attraction.exhibitions.length}{" "}
                    {language === "en" ? "exhibitions" : "个展览"}
                  </p>
                </div>
                <div className="text-neutral-600 transition-transform group-hover:translate-x-2 group-hover:text-[#e85a4f]">
                  <svg
                    className="h-8 w-8"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            {language === "en"
              ? "Put on your headphones and start exploring"
              : "戴上耳机，开始探索之旅"}
          </p>
        </footer>
      </main>
    </div>
  );
}
