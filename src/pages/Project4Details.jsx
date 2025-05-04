import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project4Details() {

  useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);

  return (
    <div>
      <section className="w-10/12 mx-auto my-10 pb-5">
      <div className="about-content">
        <div className="card bg-base-100 shadow-lg projectCard" data-aos="fade-up">
        <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down" data-aos-delay="100">🎮 Game Freak Reviews</h2>
        <p className='text-gray-700 text-lg font-medium py-4 px-10'>
          <span className='font-bold text-gray-900'>🔍Overview:</span>
          <br></br>
          Game-Freak-Reviews is a dedicated platform for gamers to explore, review, and discuss the latest and greatest in the gaming world. Whether you're looking for in-depth reviews, expert ratings, or community opinions, we bring you honest, unbiased, and engaging content about video games across all platforms.
          <br></br>
          <br></br>
          <span className='font-bold text-gray-900'>🎯Target Sector:</span>
          <ul className="list-disc list-inside">
            <li>Gamers – helps gamers to know the latest update about game.</li>
          </ul>
          <br></br>
          <span className='font-bold text-gray-900'>✨Key Features:</span>
        <ul className="list-disc list-inside">
          <li>🎮 Gaming Platform Section – A special section to learn more about gaming and explore new trends.</li>
          <li>📝 Game Reviews – Users can add reviews for different games.</li>
          <li>📌 Watchlist – Users can add games to their watchlist to keep track of favorites.</li>
          <li>🔍 Detailed Reviews – Users can view all reviews of a game, along with a details button for more information.</li>
          <li>✍️ My Reviews Section – Users can see only their own reviews in the "My Reviews" section.</li>
          <li>📱 Responsive Design Fully optimized for all devices — desktop, tablet, and mobile.</li>
          <li>🎨 Theme Controller – A theme switcher allows users to customize the website appearance.</li>
          <li>🔐 User Authentication – Users can register and log in, with their information securely stored.</li>
          <li>🔑 Google Authentication – Users can also log in using their Google accounts for convenience.</li>
          <li>🔒 Protected Routes – Some sections of the website are accessible only to registered users.</li>
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
