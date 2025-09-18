// app/booking/page.tsx or page.js (depending on your setup)
import React from 'react'
import BookAppointment from '../components/book-appiontment'
import NewsLetter from '../components/news-letter'
import {
  FaCalendarCheck,
  FaUserCheck,
  FaClipboardList,
  FaRegSmileBeam,
} from 'react-icons/fa'

// 🔑 Dynamic location variable
const location = "Buckinghamshire"

// 🧠 SEO Metadata (Next.js App Router)
export const metadata = {
  title: `Book Appointment | Trusted Dental Care in ${location}`,
  description: `Schedule your dental visit with our experienced team in ${location}. We offer cosmetic dentistry, implants, whitening, and general dental services.`,
  keywords: [
    `Book Dentist ${location}`,
    `Dental Appointment ${location}`,
    `Cosmetic Dentist ${location}`,
    `Dental Implants ${location}`,
    `Teeth Whitening ${location}`,
    `Emergency Dentist ${location}`,
  ],
  openGraph: {
    title: `Book Your Dental Appointment in ${location}`,
    description: `Secure your spot with our expert dental team in ${location}. Fast, easy, and reliable online booking.`,
    url: `https://yourdomain.com/booking`,
    images: [
      {
        url: "/images/headerImage.jpg",
        width: 1200,
        height: 630,
        alt: `Dental Appointment Booking in ${location}`,
      },
    ],
    type: "website",
  },
}

// 🧩 JSON-LD Structured Data
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: `${location} Dental Experts`,
  description: `Providing cosmetic and general dentistry in ${location} for over 15 years.`,
  image: "https://yourdomain.com/images/headerImage.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: location,
    addressCountry: "UK",
  },
  telephone: "+44123456789",
  openingHours: "Mo-Fr 09:00-17:00",
  sameAs: [
    "https://facebook.com/",
    "https://twitter.com/",
    "https://instagram.com/",
  ],
}

const Page = () => {
  const steps = [
    { icon: <FaCalendarCheck />, num: "01", title: "Book Your Appointment" },
    { icon: <FaUserCheck />, num: "02", title: "Consultation & Examination" },
    { icon: <FaClipboardList />, num: "03", title: "Personalized Treatment Plan" },
    { icon: <FaRegSmileBeam />, num: "04", title: "Ongoing Care & Follow-Up" },
  ]

  return (
    <div className="bg-white">
      {/* 🔍 Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Header Section */}
      <div className="w-full bg-gray-100 py-10 text-center mt-[4rem]">
        <h1 className="text-3xl font-semibold">Book an Appointment</h1>
        <p className="text-gray-500 mt-2">Home / Book an Appointment</p>
      </div>

      {/* Booking Steps (Optional Visual Aid) */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {steps.map(({ icon, num, title }) => (
          <div key={num} className="flex flex-col items-center">
            <div className="text-blue-600 text-3xl mb-2">{icon}</div>
            <span className="text-sm text-gray-500 font-semibold">{num}</span>
            <h4 className="text-md font-bold text-[#1e2838] mt-1">{title}</h4>
          </div>
        ))}
      </section>

      {/* Booking Form */}
      <BookAppointment />

      {/* Newsletter */}
      <div className="mt-[2rem]">
        <NewsLetter />
      </div>
    </div>
  )
}

export default Page