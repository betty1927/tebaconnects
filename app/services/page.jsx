import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import SafeImage from '../../components/SafeImage';
import { Icon } from '../../components/Icons';
import servicesData from '../../data/services.json';

export default function ServicesPage() {
  const { hero, overview, services, approachStrip, cta } = servicesData;

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

      {/* 2. OVERVIEW INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Strategic Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#B42034] mt-2 mb-4">
            {overview.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            {overview.subtitle}
          </p>
        </div>
      </section>

      {/* 3. FIVE SERVICES DETAILED BREAKDOWN */}
      <section id="services-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-12 sm:space-y-16">
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10 hover:shadow-md transition-shadow scroll-mt-24"
            >
              {/* Image preview */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-gray-100 shadow-inner relative border border-gray-100">
                  <SafeImage
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1 rounded-full text-xs font-bold text-[#B42034] shadow-xs">
                    Service {srv.number}
                  </div>
                </div>
              </div>

              {/* Service content */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs font-mono font-bold text-[#B42034] uppercase tracking-wider">
                    {srv.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-base font-semibold text-gray-900 leading-relaxed">
                  {srv.summary}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {srv.description}
                </p>

                {/* Who We Support */}
                <div className="p-3.5 bg-[#FAFBFD] rounded-xl border border-gray-200">
                  <span className="text-xs font-bold text-[#071B31] uppercase tracking-wider block mb-1">
                    Who We Support:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    {srv.whoWeSupport}
                  </p>
                </div>

                {/* Illustrative Deliverables */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Illustrative Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B42034] mt-1.5 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm hover:shadow transition-all"
                  >
                    <span>{srv.ctaText}</span>
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. APPROACH STRIP (Dark Navy Strip Matching Mockup Page 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 bg-[#071B31] rounded-2xl border border-gray-800 shadow-md">
          {approachStrip.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white shrink-0">
                <Icon name={item.icon || 'globe'} className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wider">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
