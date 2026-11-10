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
      
      {/* 1. HERO */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.introduction}
        primaryCta={{ label: "Request a Market Conversation", href: "#markets-list" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
        image="/assets/market-usa-large.jpg"
        imageAlt="Teba Connects Three Strategic Corridors"
      />

      {/* 2. THREE REGIONAL CORRIDORS */}
      <section id="markets-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-16">
          {markets.map((market, idx) => (
            <div
              key={market.id}
              id={market.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10 scroll-mt-24"
            >
              {/* Image banner */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-md relative group">
                  <SafeImage
                    src={market.image}
                    alt={market.region}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-4 left-4 bg-[#B42034] text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                    {market.region}
                  </div>
                </div>
              </div>

              {/* Market Content */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
                    Strategic Corridor
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#071B31] mt-1">
                    {market.region}
                  </h2>
                </div>

                <p className="text-base font-semibold text-[#071B31]">
                  {market.subtitle}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {market.overview}
                </p>

                {/* Who We Support */}
                <div className="p-3 bg-[#FAFBFD] rounded-xl border border-gray-200">
                  <span className="text-xs font-bold text-[#071B31] uppercase tracking-wider block mb-1">
                    Who We Support
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    {market.whoWeSupport}
                  </p>
                </div>

                {/* Relevant Sectors */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Relevant Focus Sectors
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {market.relevantSectors.map((sec, sIdx) => (
                      <span key={sIdx} className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-800 rounded">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* How We Help */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    How We Help
                  </h4>
                  <ul className="space-y-1.5">
                    {market.howWeHelp.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-gray-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B42034]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/contact?market=${market.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm transition-all"
                  >
                    <span>Request a Market Conversation</span>
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500 italic max-w-2xl mx-auto">
            {disclaimer}
          </p>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
