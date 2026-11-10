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
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.introduction}
        primaryCta={{ label: "Featured Briefing", href: "#featured" }}
        secondaryCta={{ label: "Browse Articles", href: "#articles-grid" }}
        image="/assets/insights-hero.jpg"
        imageAlt="Teba Connects Market Intelligence"
      />

      {/* 2. CATEGORIES FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#B42034] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search intelligence..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034]"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <Icon name="search" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED EXECUTIVE BRIEFING */}
      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="relative rounded-3xl overflow-hidden bg-[#071B31] border border-gray-800 shadow-xl group p-6 sm:p-10 lg:p-12 text-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#B42034] text-white rounded">
                  {featuredArticle.badge}
                </span>
                <span className="text-xs text-gray-300">
                  {featuredArticle.market} • {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white leading-snug">
                {featuredArticle.title}
              </h2>

              <p className="text-sm text-gray-200 leading-relaxed font-light">
                {featuredArticle.excerpt}
              </p>

              {/* Key Takeaways */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B42034] block">
                  Key Strategic Takeaways:
                </span>
                <ul className="space-y-1.5">
                  {featuredArticle.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B42034] mt-1.5 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] text-gray-400">
                <span className="font-semibold text-gray-300">Sources: </span>
                {featuredArticle.sourceReferences}
              </div>

              <div className="pt-2">
                <Link
                  href={featuredArticle.slug}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full transition-all"
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

      {/* 4. ARTICLES GRID */}
      <section id="articles-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                <SafeImage
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-bold text-[#B42034]">
                  {art.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-3">
                <div className="text-[11px] font-semibold text-gray-400">
                  {art.market} • {art.date}
                </div>

                <h3 className="text-lg font-bold text-[#071B31] group-hover:text-[#B42034] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed flex-grow">
                  {art.excerpt}
                </p>

                {/* Key Takeaways */}
                <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-600 space-y-1">
                  <span className="font-bold text-[#071B31] block">Takeaway:</span>
                  <p className="line-clamp-2">{art.keyTakeaways[0]}</p>
                </div>

                <div className="pt-2 border-t border-gray-100 mt-auto">
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

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500 italic max-w-2xl mx-auto">
            {disclaimer}
          </p>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
