'use client';

import { useState } from 'react';
import Navbar from "@/Component/Navbar";
import Hero from "@/Component/Hero";
import StatsBar from "@/Component/StatsBar";
import Services from "@/Component/Services";

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div 
      className={`min-h-screen bg-[#f5f7f5] text-slate-900 transition-colors duration-300 ${lang === 'en' ? 'text-left' : 'text-right'}`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar lang={lang} onToggleLang={toggleLanguage} />
      
      <main>
        <Hero lang={lang} />
        <StatsBar lang={lang} />
        <Services lang={lang} />
      </main>
    </div>
  );
}