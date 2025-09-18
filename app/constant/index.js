import beforeandafter2 from '../assets/images/beforeandafter/beforeandafter2.jpg'
import beforeandafter3 from '../assets/images/beforeandafter/beforeandafter3.jpg'
import beforeandafter4 from '../assets/images/beforeandafter/beforeandafter4.jpg'


export const createNavLinks = () => [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services/general-dentistry", label: "General Dentistry" },
      { href: "/services/dental-implant", label: "Dental Implant" },
      { href: "/services/emergency-care", label: "Emergency Care" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export const Services = [
  "General Dentistry",
  "Teeth Whitening",
  "Dental Implant",
  "Dental Sealants",
  "Smile Design",
  "Orthodontics",
  "Emergency Care",
  "Pediatric Dentistry",
  "Cosmetic Enhancements",
  "Preventive Treatments",
];

export const beforeafterimages = [
  { src: beforeandafter2, alt: 'Smile Transformation 2' },
  { src: beforeandafter3, alt: 'Smile Transformation 3' },
  { src: beforeandafter4, alt: 'Smile Transformation 3' },
];
