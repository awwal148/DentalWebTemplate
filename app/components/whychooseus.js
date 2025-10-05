import Link from 'next/link'
import React from 'react'

const Whychooseus = () => {
  return (
    <>
    {/* Why Choose Us Section */}
      <section className="px-6 py-16 text-center bg-white max-w-[1200px] mx-auto">
        <h4 className="text-gray-500 uppercase tracking-wide">Why Choose Us</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#0b1f40]">
          Benefits of Our Dental Services:
          <span className="text-blue-600 block">Your Path to a Healthier Smile</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600">10+</h3>
            <p className="text-sm">Skilled Doctors</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600">99%</h3>
            <p className="text-sm">Patient Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600">20K+</h3>
            <p className="text-sm">Appointments Booked</p>
          </div>
        </div>
        <ul className="mt-8 space-y-2 text-gray-600">
          <li>✔ Easy Online Appointment Booking</li>
          <li>✔ Experienced and Caring Dentists</li>
          <li>✔ Advanced Dental Equipment</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          <Link href="./booking">Book an Appointment</Link>
        </button>
      </section>
      </>
  )
}

export default Whychooseus