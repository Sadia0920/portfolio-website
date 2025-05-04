import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Project3Details() {

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <div>
      <section className="w-10/12 mx-auto my-10 pb-5">
      <Link to='/'><i class="fa-solid fa-arrow-left text-2xl text-[#008080] btn" data-aos="fade-down" data-aos-delay="100"></i></Link>
      <div className="about-content">
        <div className="card bg-base-100 shadow-lg projectCard" data-aos="fade-up">
        <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down" data-aos-delay="100">✋ VolunForce</h2>
        <p className='text-gray-700 text-lg font-medium py-4 px-10'>
          <span className='font-bold text-gray-900'>🔍Overview:</span>
          <br></br>
          VolunForce is a platform designed to streamline volunteer management. The purpose of this website is helping the organization to find volunteer for social work and for help people to find volunteer work for wellbeing for society.
          <br></br>
          <br></br>
          <span className='font-bold text-gray-900'>🎯Target Sector:</span>
          <ul className="list-disc list-inside">
            <li>Volunteers – Help volunteers to find social work.</li>
            <li>Organizations – Helps organization to find perfect candidate or volunteers.</li>
          </ul>
          <br></br>
          <span className='font-bold text-gray-900'>✨Key Features:</span>
        <ul className="list-disc list-inside">
          <li>📢 Organizer Features:
            <ul className="list-decimal list-inside">
              <li>Can create and manage volunteer need posts.</li>
              <li>Can update existing volunteer need posts.</li>
            </ul>
          </li>
          <li>✋ Volunteer Features:
            <ul className="list-decimal list-inside">
              <li>Can request to participate in volunteer work.</li>
              <li>Can cancel a volunteer request if needed.</li>
            </ul>
          </li>
          <li>🔐 User Authentication – Both Organizers and Volunteers can register and log in, with their information securely stored.</li>
          <li>🔑 Google Authentication – Users can also log in using their Google accounts for convenience.</li>
          <li>🔒 Protected Routes – Some pages are accessible only to registered Organizers and Volunteers.</li>
          <li>📱 Responsive Design Fully optimized for all devices — desktop, tablet, and mobile.</li>
          <li>🎨 Theme Controller – Users can switch between different themes for a personalized experience.</li>
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
            <li>MongoDB – A NoSQL database used to efficiently manage and store application data.</li>
            <li>Node.js – A JavaScript runtime environment for executing server-side code.</li>
            <li>Express.js – A minimalist and flexible Node.js web application framework used for creating RESTful APIs and managing backend logic.</li>
            <li>Vercel – Platform used for deploying and hosting the backend application.</li>
          </ul>
        </p>
        </div>
      </div>
    </section>
    </div>
  )
}
