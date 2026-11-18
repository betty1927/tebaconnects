import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import SafeImage from '../../components/SafeImage';
import { Icon } from '../../components/Icons';
import aboutData from '../../data/about.json';

export default function AboutUsPage() {
  const { hero, overview, visionMission, story, approach, founder, cta } = aboutData;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleBlack2={hero.headlineBlack2}
        titleRed={hero.headlineRed}
        description={hero.supportingLine}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      {/* 2. ABOUT TEBA CONNECTS & VISION / MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            {overview.title}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#071B31] mt-2 mb-6">
            {overview.headline}
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            {overview.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "font-medium text-gray-900" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Vision & Mission Cards (Approved One-Pager Copies) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vision (Signature Red Box) */}
          <div className="bg-[#B42034] text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-10 pointer-events-none text-white">
              <Icon name="target" className="w-full h-full" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Icon name="target" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                {visionMission.vision.title}
              </h3>
              <p className="text-white/95 leading-relaxed text-sm sm:text-base">
                {visionMission.vision.description}
              </p>
            </div>
          </div>

          {/* Mission (Deep Navy Box) */}
          <div className="bg-[#071B31] text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-10 pointer-events-none text-white">
              <Icon name="compass" className="w-full h-full" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Icon name="compass" className="w-6 h-6 text-[#B42034]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                {visionMission.mission.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {visionMission.mission.description}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR STORY & WHY WE EXIST */}
      <section className="bg-[#FAFBFD] py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10 overflow-hidden">
            
            {/* Skyline Image */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] rounded-2xl overflow-hidden shadow-inner">
              <SafeImage
                src={story.image}
                alt={story.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B31]/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-bold tracking-widest text-white uppercase font-mono">
                  Strategic Bridge Across Key Corridors
                </span>
              </div>
            </div>

            {/* Narrative & Mandate */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
                  Origins & Mandate
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
                  {story.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mt-3">
                  {story.narrative}
                </p>
              </div>

              <div className="border-l-4 border-[#B42034] pl-5 py-3 bg-red-50/50 rounded-r-xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#071B31] mb-1">
                  {story.whyWeExistTitle}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {story.whyWeExist}
                </p>
              </div>

              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full transition-all shadow-sm"
                >
                  <span>Explore Our Core Services</span>
                  <Icon name="arrow-right" className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH (Four Distinct Modules) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
            Our Approach
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Four distinct operational pillars that ensure disciplined delivery and measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:border-[#B42034] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center mb-4 group-hover:bg-[#B42034] group-hover:text-white transition-colors">
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#071B31] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOUNDER & CEO DETAIL SECTION */}
      <section id="founder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-gray-200/90 shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Globe watermark in background */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none text-[#071B31]">
            <Icon name="globe" className="w-full h-full" />
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100 aspect-[4/5] max-w-sm mx-auto">
              <SafeImage
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/50 text-center">
                <span className="text-xs font-bold text-[#071B31] block">{founder.name}</span>
                <span className="text-[10px] text-gray-500">{founder.role}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
                {founder.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#071B31] mt-1">
                {founder.name}
              </h2>
              <div className="text-sm font-semibold text-[#B42034] mt-0.5">
                {founder.role}
              </div>
            </div>

            <p className="text-base font-serif italic text-gray-800">
              {founder.headline}
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <p>{founder.leadBio}</p>
              <p className="font-medium text-gray-900">{founder.chamberExperience}</p>
            </div>

            {/* Founder Quote */}
            <div className="border-l-4 border-[#B42034] pl-4 py-2 bg-red-50/50 rounded-r-xl">
              <blockquote className="text-sm sm:text-base font-serif italic text-[#071B31] leading-relaxed">
                “{founder.quote}”
              </blockquote>
              <div className="text-xs font-bold text-[#B42034] mt-1">
                — {founder.name}, {founder.role}, Teba Connects
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#071B31] hover:bg-[#0D2744] rounded-full transition-all shadow-sm"
              >
                <span>Request Executive Meeting</span>
                <Icon name="arrow-right" className="w-4 h-4 text-[#B42034]" />
              </Link>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 hover:text-[#B42034] transition-colors border border-gray-200 rounded-full hover:border-[#B42034]"
              >
                <Icon name="linkedin" className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
