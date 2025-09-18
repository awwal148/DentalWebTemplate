// components/FAQSection.tsx
"use client";
import { useState } from "react";
import { FaQuestionCircle, FaRegCommentDots } from "react-icons/fa";

const faqs = [
{ q: "What services do you offer?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
{ q: "Do I need to make an appointment?", a: "Yes, appointments are recommended to ensure availability..." },
{ q: "Do you accept walk-in appointments?", a: "Yes, we accept walk-ins depending on availability." },
{ q: "Can I book an emergency dental appointment?", a: "Yes, we provide 24/7 emergency services." },
{ q: "Do you offer online consultations?", a: "Yes, we offer video call consultations." },
{ q: "What is the cost of a dental consultation?", a: "Consultation fees vary depending on services required." },
];

const FAQquestions = () => {
const [openIndex, setOpenIndex] = useState(1);

return (
<section className=" text-white py-16 px-6 max-w-[1200px] mx-auto">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#010221]">
      <span className="text-[#1b3ff2]">Dental Care FAQ:</span> Your Questions Answered
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-10">
      <div className="md:col-span-2 space-y-4">
        {faqs.map((faq, i) => {
  const isOpen = openIndex === i;
  return (
    <div
      key={i}
      className={`rounded-lg overflow-hidden transition-colors duration-300 ${
        isOpen ? 'bg-[#1c3eff] text-white' : 'bg-white text-[#1e2838]'
      }`}
    >
      <button
        className="w-full flex justify-between items-center px-5 py-4 font-medium"
        onClick={() => setOpenIndex(isOpen ? -1 : i)}
      >
        {faq.q}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-sm">
          {faq.a}
        </div>
      )}
    </div>
  );
})}
      </div>

      <div className="space-y-6">
        <div className="bg-[#1c3eff] p-6 rounded-lg text-white">
          <div className="flex items-center space-x-2 mb-2">
            <FaQuestionCircle className="text-white text-lg" />
            <p className="font-medium">You have different questions?</p>
          </div>
          <p className="text-sm text-blue-100">Our team will answer all your questions.</p>
          <a
            href="#"
            className="block mt-4 bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-center"
          >
            Contact Us
          </a>
        </div>

        <div className="bg-white text-black p-6 rounded-lg text-center relative">
          <div className="flex justify-center mb-2">
            <FaRegCommentDots className="text-blue-600 text-3xl" />
          </div>
          <h3 className="font-bold text-lg text-[#1e2838]">24/7 Emergency</h3>
          <p className="text-sm mt-1 text-[#1e2838]">Your Smile, Our Priority</p>
          <p className="mt-3 font-semibold text-blue-600">(000) 000-0000</p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default FAQquestions