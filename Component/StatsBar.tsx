'use client';
interface StatsBarProps {
  lang: 'ar' | 'en';
}

export default function StatsBar({ lang }: StatsBarProps) {
  const t = {
    supportSub: lang === 'ar' ? 'دعم فني' : 'Technical Support',
    supportDesc: lang === 'ar' ? 'مستمر' : '24/7 Support',
    projects: lang === 'ar' ? 'مشروع ناجح' : 'Successful Projects',
    clients: lang === 'ar' ? 'عميل سعيد' : 'Happy Clients',
    tech: lang === 'ar' ? 'تقنيات متقدمة' : 'Advanced Tech',
    techSub: 'Next.js, WP, React',
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 -mt-16 mb-20">
      <div className="w-full bg-slate-900/95 backdrop-blur-xl border border-teal-500/30 rounded-3xl shadow-2xl py-8 px-6 text-white">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-800">
          
          <div className="flex items-center justify-center sm:justify-start gap-4 pt-6 sm:pt-0 px-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 shadow-inner">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636a9 9 0 010 12.728m0 0m-5.656-5.656a3 3 0 10-4.243 0m4.243 4.243L9.878 9.878M3 10v4a2 2 0 002 2h1.5l2.5 3v-7h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4v3l-2.5 3H5a2 2 0 00-2 2zm15 0v4a2 2 0 01-2 2h-1.5" />
              </svg>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xl font-bold text-white tracking-wide">{t.supportSub}</span>
              <span className="text-sm text-slate-400 font-medium">{t.supportDesc}</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-4 pt-6 sm:pt-0 px-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xl font-bold text-white tracking-wide">{t.projects}</span>
              <span className="text-sm text-emerald-400 font-bold">100+</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-4 pt-6 sm:pt-0 px-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 shadow-inner">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xl font-bold text-white tracking-wide">{t.clients}</span>
              <span className="text-sm text-teal-400 font-bold">90%</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-4 pt-6 sm:pt-0 px-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-teal-400 shrink-0 shadow-inner gap-1">
              <span className="text-xs font-mono font-bold">WP / N</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xl font-bold text-white tracking-wide">{t.tech}</span>
              <span className="text-xs text-slate-400 font-medium">{t.techSub}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}