import React from 'react'
import { FaStar, FaUserCircle } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <section className="w-full bg-[#0b1f40] py-16 text-white">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2f4cde]">
          <span className="text-white">What Our</span> Patients Say
        </h2>

        <div className="mt-10 overflow-x-auto">
          <div className="flex gap-6 px-4 md:px-0 md:grid md:grid-cols-2 md:gap-8 snap-x snap-mandatory">
            {[
              { name: "Sarah M.", text: "Amazing service! My teeth have never felt this clean.", rating: 5 },
              { name: "James T.", text: "The staff was so kind and made me feel comfortable.", rating: 4 },
              { name: "Amina R.", text: "Professional and gentle care. Highly recommend!", rating: 5 },
              { name: "Liam K.", text: "Quick appointment and great results.", rating: 4 },
            ].map((review, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-0 snap-start p-6 border rounded-lg shadow bg-white text-black flex flex-col items-start"
              >
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <FaUserCircle className="text-3xl" />
                  <h4 className="font-semibold">{review.name}</h4>
                </div>
                <div className="flex gap-1 text-yellow-500 mb-2">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="text-gray-600 text-left">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <a
          href="https://www.google.com/search?q=dental+clinic+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          See More Reviews on Google
        </a>
      </div>
    </section>
  )
}

export default Testimonial