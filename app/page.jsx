import React from 'react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import IconCard from '../components/IconCard';
import ImageCard from '../components/ImageCard';
import CtaBanner from '../components/CtaBanner';
import SafeImage from '../components/SafeImage';
import { Icon } from '../components/Icons';
import homeData from '../data/home.json';

export default function HomePage() {
  const {
    hero,
    aboutTebaConnects,
    coreServices,
    markets,
    founderPreview,
    strategicPartnerships,
    tebaConnectsAdvantage,
    keySectors,
    featuredEvents,
    approachStrip,
    closingCta
  } = homeData;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        kicker={hero.eyebrow}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.subheadline}
        introduction={hero.introduction}
        taglinePill={hero.taglinePill}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        image={hero.image}
        imageAlt={hero.imageAlt}
        isHome={true}
      />

      {/* 2. ABOUT TEBA CONNECTS (Bridging Opportunity & Execution) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFBFD] rounded-3xl border border-gray-200/90 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              {aboutTebaConnects.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#071B31] mt-2 mb-4 leading-tight">
              {aboutTebaConnects.headline}
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed mb-4">
              {aboutTebaConnects.lead}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {aboutTebaConnects.description}
            </p>
            <Link
              href={aboutTebaConnects.cta.href}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full transition-all shadow-sm"
            >
              <span>{aboutTebaConnects.cta.label}</span>
              <Icon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FIVE CORE SERVICES (Page 3 Approved Titles: 01 to 05) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
              {coreServices.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {coreServices.subtitle}
            </p>
          </div>
          <Link
            href="/services"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B42034] hover:underline"
          >
            <span>View All Five Services</span>
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {coreServices.items.map((service) => (
            <IconCard
              key={service.number}
              icon={service.icon}
              title={service.title}
              description={service.summary}
              number={service.number}
              href={service.href}
              linkText="Learn More"
              variant="card"
              className="hover:-translate-y-1 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* 4. GLOBAL MARKETS (Exactly Three Strategic Corridors: USA | Africa | Middle East) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Strategic Corridors
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
              {markets.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {markets.subtitle}
            </p>
          </div>
          <Link
            href="/global-markets"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B42034] hover:underline"
          >
            <span>Explore All Corridors</span>
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.items.map((m) => (
            <ImageCard
              key={m.id}
              image={m.image}
              badge="STRATEGIC CORRIDOR"
              title={m.region}
              subtitle={m.subtitle}
              description={m.description}
              href={m.href}
              linkText="Market Overview"
              variant="overlay"
              aspectRatio="aspect-[4/3]"
            />
          ))}
        </div>
      </section>

      {/* 5. MEET OUR FOUNDER (Founder-Led Differentiation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-gray-200/90 shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Subtle Globe Motif Layer in Background */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none text-[#071B31]">
            <Icon name="globe" className="w-full h-full" />
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100 aspect-[4/5] max-w-sm mx-auto">
              <SafeImage
                src={founderPreview.image}
                alt={founderPreview.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/50 text-center">
                <span className="text-xs font-bold text-[#071B31] block">{founderPreview.name}</span>
                <span className="text-[10px] text-gray-500">{founderPreview.role}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
                {founderPreview.title}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#071B31] mt-1">
                {founderPreview.headline}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {founderPreview.bio}
            </p>

            {/* Approved Personal Quote */}
            <div className="border-l-4 border-[#B42034] pl-4 py-2 bg-red-50/50 rounded-r-xl">
              <blockquote className="text-sm sm:text-base font-serif italic text-[#071B31] leading-relaxed">
                “{founderPreview.quote}”
              </blockquote>
              <div className="text-xs font-bold text-[#B42034] mt-1">
                — {founderPreview.name}, Founder & CEO, Teba Connects
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={founderPreview.cta.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#071B31] hover:bg-[#0D2744] rounded-full transition-all shadow-sm"
              >
                <span>{founderPreview.cta.label}</span>
                <Icon name="arrow-right" className="w-4 h-4 text-[#B42034]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. STRATEGIC PARTNERSHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Ecosystem & Alliances
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
              {strategicPartnerships.headline}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              {strategicPartnerships.subtitle}
            </p>
          </div>
          <Link
            href={strategicPartnerships.cta.href}
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B42034] hover:underline"
          >
            <span>{strategicPartnerships.cta.label}</span>
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {strategicPartnerships.categories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:border-[#B42034] hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B42034] flex items-center justify-center mb-3">
                <Icon name={cat.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#071B31] mb-1.5">{cat.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-grow">{cat.description}</p>
              <span className="text-[10px] font-semibold text-[#B42034] uppercase tracking-wider bg-red-50/80 px-2 py-0.5 rounded self-start">
                {cat.status}
              </span>
            </div>
          ))}
        </div>

        {/* Verified Relationship Classification Strip */}
        <div className="bg-gray-50/80 rounded-2xl border border-gray-200/70 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold text-[#071B31] uppercase tracking-wider">
              Verified Relationship Integrity & Classification
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Signed Partner
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Prior Engagement
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Prospective Discussion
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {strategicPartnerships.featuredPartners.map((p, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200/80">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mb-1.5 inline-block ${
                  p.statusColor === 'emerald' ? 'bg-emerald-50 text-emerald-700' :
                  p.statusColor === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                }`}>
                  {p.statusType}
                </span>
                <h4 className="font-bold text-[#071B31] line-clamp-1">{p.name}</h4>
                <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE TEBA CONNECTS ADVANTAGE (Three Pillars: Market Access | Strategic Relationships | On-the-Ground Execution) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Signature Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
              {tebaConnectsAdvantage.headline}
            </h2>
            <p className="text-base text-gray-600 mt-2 font-medium">
              {tebaConnectsAdvantage.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {tebaConnectsAdvantage.pillars.map((pillar) => (
              <div key={pillar.id} className="pt-6 md:pt-0 md:px-8 first:pt-0 first:pl-0 last:pr-0 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#B42034] flex items-center justify-center mb-4 shadow-xs">
                  <Icon name={pillar.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#071B31] mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Execution Approach Strip */}
          <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4">
            {approachStrip.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 justify-center md:justify-start bg-gray-50/80 rounded-xl px-4 py-2.5">
                <Icon name={item.icon || 'globe'} className="w-4 h-4 text-[#B42034] shrink-0" />
                <span className="text-xs font-bold text-[#071B31] tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. KEY SECTORS (10 Focus Sectors with Focus Area Disclaimer) */}
      <section className="bg-[#FAFBFD] py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Sectoral Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
              {keySectors.title}
            </h2>
            <p className="text-xs text-gray-500 mt-2 italic">
              {keySectors.disclaimer}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {keySectors.items.map((sec) => (
              <div
                key={sec.id}
                className="bg-white rounded-xl p-4 border border-gray-200/90 shadow-xs hover:border-[#B42034] hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-11 h-11 rounded-full bg-red-50 text-[#B42034] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon name={sec.icon} className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-800 group-hover:text-[#B42034] leading-tight">
                  {sec.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED EVENTS (AGMEX | CAWEE | Africa Investment Circle - Dubai) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Global Convenings
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
              {featuredEvents.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {featuredEvents.subtitle}
            </p>
          </div>
          <Link
            href="/events"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B42034] hover:underline"
          >
            <span>Explore All Events</span>
            <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.items.map((evt) => (
            <ImageCard
              key={evt.id}
              image={evt.image}
              badge={evt.badge}
              title={evt.title}
              subtitle={evt.subtitle || evt.location}
              description={evt.description}
              href={evt.href}
              linkText="Event Details"
              variant="stacked"
            />
          ))}
        </div>
      </section>

      {/* 10. CLOSING CONTACT CTA BANNER */}
      <CtaBanner
        title={closingCta.title}
        subtitle={closingCta.subtitle}
        buttonText={closingCta.buttonText}
        buttonHref={closingCta.buttonHref}
      />

    </div>
  );
}
