// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

const  Footer= () => {
return (
<footer className="bg-blue-900 text-white pt-16 pb-6 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

{/* Logo & Socials */}
<div>
<h3 className="text-2xl font-bold flex items-center gap-2">
<span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">D</span>
Dental.
</h3>
<p className="text-gray-300 mt-4 text-sm">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
</p>
<div className="flex gap-3 mt-4">
<a href="#" className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"><FaFacebookF /></a>
<a href="#" className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"><FaTwitter /></a>
<a href="#" className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"><FaInstagram /></a>
<a href="#" className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"><FaPinterest /></a>
<a href="#" className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"><FaYoutube /></a>
</div>
</div>

{/* Company Links */}
<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-gray-300 text-sm">
<li><a href="#">FAQs</a></li>
<li><a href="#">Our Team</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Testimonials</a></li>
</ul>
</div>

{/* Contact Info */}
<div>
<h4 className="font-semibold mb-4">Contact Info</h4>
<p className="text-gray-300 text-sm">(000) 000-0000</p>
<p className="text-gray-300 text-sm">example@gmail.com</p>
<p className="text-gray-300 text-sm">2484 Royal Ln. Mesa,<br/> New Jersey 45463</p>
</div>

{/* Clinic Hours */}
<div>
<h4 className="font-semibold mb-4">Clinic Hours</h4>
<ul className="space-y-2 text-gray-300 text-sm">
<li>Monday to Friday: 09:00 - 22:00</li>
<li>Saturday: 11:00 - 20:00</li>
<li>Sunday: Closed</li>
</ul>
</div>
</div>

{/* Bottom Bar */}
<div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
<p>Copyright © 2024 Dental Website. All Rights Reserved.</p>
<div className="mt-2">
<a href="#" className="hover:underline">User Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a>
</div>
</div>
</footer>
);
}
export default Footer