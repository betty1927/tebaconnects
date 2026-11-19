'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import SafeImage from '../../components/SafeImage';
import { Icon } from '../../components/Icons';
import insightsData from '../../data/insights.json';

export default function InsightsPage() {
  const { hero, categories, featuredArticle, articles, disclaimer, cta } = insightsData;
  const [activeCategory, setActiveCategory] = useState('All Insights');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(art => {
    const matchesCat = activeCategory === 'All Insights' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.market.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getTypeBadge = (type) => {
    if (type === 'Verified Opportunity') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          Verified Opportunity
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        Strategic Commentary
      </span>
    );
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

      {/* 2. CATEGORIES FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          
          {/* Scrollable Categories on Mobile, Clean Wrap on Desktop */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full md:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#B42034] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search intelligence & topics..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white transition-all"
            />
            <div className="absolute left-3 top-2.5 text-gray-400 pointer-events-none">
              <Icon name="search" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED EXECUTIVE BRIEFING */}
      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="relative rounded-3xl overflow-hidden bg-[#071B31] border border-gray-800 shadow-xl group p-5 sm:p-8 lg:p-12 text-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#B42034] text-white rounded">
                  {featuredArticle.badge}
                </span>
                {getTypeBadge(featuredArticle.type)}
                <span className="text-xs text-gray-300">
                  {featuredArticle.market} • {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif font-bold tracking-tight text-white leading-snug">
                {featuredArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-gray-300">
                <span>By <strong className="text-white">{featuredArticle.author}</strong></span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span className="text-red-300 font-semibold">{featuredArticle.category}</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                {featuredArticle.excerpt}
              </p>

              {/* Key Takeaways */}
              <div className="p-3.5 sm:p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1.5 sm:space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-300 block">
                  Key Strategic Takeaways:
                </span>
                <ul className="space-y-1.5">
                  {featuredArticle.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B42034] mt-1.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] text-gray-400">
                <span className="font-semibold text-gray-300">Source References: </span>
                {featuredArticle.sourceReferences}
              </div>

              <div className="pt-2">
                <Link
                  href={featuredArticle.slug}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full transition-all shadow-sm active:scale-95"
                >
                  <span>{featuredArticle.ctaText}</span>
                  <Icon name="arrow-right" className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-lg relative">
                <SafeImage
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ARTICLES GRID WITH CLEAR COMMENTARY VS VERIFIED OPPORTUNITY DISTINCTION */}
      <section id="articles-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Analytical Library
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
            Perspectives & Analysis
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Categorized market perspectives clearly distinguishing strategic commentary from verified deal opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col group justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative border-b border-gray-100">
                  <SafeImage
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    {getTypeBadge(art.type)}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#071B31]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[10px] font-bold">
                    {art.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400">
                    <span>{art.market}</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#071B31] group-hover:text-[#B42034] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <div className="text-xs text-gray-500 font-medium">
                    By {art.author} • {art.readTime}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>

                  {/* Key Takeaways */}
                  <div className="p-3 bg-[#FAFBFD] rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1">
                    <span className="font-bold text-[#071B31] block mb-1">Key Takeaways:</span>
                    <ul className="space-y-1">
                      {art.keyTakeaways.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                          <span className="w-1 h-1 rounded-full bg-[#B42034] mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[10px] text-gray-500 italic pt-1">
                    <span className="font-semibold text-gray-600">Source References: </span>
                    {art.sourceReferences}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 mt-4">
                <div className="pt-3 flex items-center justify-between">
                  <Link
                    href={art.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B42034] hover:underline"
                  >
                    <span>{art.ctaText}</span>
                    <Icon name="arrow-right" className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytical Disclaimer */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 bg-[#FAFBFD] rounded-2xl border border-gray-200 text-center">
          <p className="text-xs text-gray-600 italic max-w-3xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
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
