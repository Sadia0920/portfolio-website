import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Project2Details() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="w-10/12 mx-auto my-10 pb-5">
      <Link to='/'><i class="fa-solid fa-arrow-left text-2xl text-[#008080] btn" data-aos="fade-down" data-aos-delay="100"></i></Link>
      <div className="about-content">
        <div className="card bg-base-100 shadow-lg projectCard" data-aos="fade-up">
        <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down" data-aos-delay="100">📚 Study Alliance</h2>
        <p className='text-gray-700 text-lg font-medium py-4 px-10'>
          <span className='font-bold text-gray-900'>🔍Overview:</span>
          <br></br>
          Study Alliance is a full-featured educational platform with distinct user roles—Students, Tutors, and Admins. It allows students to create and manage notes, book sessions (paid or free), and learn from tutors who host sessions and provide study materials. Admins oversee session approval and user role management.
          <br></br>
          <br></br>
          <span className='font-bold text-gray-900'>🎯Target Sector:</span>
          <ul className="list-disc list-inside">
            <li>Teachers – Help tutor to create a session and supply study materials.</li>
            <li>Students – Helps students to learn and create a note.</li>
          </ul>
          <br></br>
          <span className='font-bold text-gray-900'>✨Key Features:</span>
        <ul className="list-disc list-inside">
          <li>Three user roles: Student, Tutor, and Admin</li>
          <li>Student dashboard:
            <ul className="list-decimal list-inside">
              <li>Create, manage, and delete notes.</li>
              <li>Book both paid and unpaid sessions.</li>
            </ul>
          </li>
          <li>Tutor dashboard:
            <ul className="list-decimal list-inside">
              <li>Create and offer educational sessions.</li>
              <li>Upload study material for sessions.</li>
            </ul>
          </li>
          <li>Admin controls:
            <ul className="list-decimal list-inside">
              <li>Approve or reject session submissions.</li>
              <li>Modify user roles.</li>
            </ul>
          </li>
          <li>Session types:
            <ul className="list-decimal list-inside">
              <li>Sessions can be either paid or unpaid.</li>
              <li>Stripe integration for processing payments on paid sessions.</li>
            </ul>
          </li>
          <li>JWT-based authentication for secure access control.</li>
          <li>Firebase backend for real-time updates and data storage.</li>
          <li>Responsive Design Fully optimized for all devices — desktop, tablet, and mobile.</li>
          <li>Tooltip, date-picker, and alert support for an intuitive UX.</li>
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
            <li>JWT(JSON Web Token) – Provides secure user authentication and session management.</li>
            <li>Vercel – Platform used for deploying and hosting the backend application.</li>
          </ul>
        </p>
        </div>
      </div>
    </section>
    </div>
  )
}
