import React from 'react'
import team1 from '../assets/team-images/team1.jpg'
import team2 from '../assets/team-images/team2.jpg'
import team3 from '../assets/team-images/team3.jpg'
import Image from 'next/image'


const Ourteam = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
    <h2 className="uppercase text-sm tracking-widest text-gray-500">
    Our Team
    </h2>
    <h1 className="text-2xl md:text-3xl font-bold mt-2">
    Meet Our <span className="text-blue-600">Expert</span> Dental Specialists
    </h1>
    
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Dentist 1 */}
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition p-6">
    <Image
    src= {team1}
    alt="Dr. Olivia Hayes"
    className="w-full h-56 object-cover rounded-lg"
    />
    <h3 className="mt-4 font-bold text-lg">Dr. Olivia Hayes</h3>
    <p className="text-gray-500 text-sm">Cosmetic Dentist</p>
    </div>
    
    {/* Dentist 2 */}
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition p-6">
    <Image
    src= {team2}
    alt="Dr. Emily Carter"
    className="w-full h-56 object-cover rounded-lg"
    />
    <h3 className="mt-4 font-bold text-lg">Dr. Emily Carter</h3>
    <p className="text-gray-500 text-sm">General Dentist</p>
    </div>
    
    {/* Dentist 3 */}
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition p-6">
    <Image
    src= {team3}
    alt="Dr. James Walker"
    className="w-full h-56 object-cover rounded-lg"
    />
    <h3 className="mt-4 font-bold text-lg">Dr. James Walker</h3>
    <p className="text-gray-500 text-sm">Orthodontist</p>
    </div>
    </div>
    </section>
  )
}

export default Ourteam