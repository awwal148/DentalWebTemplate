"use client";

import Head from 'next/head';
import Image from "next/image";
import { FaTooth, FaCheckCircle } from "react-icons/fa";
import { MdMedicalServices, MdOutlineCleaningServices } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import generalImg1 from '../../assets/images/generaldentistry/general1.jpg'
import generalImg2 from '../../assets/images/generaldentistry/general2.jpg'
import BookAppointment from '@/app/components/book-appiontment';
import SectionNav from '@/app/components/section-nav';
import FAQquestions from '@/app/components/faq-questions';
import NewsLetter from '@/app/components/news-letter';

export default function Generaldentistry() {
  return (
    <>
      <Head>
        <title>General Dentistry | SmileCare Dental Clinic</title>
        <meta
          name="description"
          content="Explore our comprehensive general dentistry services including cleanings, exams, fillings, and preventive care for all ages."
        />
        <meta name="keywords" content="general dentistry, dental exams, teeth cleaning, fillings, oral health" />
        <meta property="og:title" content="General Dentistry | Dental Clinic, General dentistry in High Wycombe" />
        <meta property="og:description" content="Comprehensive dental care for your whole family. Learn more about our general dentistry services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/general-dentistry" />
        <meta property="og:image" content="https://yourdomain.com/images/general-dentistry-og.jpg" />
      </Head>

      <main className="bg-white text-gray-800">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-8 px-6 mt-[5rem]">
          <h1 className="text-3xl font-bold text-center">General Dentistry in High Wycombe</h1>
          <p className="text-center text-sm text-gray-500 mt-2">Home / Service Details</p>
        </div>

        {/* Video Thumbnail */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="relative">
            <video
              src= '/generalheader.mp4'
              autoPlay
              loop
              muted
              playsInline
              alt="Dentist Service"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <FiVideo className="text-blue-600 text-6xl bg-white rounded-full p-4 shadow-md" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">About General Dentistry Services</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <p className="text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
          </p>
        </section>

        {/* Services Include */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <h3 className="text-xl font-semibold mb-6">Services Include:</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            {[
              "Lorem ipsum dolor sit amet",
              "Beatae vitae dicta sunt",
              "Sed ut perspiciatis",
              "Explicabo Nemo enim",
              "Vitae dicta sunt explicabo",
              "Veritatis et quasi architecto"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Images */}
        <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Image
            src= {generalImg1}
            alt="Service Example"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
          <Image
            src={generalImg2}
            alt="Service Example"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </section>

        {/* Detailed List */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <h3 className="text-xl font-semibold mb-6">Detailed List of Services:</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaTooth />, title: "Routine Dental Checkups" },
              { icon: <MdOutlineCleaningServices />, title: "Professional Teeth Cleaning" },
              { icon: <MdMedicalServices />, title: "Digital X-Rays" },
              { icon: <FaTooth />, title: "Cavity Fillings" },
              { icon: <FaTooth />, title: "Fluoride Treatments" },
              { icon: <FaTooth />, title: "Sealants" }
            ].map((service, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-start">
                <div className="text-blue-600 text-3xl mb-4">{service.icon}</div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </section>

        <SectionNav />

        {/* Benefits */}
        <section className="max-w-5xl mx-auto px-6 mb-12 mt-4">
          <h3 className="text-xl font-semibold mb-6">Services Benefits:</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Sed do eiusmod tempor incididunt ut labore.",
              "Quis nostrud exercitation ullamco laboris."
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className='mt-4'>
          <BookAppointment />
          </div>
        </section>
        <SectionNav />
        <div className='mt-4'>
          <FAQquestions />
          </div>
          <div className='mt-4'>
          <NewsLetter />
          </div>
      </main>
    </>
  );
}
