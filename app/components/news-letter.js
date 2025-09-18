// components/Newsletter.tsx
const NewsLetter = () => {
return (
<section className="bg-gray-50 py-16 px-6">
<div className="max-w-3xl mx-auto text-center">
<p className="uppercase text-gray-500 text-sm tracking-widest">Our Newsletter</p>
<h2 className="text-3xl font-bold mt-2">
Subscribe to Our Newsletter for <br />
<span className="text-blue-600">the Latest Updates and Offers</span>
</h2>
<form className="mt-6 flex items-center bg-white rounded-full shadow-md overflow-hidden max-w-lg mx-auto">
<input
type="email"
placeholder="Enter Email Address"
className="flex-1 px-4 py-3 text-gray-700 outline-none"
/>
<button className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition">
Subscribe
</button>
</form>
</div>
</section>
);
}
export default NewsLetter