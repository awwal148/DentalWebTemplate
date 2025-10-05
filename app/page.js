import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaCalendarCheck, FaUserCheck, FaClipboardList,
  FaRegSmileBeam, FaCheck,
} from 'react-icons/fa'

import aboutHome from './assets/images/abouthome.png'
import patientSmile1 from './assets/images/patientSmile1.jpg'
import patientSmile2 from './assets/images/patientSmile2.jpg'
import dentalHeader from './assets/images/headerImage.jpg'
import service1 from './assets/services-images/service1.jpg'
import service2 from './assets/services-images/service2.jpg'
import service3 from './assets/services-images/service3.jpg'
import Blog from './components/blog'
import FAQquestions from './components/faq-questions'
import NewsLetter from './components/news-letter'
import Beforendafter from './components/beforendafter'
import BookAppointment from './components/book-appiontment'
import SectionNav from './components/section-nav'
import Testimonial from './components/testimonial'
import Whychooseus from './components/whychooseus'
import Ourteam from './components/our-team'

// 🔑 Dynamic location variable
const location = "Buckinghamshire"

// 🧠 SEO Metadata (Next.js App Router)
export const metadata = {
  title: `Home | Trusted Dental Care in ${location}`,
  description: `Welcome to our ${location} dental clinic. We offer cosmetic dentistry, implants, whitening, and general dental services with 15+ years of experience.`,
  keywords: [
    `Dentist ${location}`,
    `Cosmetic Dentist ${location}`,
    `Dental Implants ${location}`,
    `Teeth Whitening ${location}`,
    `Dental Sealants ${location}`,
    `General Dentistry ${location}`,
  ],
  openGraph: {
    title: `Welcome to Our Dental Clinic in ${location}`,
    description: `Expert dental care in ${location} including cosmetic treatments, implants, whitening, and more.`,
    url: `https://yourdomain.com`,
    images: [
      {
        url: "/images/headerImage.jpg",
        width: 1200,
        height: 630,
        alt: `Dental Clinic in ${location}`,
      },
    ],
    type: "website",
  },
}

const Page = () => {
  const steps = [
    { icon: <FaCalendarCheck />, num: "01", title: "Book Your Appointment" },
    { icon: <FaUserCheck />, num: "02", title: "Consultation & Examination" },
    { icon: <FaClipboardList />, num: "03", title: "Personalized Treatment Plan" },
    { icon: <FaRegSmileBeam />, num: "04", title: "Ongoing Care & Follow-Up" },
  ]

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

 
  return (
    <div className='bg-[#f5f5f5]'>
       {/* 🔍 Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {/* Hero Section */}
      <section className="bg-[#f5f5f5] py-20 max-w-[1200px] mx-auto px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 text-center md:text-left md:mr-10">
            <h1 className="text-5xl font-bold text-blue-700"> <span className='text-[#070b42]'>Dental</span> Care You Can <span className='text-[#070b42]'>Trust</span></h1>
            <p className="mt-4 text-lg text-gray-600">
              Gentle, affordable, and professional dental services for the whole family.
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>
          </div>
         <div className="w-full md:w-1/2 mt-8 md:mt-0">
         <div className="relative w-full aspect-[4/3]">
         <Image
        src={dentalHeader}
        alt="Dental care"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded-lg shadow-lg object-cover"
        />
        </div>
        </div>
        </div>
      </section>

      {/* About / Team Section */}

<div className='bg-[#ffffff]'>
<section className="py-16 bg-[#ffffff] max-w-[1200px] mx-auto px-4">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8">
    {/* Text Content */}
    <div className="w-full md:w-1/2">
      <h4 className="text-gray-500 uppercase tracking-wide">ABOUT US</h4>
      <h2 className="text-3xl font-bold text-blue-700">15 Years of Expertise</h2>
      <h2 className="text-3xl font-bold text-[#0b1f40]">In Dental Care</h2>
      <p className="mt-4 text-gray-600">
        Our dedicated dental team brings years of experience and a gentle touch to provide exceptional care for every patient.
      </p>

      {/* Feature List */}
      <div className="mt-4 space-y-2">
        {[
          "Premium Dental Services You Can Trust",
          "Award-Winning Experts In Dental Care",
          "Dedicated Experts Behind Every Smile"
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-600">
            <FaCheck className="text-blue-600" />
            <p>{text}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="/about"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    </div>

    {/* Image */}
    <div className="w-full md:w-1/2">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={aboutHome}
          alt="Dental care"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
</div>

<SectionNav />

      {/* Services Section */}
    <div className='bg-[#f5f5f5]'>
     <section className="py-20 bg-gradient-to-b from-white to-blue-50 max-w-[1200px] mx-auto px-4">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-blue-800 tracking-tight">Our Signature Services</h2>
    <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
      Experience world-class dental care tailored to your smile. Every treatment is delivered with precision, comfort, and care.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10">
    {[
       {
    title: "Emergency Care",
    desc: "Immediate, expert care when dental emergencies strike, because relief shouldn’t wait.",
    img: service1,
    link: "/services/emergency-care",
  },
  {
    title: "General Dentistry",
    desc: "Transform your smile with whitening, veneers, and aesthetic enhancements.",
    img: service2,
    link: "/services/general-dentistry",
  },
  {
    title: "Dental Implants",
    desc: "Restore confidence with permanent, natural-looking tooth replacements.",
    img: service3,
    link: "/services/dental-implant",
  },
    ].map((service, i) => (
      <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
          <Link href={service.link}>
          <span className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition cursor-pointer">
            Learn More →
          </span>
        </Link>
        </div>
      </div>
    ))}
  </div>
</section>
</div>

<SectionNav />

  <Whychooseus />
      {/* Case Stories Section */}
      <div className='bg-[#0b1f40]'>
      <section className="px-6 py-20 bg-gradient-to-b from-[#0b1f40] to-[#0c2041] text-white max-w-[1200px] mx-auto">
  <div className="text-center mb-12">
    <h4 className="uppercase tracking-wide text-blue-300 text-sm">Our Case Stories</h4>
    <h2 className="text-4xl font-extrabold leading-tight">
      Patient Journeys to <span className="text-blue-400">Healthier, Happier Smiles</span>
    </h2>
    <p className="mt-4 max-w-2xl mx-auto text-blue-200 text-lg">
      Real transformations. Real confidence. Discover how our patients reclaimed their smiles.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">
    {[
      {
        title: "A Brighter Tomorrow: Sarah’s Whitening Journey",
        tags: ["2024", "Teeth Whitening", "Dental Care"],
        quote: "“I never thought I’d smile this confidently again.”",
        patientImage: patientSmile1,
      },
      {
        title: "A Beautiful Transformation: Olivia’s Braces Journey",
        tags: ["2024", "Braces Treatment", "Dental Care"],
        quote: "“The team made me feel seen, heard, and truly cared for.”",
        patientImage: patientSmile2,
      },
    ].map((story, i) => (
      <div key={i} className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <div className="relative w-full h-64">
          <Image
            src={story.patientImage}
            alt={story.title}
            fill
            className="object-cover rounded-t-xl"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-700">{story.title}</h3>
          <p className="mt-2 italic text-gray-600">{story.quote}</p>
          <div className="flex flex-wrap gap-2 mt-4 text-sm">
            {story.tags.map((tag, j) => (
              <span key={j} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <button className="mt-6 text-blue-600 hover:text-blue-800 font-semibold transition">
            Read Full Story →
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center mt-12">
    <button className="px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
      Explore All Case Stories
    </button>
  </div>
</section>
</div>
      {/* HOW IT WORKS */}
      <div className='bg-[#ffffff]'>
    <section className="text-center py-20 font-sans text-gray-800 max-w-[1200px] mx-auto px-4">
  <h2 className="text-sm tracking-widest text-blue-500 uppercase">How It Works</h2>
  <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight text-[#0b1f40]">
    The Path to <span className="text-blue-600">Your Perfect Smile</span>
  </h1>
  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
    From your first click to your final check-up, we make every step seamless, personal, and empowering.
  </p>

  <div className="relative mt-16 max-w-6xl mx-auto">
    {/* Decorative dashed line */}
    <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-[90%] h-0.5 border-t-2 border-dashed border-blue-300 z-0" />

    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center group">
          {/* Icon circle */}
          <div className="relative">
            <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              {step.icon}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-blue-600 font-bold text-sm">
              {step.num}
            </div>
          </div>

          {/* Title & description */}
          <h3 className="mt-8 text-lg font-semibold text-blue-700">{step.title}</h3>
          <p className="text-gray-600 text-sm mt-2 max-w-[200px]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-16">
    <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
      Start Your Journey Today
    </button>
  </div>
</section>
</div>

{/* Section Nav */}
<SectionNav />

{/* Book Appointment */}
    <div className="bg-[#f5f5f5]">
<BookAppointment />
</div>

{/* Section Nav */}
<SectionNav />

    <div className='bg-[#0b1f40] max-w-[1200px] mx-auto mt-[3rem]'>
      <Testimonial />
      </div>

<div className="font-sans bg-white text-gray-800">
{/* BEFORE & AFTER */}
<Beforendafter />
{/* Section Nav */}
<SectionNav />

{/* OUR TEAM */}
<Ourteam />
</div>
{/*  Blogging section  */}
 {/* <div className="max-w-[1200px] mx-auto">
<Blog />
</div> */}

{/* FAQ Questions */}
<div className="bg-[#0b1f40]">
<FAQquestions />
</div>

{/* News Letter */}
<NewsLetter />
    </div>
  )
}

export default Page