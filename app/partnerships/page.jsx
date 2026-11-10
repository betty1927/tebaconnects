import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import { Icon } from '../../components/Icons';
import partnershipsData from '../../data/partnerships.json';

export default function PartnershipsPage() {
  const { hero, categories, governance, cta } = partnershipsData;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.introduction}
        primaryCta={{ label: "Become a Partner", href: "/contact?inquiry=Partnership%20Opportunities" }}
        secondaryCta={{ label: "View Categories", href: "#categories-list" }}
        image="/assets/partnerships-hero.jpg"
        imageAlt="Teba Connects Strategic Partnerships"
      />

      {/* 2. FIVE PARTNERSHIP CATEGORIES */}
      <section id="categories-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Ecosystem Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
            Five Strategic Categories
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Connecting institutional leadership, capital allocators, and industry organizers across three continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="p-8 bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:border-[#B42034] hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center">
                  <Icon name={cat.icon} className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-gray-400">
                  {cat.number}
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#B42034] mb-1">
                {cat.focus}
              </span>

              <h3 className="text-xl font-serif font-bold text-[#071B31] mb-2">
                {cat.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {cat.description}
              </p>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 mb-4 text-xs text-gray-700">
                <span className="font-bold text-[#071B31] block mb-0.5">Deliverables Scope:</span>
                {cat.deliverables}
              </div>

              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  {cat.relationshipTiers}
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

        {/* Governance Notice */}
        <div className="mt-12 p-6 bg-[#FAFBFD] rounded-2xl border border-gray-200 max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#071B31] block mb-1">
            {governance.title}
          </span>
          <p className="text-xs text-gray-600 leading-relaxed">
            {governance.description}
          </p>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.primaryButton}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
