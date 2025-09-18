'use client'
// components/BlogSection.tsx
import Image from "next/image";

const blogPosts = [
{
id: 1,
category: "Dental Care Tips",
date: "Dec 15, 2024",
title: "Essential Practices for a Healthy, Beautiful Smile",
desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
image: "/images/blog1.jpg",
},
{
id: 2,
category: "Teeth Whitening",
date: "Dec 14, 2024",
title: "Everything You Need to Know About Teeth Whitening",
desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
image: "/images/blog2.jpg",
},
{
id: 3,
category: "Dental Implant",
date: "Dec 13, 2024",
title: "Everything You Need to Know About Dental Implants",
desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
image: "/images/blog3.jpg",
},
];

const Blog = () => {
return (
<section className="py-16 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl font-bold text-gray-900">
Our Latest <span className="text-blue-600">News & Blog Articles</span>
</h2>
<div className="grid md:grid-cols-3 gap-8 mt-8">
{blogPosts.map((post) => (
<div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
<Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-56 object-cover" />
<div className="p-5">
<span className="bg-blue-600 text-white px-3 py-1 text-xs rounded-md">{post.category}</span>
<p className="text-gray-500 text-sm mt-2">{post.date}</p>
<h3 className="text-lg font-semibold mt-2">{post.title}</h3>
<p className="text-gray-600 text-sm mt-2">{post.desc}</p>
<a href="#" className="text-blue-600 font-medium mt-3 inline-block">Read More →</a>
</div>
</div>
))}
</div>
<div className="text-center mt-10">
<a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
View All Blogs
</a>
</div>
</section>
);
}

export default Blog
