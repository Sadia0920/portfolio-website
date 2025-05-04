import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project1Details() {
  
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="w-10/12 mx-auto my-10 pb-5">
      <div className="about-content">
        <div className="card bg-base-100 shadow-lg projectCard" data-aos="fade-up">
        <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down" data-aos-delay="100">📄 Resume360</h2>
        <p className='text-gray-700 text-lg font-medium py-4 px-10'>
          <span className='font-bold text-gray-900'>🔍Overview:</span>
          <br></br>
          Resume 360 is a modern web application that allows users to easily build professional resumes and cover letters. Users can input their personal details, work experiences, education, skills, and generate customized resumes in multiple formats and styles. The platform also features an intelligent Cover Letter Generator that creates tailored cover letters based on user input, saving time and ensuring a professional presentation.
          <br></br>
          <br></br>
          <span className='font-bold text-gray-900'>🎯Target Sector:</span>
          <ul className="list-disc list-inside">
            <li>Job Seekers – Individuals looking for employment can create professional resumes.</li>
            <li>Students & Fresh Graduates – Helps students and new graduates build their first resume.</li>
            <li>Freelancers & Professionals – Offers customizable templates for various industries.</li>
            <li>Recruitment Agencies – Agencies can help job seekers generate professional resumes.</li>
          </ul>
          <br></br>
          <span className='font-bold text-gray-900'>✨Key Features:</span>
        <ul className="list-disc list-inside">
          <li>🎨 Customizable Templates Choose from multiple professionally designed templates tailored to various industries and preferences.</li>
          <li>🧩 Import Existing Resume Upload and edit existing resumes using built-in templates.</li>
          <li>👀 Real-time Preview Instantly view changes as you edit, allowing greater control and customization.</li>
          <li>📄 Multiple File Formats Download resumes and cover letters in PDF or DOCX formats to suit different job application requirements.</li>
          <li>🔒 Data Privacy and Security Strong privacy policies and data encryption protect user data and uploaded content.</li>
          <li>🚀 Step-by-Step Interactive Guide User-friendly navigation through resume sections like Personal Info, Work Experience, Education, Skills, Certifications, and Projects.</li>
          <li>📊 Analytics Dashboard (Admin Only) Admins can monitor key statistics such as resume downloads and profile view counts.</li>
          <li>📃 Cover Letter Generator Automatically generate a tailored cover letter to accompany your resume.</li>
          <li>⭐ Review and Rating System Users can leave feedback and rate their experience using the platform.</li>
          <li>⛔ Account Blocking System After three failed login attempts, a user's account is blocked. Only an admin can unblock it.</li>
          <li>🎨 Profile Customization Users can update and personalize their profiles as needed.</li>
          <li>🔐 Authentication Secure login and account management for saving and managing multiple resumes.</li>
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
            <li>MongoDB – A NoSQL database used to efficiently manage and store application data.</li>
            <li>Mongoose – An Object Data Modeling (ODM) library for MongoDB and Node.js to define schemas and interact with the database.</li>
            <li>Node.js – A JavaScript runtime environment for executing server-side code.</li>
            <li>Express.js – A minimalist and flexible Node.js web application framework used for creating RESTful APIs and managing backend logic.</li>
            <li>JWT(JSON Web Token) – Provides secure user authentication and session management.</li>
            <li>Vercel – Platform used for deploying and hosting the backend application.</li>
            <li>Netlify – frontend hosting and deployment platform with fast, global CDN delivery.</li>
          </ul>
        <br></br>
        <span className='font-bold text-gray-900'>🔮Future Enhancements:</span>
        <ul className="list-disc list-inside">
          <li>Dark mode for enhanced usability</li>
          <li>AI-based suggestion system for resume improvements</li>
          <li>LinkedIn profile import for resume auto-fill.</li>
          <li>AI-based resume score (ATS compatibility checker).</li>
          <li>Multiple language support (English, French, Spanish, etc.).</li>
        </ul>
        </p>
        </div>
      </div>
    </section>
    </div>
  )
}
