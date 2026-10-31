'use client';

import Link from 'next/link';

interface ServicesProps {
  lang: 'ar' | 'en';
}

export default function Services({ lang }: ServicesProps) {
  const t = {
    badge: lang === 'ar' ? 'خدماتنا' : 'Our Services',
    title: lang === 'ar' ? 'خدمات تصميم وتطوير المواقع الإلكترونية' : 'Web Design & Development Services',
    subtitle: lang === 'ar' ? 'حلول متكاملة تلبي احتياجاتك وتدعم نمو مشروعك الرقمي.' : 'Integrated solutions that meet your needs and support your digital growth.',
    
    card1Title: lang === 'ar' ? 'تصميم مواقع WordPress' : 'WordPress Design',
    card1Desc: lang === 'ar' ? 'مواقع احترافية سهلة الإدارة ومناسبة لجميع الأنشطة.' : 'Professional, easy-to-manage sites suitable for all businesses.',
    
    card2Title: lang === 'ar' ? 'تطوير مواقع Next.js' : 'Next.js Development',
    card2Desc: lang === 'ar' ? 'مواقع وتطبيقات ويب بأداء عالي والمرونة أكبر.' : 'High-performance web apps with greater flexibility.',
    
    card3Title: lang === 'ar' ? 'تصميم واجهات UI/UX' : 'UI/UX Design',
    card3Desc: lang === 'ar' ? 'تصميم احترافي يركز على سهولة الاستخدام.' : 'Professional design focused on ease of use.',
    
    card4Title: lang === 'ar' ? 'تحسين المواقع وتطويرها' : 'Website Optimization',
    card4Desc: lang === 'ar' ? 'تحسين الأداء والسرعة وتجربة المستخدم.' : 'Improving performance, speed, and user experience.',
  };

  return (
    <section className="relative w-full py-24 px-4 bg-[#f5f7f5] text-slate-900 overflow-hidden">
      
      {/* "نغبشة خضرا" (تأثير إضاءة خلفية ناعم ومتوهج) */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-300/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* شارة العنوان */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-sm font-semibold mb-4 shadow-sm">
          {t.badge}
        </div>

        {/* العنوان الرئيسي والوصف */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-3">
          {t.title}
        </h2>
        <p className="text-slate-600 text-center max-w-xl mb-12 text-base">
          {t.subtitle}
        </p>

        {/* شبكة الكروت (4 كروت بروابط وسلوغ مخصصة لكل خدمة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* الكارت الأول: WordPress */}
          <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.63 12c0-1.77.58-3.41 1.57-4.73L10.3 19.3c-3.62-.7-6.67-3.75-6.67-7.3zm8.37 8.37c-.7 0-1.38-.09-2.03-.25l3.18-9.25 3.3 9.07c-1.38.27-2.81.43-4.45.43zm5.7-2.61l-3.52-9.68 2.05-5.63c3.04 1.76 5.1 5.04 5.1 8.81 0 2.1-.64 4.05-1.74 5.66l-1.07-3.16zM12 10.35l-2.42-7.05c.78-.18 1.59-.28 2.42-.28.84 0 1.66.1 2.45.29L12 10.35z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.card1Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.card1Desc}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <Link href="/services/wordpress" className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* الكارت الثاني: Next.js */}
          <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-inner font-bold text-lg">
                N
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.card2Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.card2Desc}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <Link href="/services/nextjs" className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* الكارت الثالث: UI/UX */}
          <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.card3Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.card3Desc}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <Link href="/services/ui-ux" className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* الكارت الرابع: تحسين الأداء وتطويرها */}
          <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.card4Title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.card4Desc}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <Link href="/services/optimization" className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}