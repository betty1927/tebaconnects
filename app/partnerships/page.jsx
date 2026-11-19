import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import { Icon } from '../../components/Icons';
import partnershipsData from '../../data/partnerships.json';

export default function PartnershipsPage() {
  const { hero, categories, partners, governance, cta } = partnershipsData;

  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case 'Signed Partner':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs whitespace-nowrap">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
            Signed Partner
          </span>
        );
      case 'Prior Engagement':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200/80 shadow-2xs whitespace-nowrap">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-500" />
            Prior Engagement
          </span>
        );
      case 'Prospective Discussion':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/80 shadow-2xs whitespace-nowrap">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-500" />
            Prospective Discussion
          </span>
        );
    }
  };

  return (
    <div className="space-y-14 sm:space-y-20 lg:space-y-24 pb-16">
      
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

      {/* 2. FIVE PARTNERSHIP CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Ecosystem Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
            Five Strategic Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Structured engagement frameworks connecting institutional leadership, capital allocators, and industry organizers across three continents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 sm:p-6 bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:border-[#B42034] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center group-hover:bg-[#B42034] group-hover:text-white transition-colors">
                    <Icon name={cat.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {cat.number}
                  </span>
                </div>

                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B42034] block mb-1">
                  {cat.focus}
                </span>

                <h3 className="text-base sm:text-lg font-serif font-bold text-[#071B31] mb-2 leading-snug">
                  {cat.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {cat.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  Verified Tier
                </span>
                <Link
                  href="/contact?inquiry=Partnership%20Opportunities"
                  className="text-xs font-bold text-[#B42034] hover:underline"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VERIFIED PARTNER FEATURES DIRECTORY (Signed Partners, Prior Engagements, Prospective Discussions) */}
      <section id="partner-roster" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Ecosystem Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
            Verified Partner Features & Engagements
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Each partnership feature displays verified organizational status, corridor alignment, approved description, and authorized permissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-5 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header: Organization and Status Type */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#071B31] leading-snug">
                    {partner.name}
                  </h3>
                  <div className="shrink-0 self-start">
                    {getStatusBadge(partner.statusType)}
                  </div>
                </div>

                {/* Category & Corridor Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {partner.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-[#B42034]">
                    {partner.market}
                  </span>
                </div>

                {/* Approved Description */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  {partner.description}
                </p>

                {/* Sector focus */}
                <div className="p-3 bg-[#FAFBFD] rounded-xl border border-gray-200 mb-4 text-xs">
                  <span className="font-bold text-[#071B31] block mb-0.5">Relevant Sector:</span>
                  <span className="text-gray-700 font-medium">{partner.sector}</span>
                </div>
              </div>

              {/* Footer: Logo Permission & Link */}
              <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500 italic flex items-center gap-1">
                  <span className="text-emerald-600 font-bold">✓</span> {partner.logoPermission}
                </span>
                <Link
                  href={partner.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#B42034] hover:underline"
                >
                  <span>Details</span>
                  <Icon name="arrow-right" className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Governance & Compliance Notice */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-[#FAFBFD] rounded-2xl border border-gray-200 max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#071B31] block mb-1">
            {governance.title}
          </span>
          <p className="text-xs text-gray-600 leading-relaxed">
            {governance.description}
          </p>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.primaryButton}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
