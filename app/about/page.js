import Image from "next/image";
import aboutHome from '../assets/images/abouthome.png'
import happyDocs from '../assets/about/happydocs.jpg'
import {
FaCheckCircle,
FaTooth,
FaCalendarAlt,
FaUserMd,
FaClipboardList,
FaSyncAlt,
} from "react-icons/fa";
import Testimonial from "../components/testimonial";
import Whychooseus from "../components/whychooseus";
import Ourteam from "../components/our-team";
import FAQquestions from "../components/faq-questions";
import BookAppointment from "../components/book-appiontment";
import NewsLetter from "../components/news-letter";

// Change this once and it updates everywhere 🔑
const location = "Buckinghamshire";

export const metadata = {
title: `About Us | Cosmetic & General Dentistry in ${location}`,
description: `With 15+ years of expertise in dental care, our ${location} dental clinic provides trusted cosmetic dentistry, teeth whitening, dental implants, sealants, and general dental services.`,
keywords: [
`Dentist ${location}`,
`Cosmetic Dentist ${location}`,
`Dental Implants ${location}`,
`Teeth Whitening ${location}`,
`Dental Sealants ${location}`,
`General Dentistry ${location}`,
],
openGraph: {
title: `About Our Dental Clinic in ${location}`,
description: `15+ years of trusted expertise in dental care. Specializing in cosmetic and general dentistry including whitening, implants, sealants, and more in ${location}.`,
url: `https://yourdomain.com/about-us`,
images: [
{
url: "/images/about-us-main.jpg",
width: 800,
height: 600,
alt: `About Our Dental Clinic in ${location}`,
},
],
type: "website",
},
};

export default function AboutUs() {
const schemaMarkup = {
"@context": "https://schema.org",
"@type": "Dentist",
name: `${location} Dental Care`,
description: `15 years of expertise in dental care, offering general dentistry, teeth whitening, dental implants, and sealants in ${location}.`,
image: "https://yourdomain.com/images/about-us-main.jpg",
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
};

return (
<main className="mx-auto p-6 font-sans">
{/* JSON-LD SEO */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
/>

{/* Page Header */}
{/* Breadcrumb */}
        <div className="bg-gray-50 py-8 px-6 mt-[5rem]">
          <h1 className="text-3xl font-bold text-center">About Us</h1>
          <p className="text-center text-sm text-gray-500 mt-2">Home / About Us</p>
        </div>

{/* Hero Section */}
<section className="grid md:grid-cols-2 gap-10 items-center max-w-[1200px] mx-auto px-4">
<div className="relative w-full h-[320px] md:h-[400px]">
<Image
src= {aboutHome}
alt={`Dentist performing treatment in ${location} clinic`}
fill
className="object-cover rounded-lg"
priority
/>
</div>
<div>
<h2 className="text-blue-600 font-bold uppercase mb-2">About Us</h2>
<h3 className="text-2xl font-bold mb-4">
15 Years of Expertise in Dental Care
</h3>
<p className="text-gray-600 mb-4">
Trusted cosmetic and general dentistry serving families in {location}.
From teeth whitening to dental implants, we’re dedicated to creating
confident smiles.
</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-gray-700">
<FaCheckCircle className="text-blue-600" /> Premium Dental Services You Can Trust
</li>
<li className="flex items-center gap-2 text-gray-700">
<FaCheckCircle className="text-blue-600" /> Award-Winning Experts in Dental Care
</li>
<li className="flex items-center gap-2 text-gray-700">
<FaCheckCircle className="text-blue-600" /> Dedicated Experts Behind Every Smile
</li>
</ul>
<button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
Learn More
</button>
</div>
</section>

{/* Services Navigation */}
<section className="mt-12 flex flex-wrap justify-center gap-4 max-w-[1200px] mx-auto px-4">
{["General Dentistry", "Teeth Whitening", "Dental Implant", "Dental Sealants"].map(
(service, idx) => (
<button
key={idx}
className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
>
<FaTooth /> {service}
</button>
)
)}
</section>

{/* Vision & Mission */}
<section className="mt-16 grid md:grid-cols-2 gap-8 text-gray-700">
<div className="bg-white p-6 shadow-md rounded-lg">
<h4 className="font-bold text-lg mb-2">Our Vision</h4>
<p>
Delivering outstanding dental care in {location}, where every patient
receives personalized attention and world-class treatments.
</p>
</div>
<div className="bg-white p-6 shadow-md rounded-lg">
<h4 className="font-bold text-lg mb-2">Our Mission</h4>
<p>
To help families in {location} achieve healthy and confident smiles
with advanced cosmetic and general dentistry.
</p>
</div>
</section>

{/* Doctors Image + Stats */}
<section className="mt-16 text-center max-w-[1200px] mx-auto px-4">
<div className="relative w-full h-[320px] md:h-[400px] mb-6">
<Image
src= {happyDocs}
alt={`Our ${location} dental team`}
fill
className="object-cover rounded-lg"
/>
</div>
<div className="grid md:grid-cols-4 gap-6 text-white">
{[
{ label: "Skilled Doctors", value: "10+" },
{ label: "Years of Experience", value: "15+" },
{ label: "Appointments Booked", value: "20K+" },
{ label: "Patient Satisfaction", value: "99%" },
].map((stat, idx) => (
<div
key={idx}
className="bg-blue-600 p-6 rounded-lg shadow-md text-center"
>
<p className="text-2xl font-bold">{stat.value}</p>
<p className="text-sm">{stat.label}</p>
</div>
))}
</div>
</section>

{/* Services Navigation Again */}
<section className="mt-12 flex flex-wrap justify-center gap-4 max-w-[1200px] mx-auto px-4">
{["General Dentistry", "Teeth Whitening", "Dental Implant", "Dental Sealants"].map(
(service, idx) => (
<button
key={idx}
className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
>
<FaTooth /> {service}
</button>
)
)}
</section>

{/* How It Works */}
<section className="mt-16 text-center max-w-[1200px] mx-auto px-4">
<h3 className="text-xl font-bold mb-8">
The Path to <span className="text-blue-600">Your Perfect Smile</span>
</h3>
<div className="grid md:grid-cols-4 gap-8">
{[
{
icon: <FaCalendarAlt />,
step: "01",
title: "Book Your Appointment",
},
{
icon: <FaUserMd />,
step: "02",
title: "Consultation & Examination",
},
{
icon: <FaClipboardList />,
step: "03",
title: "Personalized Treatment Plan",
},
{
icon: <FaSyncAlt />,
step: "04",
title: "Ongoing Care & Follow-Up",
},
].map((item, idx) => (
<div key={idx} className="text-center">
<div className="flex justify-center items-center text-blue-600 text-4xl mb-3">
{item.icon}
</div>
<p className="font-bold">{item.step}</p>
<h4 className="font-semibold">{item.title}</h4>
<p className="text-gray-600 text-sm mt-1">
Lorem ipsum dolor sit amet, consectetur adipiscing elit
</p>
</div>
))}
</div>
</section>
<div className='bg-[#0b1f40] mt-[2rem]'>
      <Testimonial />
      </div>
      <div className='mt-[2rem]'>
         <Whychooseus />
      </div>
      <div className='mt-[2rem]'>
        <Ourteam />
      </div>
      <div className='mt-[2rem]'>
        <FAQquestions />
      </div>
      <div className='mt-[2rem]'>
        <BookAppointment />
      </div>
      <div className='mt-[2rem]'>
        <NewsLetter />
      </div>
</main>
);
}
