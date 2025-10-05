'use client';
import { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import MapClient from "../components/mapClient";
import NewsLetter from "../components/news-letter";

export default function Contact() {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true);
  }, []);

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="w-full bg-gray-100 py-10 text-center mt-[4rem]">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-500 mt-2">Home / Contact Us</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-gray-700 tracking-widest uppercase">
          Contact Us
        </h2>
        <h3 className="text-center text-3xl font-bold mt-2">
          Get in Touch <span className="text-blue-600">with Us</span>
        </h3>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Embedded GHL Form */}
          <div className="w-full h-[500px] rounded-md overflow-hidden bg-white shadow-sm">
            {showIframe && (
              <iframe
                src="https://brand.deevidental.com/widget/form/v18haGgOsPFuxAmYFmPg"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px',
                }}
                id="inline-v18haGgOsPFuxAmYFmPg"
                title="Deevidental Contact Form"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Contact Page"
                data-form-id="v18haGgOsPFuxAmYFmPg"
              ></iframe>
            )}
          </div>

          {/* Right Info Card */}
          <div className="bg-blue-600 text-white p-8 rounded-lg space-y-6">
            <div>
              <h4 className="font-bold text-lg">Address</h4>
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Contact</h4>
              <p>Phone : (000) 000-0000</p>
              <p>Email : example@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Stay Connected</h4>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaFacebookF /></a>
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaPinterestP /></a>
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaInstagram /></a>
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaTwitter /></a>
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Newsletter */}
        <div className="mt-16 space-y-12">
          <MapClient />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}


// 'use client'
// // app/contact/page.js
// import {
//   FaFacebookF,
//   FaPinterestP,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
// import MapClient from "../components/mapClient";// adjust path if needed
// import NewsLetter from "../components/news-letter";

// export default function Contact() {
//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       <div className="w-full bg-gray-100 py-10 text-center mt-[4rem]">
//         <h1 className="text-3xl font-semibold">Contact Us</h1>
//         <p className="text-gray-500 mt-2">Home / Contact Us</p>
//       </div>

//       {/* Contact Section */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-center text-gray-700 tracking-widest uppercase">
//           Contact Us
//         </h2>
//         <h3 className="text-center text-3xl font-bold mt-2">
//           Get in Touch <span className="text-blue-600">with Us</span>
//         </h3>

//         <div className="mt-12 grid md:grid-cols-2 gap-8">
//           {/* Left Form */}
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input type="text" placeholder="Ex. John" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//               <input type="text" placeholder="Ex. Doe" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <input type="email" placeholder="example@gmail.com" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//               <input type="text" placeholder="Enter Phone Number" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//             </div>
//             <input type="text" placeholder="Enter here..." className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
//             <textarea placeholder="Enter here..." rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Send Message</button>
//           </form>

//           {/* Right Info Card */}
//           <div className="bg-blue-600 text-white p-8 rounded-lg space-y-6">
//             <div>
//               <h4 className="font-bold text-lg">Address</h4>
//               <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
//             </div>
//             <div>
//               <h4 className="font-bold text-lg">Contact</h4>
//               <p>Phone : (000) 000-0000</p>
//               <p>Email : example@gmail.com</p>
//             </div>
//             <div>
//               <h4 className="font-bold text-lg">Clinic Hours</h4>
//               <p>Monday to Friday : 09:00 - 22:00</p>
//               <p>Saturday : 11:00 - 20:00</p>
//               <p>Sunday : Closed</p>
//             </div>
//             <div>
//               <h4 className="font-bold text-lg mb-2">Stay Connected</h4>
//               <div className="flex space-x-3">
//                 <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaFacebookF /></a>
//                 <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaPinterestP /></a>
//                 <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaInstagram /></a>
//                 <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaTwitter /></a>
//                 <a href="#" className="bg-white text-blue-600 p-2 rounded-full"><FaYoutube /></a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="relative w-full h-[400px] overflow-hidden mt-[1rem]">
//         <div className="absolute inset-0 z-10">
//         <MapClient />
//         </div>
//         </div>
//       </div>
//       <div className=" mt-[2rem]">
//       <NewsLetter />
//       </div>
//     </div>
//   );
// }
