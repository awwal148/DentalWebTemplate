'use client';

import React, { useEffect, useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaTooth,
  FaPhoneAlt,
  FaStickyNote,
} from 'react-icons/fa';

const BookAppointment = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true);

    const script = document.createElement('script');
    script.src = 'https://brand.deevidental.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-gray-50 rounded-xl shadow-lg py-12 px-6 max-w-6xl mx-auto animate-fadeIn">
      <div className="grid md:grid-cols-3 gap-10">
        {/* EMBEDDED FORM SECTION */}
        <div className="md:col-span-2">
          <h2 className="uppercase text-sm tracking-widest text-gray-500">
            Book an Appointment
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#1e2838] leading-tight">
            Effortless Online Booking{' '}
            <span className="text-blue-600">for Your Dental Visit</span>
          </h1>

          <div className="mt-8 w-full h-[655px] rounded-md overflow-hidden">
            {showIframe && (
              <iframe
                src="https://brand.deevidental.com/widget/form/xr70WpauAEHHtmsjmvxH"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px',
                }}
                id="inline-xr70WpauAEHHtmsjmvxH"
                title="Deevidental Booking Form"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Form 5"
                data-form-id="xr70WpauAEHHtmsjmvxH"
              ></iframe>
            )}
          </div>
        </div>

        {/* CLINIC INFO SECTION */}
        <div className="space-y-6">
          <div className="bg-blue-600 text-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <FaClock /> Clinic Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Monday to Friday: 09:00 - 22:00</li>
              <li>Saturday: 11:00 - 20:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-gray-800 font-bold text-lg">Your Smile, Our Priority</h3>
            <p className="text-sm mt-2 text-[#1e2838]">24/7 Emergency</p>
            <p className="font-semibold mt-2 text-[#1e2838] flex items-center gap-2">
              <FaPhoneAlt /> (000) 000-0000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;


// import React from 'react';
// import {
//   FaCalendarAlt,
//   FaClock,
//   FaUserMd,
//   FaTooth,
//   FaPhoneAlt,
//   FaStickyNote,
// } from 'react-icons/fa';

// const BookAppointment = () => {
//   return (
//     <section className="bg-gray-50 rounded-xl shadow-lg py-12 px-6 max-w-6xl mx-auto animate-fadeIn">
//       <div className="grid md:grid-cols-3 gap-10">
//         {/* FORM SECTION */}
//         <div className="md:col-span-2">
//           <h2 className="uppercase text-sm tracking-widest text-gray-500">
//             Book an Appointment
//           </h2>
//           <h1 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#1e2838] leading-tight">
//             Effortless Online Booking{' '}
//             <span className="text-blue-600">for Your Dental Visit</span>
//           </h1>

//           <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Name */}
//             <div className="relative">
//               <FaUserMd className="absolute top-3 left-3 text-blue-600" />
//               <input
//                 type="text"
//                 placeholder="Ex. John Doe"
//                 className="pl-10 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Phone */}
//             <div className="relative">
//               <FaPhoneAlt className="absolute top-3 left-3 text-blue-600" />
//               <input
//                 type="text"
//                 placeholder="Enter Phone Number"
//                 className="pl-10 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Appointment Type */}
//             <div className="relative">
//               <FaTooth className="absolute top-3 left-3 text-blue-600" />
//               <select className="pl-10 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>Type of Appointment</option>
//                 <option>Check-up</option>
//                 <option>Cleaning</option>
//                 <option>Whitening</option>
//               </select>
//             </div>

//             {/* Dentist */}
//             <div className="relative">
//               <FaUserMd className="absolute top-3 left-3 text-blue-600" />
//               <select className="pl-10 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>Preferred Dentist</option>
//                 <option>Dr. David Brown</option>
//                 <option>Dr. Emily Watson</option>
//               </select>
//             </div>

//             {/* Date */}
//             <div className="relative">
//               <FaCalendarAlt className="absolute top-3 left-3 text-blue-600" />
//               <input
//                 type="date"
//                 className="pl-10 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Time */}
//             <div className="relative">
//               <FaClock className="absolute top-3 left-3 text-blue-600" />
//               <input
//                 type="time"
//                 className="pl-10 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Notes */}
//             <div className="relative md:col-span-2">
//               <FaStickyNote className="absolute top-3 left-3 text-blue-600" />
//               <textarea
//                 placeholder="Special Requests or Notes"
//                 rows="3"
//                 className="pl-10 border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>

//             {/* Button */}
//             <div className="md:col-span-2 flex justify-center">
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md">
//                 Book Appointment
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* CLINIC INFO SECTION */}
//         <div className="space-y-6">
//           <div className="bg-blue-600 text-white rounded-lg p-6 shadow-sm">
//             <h3 className="font-bold text-lg flex items-center gap-2">
//               <FaClock /> Clinic Hours
//             </h3>
//             <ul className="mt-4 space-y-2 text-sm">
//               <li>Monday to Friday: 09:00 - 22:00</li>
//               <li>Saturday: 11:00 - 20:00</li>
//               <li>Sunday: Closed</li>
//             </ul>
//           </div>

//           <div className="bg-white rounded-lg p-6 shadow-sm border">
//             <h3 className="text-gray-800 font-bold text-lg">Your Smile, Our Priority</h3>
//             <p className="text-sm mt-2 text-[#1e2838]">24/7 Emergency</p>
//             <p className="font-semibold mt-2 text-[#1e2838] flex items-center gap-2">
//               <FaPhoneAlt /> (000) 000-0000
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookAppointment;
