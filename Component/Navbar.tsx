'use client';

import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  lang: 'ar' | 'en';
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const whatsappNumber = "201020347946";
  const whatsappMessage = encodeURIComponent(
    lang === 'ar' 
      ? "مرحباً عمرو، أرغب في البدء بمشروع جديد معك." 
      : "Hello Amr, I would like to start a new project with you."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const t = {
    home: lang === 'ar' ? 'الرئيسية' : 'Home',
    services: lang === 'ar' ? 'خدماتنا' : 'Services',
    projects: lang === 'ar' ? 'أعمالنا' : 'Projects',
    about: lang === 'ar' ? 'من أنا' : 'About Me',
    blog: lang === 'ar' ? 'المدونة' : 'Blog',
    contact: lang === 'ar' ? 'تواصل معنا' : 'Contact',
    startProject: lang === 'ar' ? 'ابدأ مشروعك' : 'Start Project',
    studioName: lang === 'ar' ? 'عمرو سالم' : 'Amr Salem',
    studioSub: 'Amr Salem Digital Studio',
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f5f7f5] border-b border-emerald-100 shadow-sm overflow-hidden">
      {/* نغبشة خضرا في الخلفية */}
      <div className="absolute top-0 left-1/4 w-96 h-full bg-emerald-300/20 blur-2xl pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-80 h-full bg-teal-300/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-40 flex items-center justify-between">
        
        {/* زر الواتساب وزر اللغة */}
        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-0.5 text-lg"
          >
            <span>{t.startProject}</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </a>

          <button
            onClick={onToggleLang}
            className="px-4 py-3 rounded-xl border border-emerald-300 bg-white hover:bg-slate-50 text-emerald-800 font-bold text-base transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span className={lang === 'ar' ? 'text-emerald-600 underline' : 'text-slate-400'}>AR</span>
            <span className="text-slate-300">/</span>
            <span className={lang === 'en' ? 'text-emerald-600 underline' : 'text-slate-400'}>EN</span>
          </button>
        </div>

        {/* روابط التنقل */}
        <nav 
          className={`hidden md:flex items-center gap-8 text-slate-800 font-semibold text-lg ${
            lang === 'en' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <Link href="/" className="text-emerald-700 font-bold relative py-1 hover:text-emerald-800 transition-colors">
            {t.home}
            <span className="absolute bottom-0 right-0 w-full h-0.5 bg-emerald-600 rounded-full" />
          </Link>
          <Link href="/services" className="hover:text-emerald-700 transition-colors">{t.services}</Link>
          <Link href="/projects" className="hover:text-emerald-700 transition-colors">{t.projects}</Link>
          <Link href="/about" className="hover:text-emerald-700 transition-colors">{t.about}</Link>
          <Link href="/blog" className="hover:text-emerald-700 transition-colors">{t.blog}</Link>
          <Link href="/contact" className="hover:text-emerald-700 transition-colors">{t.contact}</Link>
        </nav>

        {/* اللوجو */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex flex-col items-end">
            <span className="font-extrabold text-slate-900 text-2xl leading-tight">{t.studioName}</span>
            <span className="text-sm text-emerald-700 font-bold tracking-wide">{t.studioSub}</span>
          </div>
          
          <div className="relative w-36 h-28 flex items-center justify-center">
            <Image
              src="/amr salem.webp"
              alt="Amr Salem Logo"
              fill
              sizes="(max-width: 144px) 100vw, 144px"
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </Link>

      </div>
    </header>
  );
}