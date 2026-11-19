'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import { Icon } from '../../components/Icons';
import contactData from '../../data/contact.json';

export default function ContactPage() {
  const { hero, contactDetails, form } = contactData;
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    workEmail: '',
    phone: '',
    countryMarket: 'USA',
    serviceOfInterest: form.servicesOptions[0],
    message: '',
    privacyConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert("Please confirm your consent to proceed.");
      return;
    }
    setSubmitted(true);
  };

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
        imageClassName="object-cover object-right"
      />

      {/* 2. SPLIT CONTACT DIRECTORY & CONTROLLED FORM */}
      <section id="inquiry-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl border border-gray-200/90 shadow-md p-6 sm:p-10 lg:p-12">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B42034] font-mono">
                Executive Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B31] mt-1 mb-3">
                Contact Information
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect directly with our senior advisory team across the United States, Africa, and the Middle East.
              </p>
            </div>

            <div className="space-y-6">
              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center shrink-0">
                  <Icon name="mail" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Email</h4>
                  {contactDetails.emails.map((em) => (
                    <div key={em}>
                      <a href={`mailto:${em}`} className="text-sm font-semibold text-[#071B31] hover:text-[#B42034] transition-colors">
                        {em}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telephones */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center shrink-0">
                  <Icon name="phone" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Telephone</h4>
                  {contactDetails.phones.map((ph) => (
                    <div key={ph.number}>
                      <a href={`tel:${ph.number.replace(/\s+/g, '')}`} className="text-sm font-semibold text-[#071B31] hover:text-[#B42034] transition-colors">
                        {ph.number} <span className="text-xs text-gray-500 font-normal">({ph.region})</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center shrink-0">
                  <Icon name="globe" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Website</h4>
                  <a
                    href="https://tebaconnects.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#071B31] hover:text-[#B42034] transition-colors"
                  >
                    {contactDetails.website}
                  </a>
                </div>
              </div>

              {/* Markets */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center shrink-0">
                  <Icon name="map-pin" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Target Markets</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {contactDetails.markets.map((m) => (
                      <span key={m} className="text-xs font-bold px-3 py-1 bg-red-50 text-[#B42034] rounded-full border border-red-100">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B42034] flex items-center justify-center shrink-0">
                  <Icon name="linkedin" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">LinkedIn</h4>
                  <div className="space-y-1">
                    <div>
                      <a
                        href={contactDetails.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#0077B5] hover:underline"
                      >
                        Founder Profile: Teba H. Molla
                      </a>
                    </div>
                    <div>
                      <a
                        href={contactDetails.linkedinCompany}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#071B31] hover:text-[#B42034] transition-colors"
                      >
                        Company Profile: Teba Connects
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Five-Service Controlled Form */}
          <div className="lg:col-span-7 bg-[#FAFBFD] p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-serif font-bold text-[#071B31] mb-2">
              {form.title}
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Complete the verified fields below to schedule a consultation with our senior advisory team.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 shadow-sm space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="handshake" className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#071B31]">Inquiry Received</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Teba Connects. An executive advisory principal will review your submission and connect with you within 24 business hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#B42034] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Global Enterprises LLC"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Country / Market *
                  </label>
                  <select
                    value={formData.countryMarket}
                    onChange={(e) => setFormData({ ...formData, countryMarket: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                  >
                    {form.marketOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Service of Interest * (Five Approved Core Services)
                  </label>
                  <select
                    value={formData.serviceOfInterest}
                    onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                  >
                    {form.servicesOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, target corridor, or delegation requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 focus:border-[#B42034] bg-white"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#B42034] focus:ring-[#B42034]"
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
                    {form.privacyConsentText}
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-md transition-all active:scale-95"
                  >
                    <span>{form.submitButton}</span>
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
