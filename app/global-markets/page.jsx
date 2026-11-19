import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import SafeImage from '../../components/SafeImage';
import { Icon } from '../../components/Icons';
import marketsData from '../../data/markets.json';

export default function GlobalMarketsPage() {
  const { hero, markets, disclaimer, cta } = marketsData;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.introduction}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      {/* 2. THREE REGIONAL CORRIDORS */}
      <section id="markets-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-16">
          {markets.map((market, idx) => (
            <div
              key={market.id}
              id={market.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10 hover:shadow-md transition-shadow scroll-mt-24"
            >
              {/* Image banner */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-md relative group border border-gray-100">
                  <SafeImage
                    src={market.image}
                    alt={market.region}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute top-4 left-4 bg-[#B42034] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {market.region}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#071B31]/90 via-[#071B31]/40 to-transparent">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">
                      Strategic Corridor
                    </span>
                  </div>
                </div>
              </div>

              {/* Market Content */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
                    Priority Region
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#071B31] mt-1">
                    {market.region}
                  </h2>
                </div>

                <p className="text-base font-semibold text-[#071B31] leading-relaxed">
                  {market.subtitle}
                </p>

                <p className="text-sm text-gray-700 leading-relaxed font-normal">
                  {market.overview}
                </p>

                {/* Who We Support */}
                <div className="p-3.5 bg-[#FAFBFD] rounded-xl border border-gray-200">
                  <span className="text-xs font-bold text-[#071B31] uppercase tracking-wider block mb-1">
                    Who We Support:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    {market.whoWeSupport}
                  </p>
                </div>

                {/* Relevant Sectors */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Relevant Focus Sectors:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {market.relevantSectors.map((sec, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold px-2.5 py-1 bg-red-50/80 text-[#B42034] rounded-md border border-red-100">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* How We Help */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    How We Help:
                  </h4>
                  <ul className="space-y-1.5">
                    {market.howWeHelp.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-gray-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B42034] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?market=${encodeURIComponent(market.region)}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm hover:shadow transition-all"
                  >
                    <span>Request a Market Conversation</span>
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Compliance Disclaimer */}
        <div className="mt-12 p-5 bg-[#FAFBFD] rounded-2xl border border-gray-200 text-center">
          <p className="text-xs text-gray-600 italic max-w-3xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
        </div>
      </section>

      {/* 3. CLOSING CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
