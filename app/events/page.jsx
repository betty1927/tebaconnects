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
      
      {/* 1. HERO */}
      <HeroSection
        kicker={hero.eyebrow}
        breadcrumbs={hero.breadcrumbs}
        titleBlack={hero.headlineBlack}
        titleRed={hero.headlineRed}
        description={hero.introduction}
        primaryCta={{ label: "Discuss an Event", href: "#events-list" }}
        secondaryCta={{ label: "Delegation Formats", href: "#formats" }}
        image="/assets/events-hero.jpg"
        imageAlt="Teba Connects Global Trade Platforms"
      />

      {/* 2. VERIFIED EVENTS LISTING */}
      <section id="events-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
            Calendar & Platforms
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
            Confirmed Forums & Showcases
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Structured business forums, trade delegations, and invitation-only roundtables.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((evt) => (
            <div
              key={evt.id}
              id={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-10 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual */}
                <div className="lg:col-span-5">
                  <div className="aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden relative shadow-sm">
                    <SafeImage
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute top-4 left-4 bg-[#B42034] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase">
                      {evt.badge}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500">
                    <span className="text-[#B42034]">{evt.venue}</span>
                    <span>•</span>
                    <span>{evt.date}</span>
                    <span>•</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{evt.status}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31]">
                    {evt.title}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {evt.description}
                  </p>

                  {/* Role & Audience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#FAFBFD] rounded-xl border border-gray-200 text-xs">
                    <div>
                      <span className="font-bold text-[#071B31] block mb-0.5">Teba Connects Role:</span>
                      <span className="text-gray-600">{evt.tebaRole}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#071B31] block mb-0.5">Who Should Attend:</span>
                      <span className="text-gray-600">{evt.whoShouldAttend}</span>
                    </div>
                  </div>

                  {/* Delegation Package */}
                  <div className="text-xs text-gray-600">
                    <span className="font-bold text-[#071B31] block mb-1">Delegation Package & Participation Options:</span>
                    <span>{evt.delegationPackage} ({evt.participationOptions})</span>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={evt.registrationLink}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm transition-all"
                    >
                      <span>Register / Inquire Delegation</span>
                      <Icon name="arrow-right" className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EVENT FORMATS */}
      <section id="formats" className="bg-[#FAFBFD] py-16 border-y border-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
              Convening Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1">
              Event & Delegation Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventFormats.map((fmt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B42034] flex items-center justify-center mb-4">
                  <Icon name={fmt.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#071B31] mb-1">{fmt.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{fmt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />

    </div>
  );
}
