import React from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import CtaBanner from '../../components/CtaBanner';
import SafeImage from '../../components/SafeImage';
import { Icon } from '../../components/Icons';
import eventsData from '../../data/events.json';

export default function EventsPage() {
  const { hero, events, eventFormats, cta } = eventsData;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.introduction}
        primaryCta={{ label: "Explore Confirmed Events", href: "#events-list" }}
        secondaryCta={{ label: "Discuss an Event or Delegation", href: "/contact?inquiry=Events%20&%20Trade%20Missions" }}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />

      {/* 2. CONFIRMED EVENTS LISTING & DETAIL SECTIONS */}
      <section id="events-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Calendar & Platforms
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#B42034] mt-1">
            Confirmed Forums & Showcases
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Structured business forums, trade delegations, and invitation-only investor roundtables with verified dates and official registration destinations.
          </p>
        </div>

        <div className="space-y-16">
          {events.map((evt) => (
            <div
              key={evt.id}
              id={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-10 scroll-mt-24"
            >
              {/* Event Header Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-gray-100">
                {/* Visual Banner */}
                <div className="lg:col-span-5">
                  <div className="aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100">
                    <SafeImage
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover opacity-95"
                    />
                    <div className="absolute top-4 left-4 bg-[#B42034] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-xs">
                      {evt.badge}
                    </div>
                  </div>
                </div>

                {/* Primary Metadata */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {evt.statusType}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[#B42034] font-bold">{evt.verifiedDate}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{evt.venue}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] leading-tight">
                    {evt.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {evt.details.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#FAFBFD] rounded-2xl border border-gray-200 text-xs">
                    <div>
                      <span className="font-bold text-[#071B31] block mb-0.5">Organizer:</span>
                      <span className="text-gray-600">{evt.organizer}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#071B31] block mb-0.5">Teba Connects Role:</span>
                      <span className="text-[#B42034] font-semibold">{evt.tebaRole}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Six Structured Detail Modules: Overview | Who Should Attend | Exhibitor/Sponsor | Delegation Package | Agenda/Venue | Inquiry Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                
                {/* Module 1: Who Should Attend */}
                <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#B42034]">
                      <Icon name="users" className="w-5 h-5" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B31]">
                        Who Should Attend
                      </h4>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {evt.details.whoShouldAttend}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500 font-medium">
                    Audience: {evt.audience}
                  </div>
                </div>

                {/* Module 2: Exhibitor & Sponsor Options */}
                <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#B42034]">
                      <Icon name="building" className="w-5 h-5" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B31]">
                        Exhibitor & Sponsor Options
                      </h4>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {evt.details.exhibitorSponsorOptions}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500 font-medium">
                    Options: {evt.participationOptions}
                  </div>
                </div>

                {/* Module 3: Delegation Package & Agenda/Venue */}
                <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#B42034]">
                      <Icon name="plane" className="w-5 h-5" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B31]">
                        Delegation Package & Agenda
                      </h4>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-2">
                      {evt.details.delegationPackage}
                    </p>
                    <p className="text-[11px] text-gray-500 italic">
                      Venue: {evt.details.agendaVenue}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Official Registration & Delegation Inquiry */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">Participation Tier:</span> {evt.participationOptions}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={evt.registrationLink}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm hover:shadow transition-all"
                  >
                    <span>{evt.details.inquiryFormText}</span>
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. EVENT & DELEGATION FORMATS */}
      <section className="bg-[#FAFBFD] py-16 border-y border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Convening Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
              Event & Delegation Formats
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Proven convening structures tailored for bilateral governments, institutional capital allocators, and industry associations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventFormats.map((fmt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs hover:border-[#B42034] hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center mb-4">
                  <Icon name={fmt.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#071B31] mb-2">{fmt.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{fmt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
