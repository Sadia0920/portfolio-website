import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project5Details() {

  useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);

  return (
<div>
<section className="w-10/12 mx-auto my-10 pb-5">
<div className="about-content">
  <div className="card bg-base-100 shadow-lg projectCard" data-aos="fade-up">
  <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down" data-aos-delay="100">🎟️ Discount pro</h2>
  <p className='text-gray-700 text-lg font-medium py-4 px-10'>
    <span className='font-bold text-gray-900'>🔍Overview:</span>
    <br></br>
    The purpose of Discount Pro is to make  a platform for users to discover and access discounts, deals, and promotional codes from various retailers and service providers.
    <br></br>
    <br></br>
    <span className='font-bold text-gray-900'>🎯Target Sector:</span>
    <ul className="list-disc list-inside">
      <li>General Users – Help to find discount coupon.</li>
      <li>Brands – Helps brands to promot their brand with a discount coupon.</li>
    </ul>
    <br></br>
    <span className='font-bold text-gray-900'>✨Key Features:</span>
  <ul className="list-disc list-inside">
    <li>🏷️ Sales Store Display – If a sale is active, only stores with ongoing sales will be shown on the home page.</li>
    <li>🎟️ Coupon Visibility – Logged-in users can view coupon details, while non-logged-in users cannot.</li>
    <li>✏️ Profile Management – Users can update their information after logging in.</li>
    <li>🛍️ Shop Redirection – Users can redirect to the store’s website by clicking the "Use Now" button.</li>
    <li>🔐 User Authentication – Users can register and log in to access exclusive features.</li>
    <li>🔑 Google Authentication – Users can also log in using their Google accounts for convenience.</li>
    <li>📋 Copy to Clipboard – Users can copy coupon codes with a single click for easy use.</li>
    <li>🔄 Password Reset – Users can reset their password if they forget it.</li>
    <li>📱 Responsive Design Fully optimized for all devices — desktop, tablet, and mobile.</li>
  </ul>
  <br></br>
    <span className='font-bold text-gray-900'>🛠️Technologies Used:</span>
    <br></br>
    This project utilizes a modern web development stack, combining frontend and backend tools to deliver a robust and responsive application:
    <ul className="list-disc list-inside">
      <li>React.js – A JavaScript library for building dynamic and interactive user interfaces.</li>
      <li>JavaScript(ES6+) – The primary programming language used throughout the project.</li>
      <li>Tailwind CSS – A utility-first CSS framework for building responsive and modern UIs quickly.</li>
      <li>Firebase – Handles authentication, real-time database operations, and cloud storage services.</li>
      <li>Node.js – A JavaScript runtime environment for executing server-side code.</li>
    </ul>
  </p>
  </div>
</div>
</section>
</div>
  )
}
