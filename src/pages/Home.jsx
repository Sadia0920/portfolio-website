import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import picture from '../assets/IMG.png'
import Marquee from "react-fast-marquee";
import Logos from '../components/Logos';
import '../components/Logos.css'
import project11 from '../assets/project-1/pic1.png'
import project12 from '../assets/project-1/pic2.png'
import project13 from '../assets/project-1/pic3.png'
import project14 from '../assets/project-1/pic4.png'
import project21 from '../assets/project-2/pic1.png'
import project22 from '../assets/project-2/pic2.png'
import project23 from '../assets/project-2/pic3.png'
import project24 from '../assets/project-2/pic4.png'
import project31 from '../assets/project-3/pic1.png'
import project32 from '../assets/project-3/pic2.png'
import project33 from '../assets/project-3/pic3.png'
import project41 from '../assets/project-4/pic1.png'
import project42 from '../assets/project-4/pic2.png'
import project43 from '../assets/project-4/pic3.png'
import project51 from '../assets/project-5/pic1.png'
import project52 from '../assets/project-5/pic2.png'
import project53 from '../assets/project-5/pic3.png'
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function() {

  const [skillsData,setSkillsData]=useState([]);
  const images1 = [project11, project12, project13, project14];
  const images2 = [project21, project22, project23, project24];
  const images3 = [project31, project32, project33];
  const images4 = [project41, project42, project43];
  const images5 = [project51, project52, project53];

  useEffect(()=>{
    fetch('skills.json')
    .then(res => res.json())
    .then(data => {
      setSkillsData(data)
      // console.log(skillsData)
    })
  },[])

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSendMessage = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const submitData = {name,email,message};
    console.log(submitData);
    form.reset()
  }
  
  return (
    <>
   {/* home */}
    <section id="home">
    <div className="hero bg-base-100 w-10/12 mx-auto mt-4" data-aos="fade-down">
    <div className="hero-content flex-col lg:flex-row-reverse justify-center w-full">
      <div className='flex'>
      <img
        src={picture}
        className="w-72 mx-auto" />
      </div>
      <div className='text-center flex-1'>
        <div className='flex items-center justify-center gap-10 mt-4 lg:mt-0'>
        <div className='flex flex-col'>
            <a href="https://www.linkedin.com/in/sadia-afrin-597515301/" target="_blank"><i className="fa-brands fa-linkedin text-xl text-[#008080]"></i></a>
            <br></br>
            <a href="https://github.com/Sadia0920" target="_blank"><i className="fa-brands fa-github text-xl text-[#008080]"></i></a>
            <br></br>
            <a href="https://www.facebook.com/sadia.afrin.khan.52" target="_blank"><i 
        className="fa-brands fa-facebook text-xl text-[#008080]"></i></a>
        </div>
       <div className='text-left'>
       <h1 className="text-3xl font-bold" data-aos="fade-down" data-aos-delay="100">Hi!👋, I'm Sadia Afrin</h1>
        <p className="py-3 text-gray-600 text-2xl font-semibold" data-aos="fade-down" data-aos-delay="200">
        and I'm a {' '}
        <span className="text-[#008080]">
    <Typewriter
      words={['Web developer', 'Frontend Enthusiast', 'React Lover']}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
        </p>
        <p className="pb-4 text-gray-500 font-medium" data-aos="fade-down" data-aos-delay="300">
        Welcome to my digital space where creativity meets code. I’m a web developer specializing in JavaScript, React, and Node.js. Explore my portfolio to see how technology and design come together to build impactful web experiences.
        </p>
        <a href="https://drive.google.com/file/d/1HPlo7zvvdl8o8KDNXfytBhTDXVYUGzJ3/view?usp=drive_link" target="_blank" className="relative inline-flex items-center gap-2 px-4 py-3 font-medium text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Download Resume 
        <i className="fa-solid fa-download" data-aos="fade-down" data-aos-delay="400"></i>
        <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span></a>
       </div>
        </div>
      </div>
    </div>
    </div>
    </section>

    {/* about me */}
    <section id="aboutMe" className="w-10/12 mx-auto my-10" data-aos="fade-up">
      <div className="about-content">
        <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down">About Me</h2>
        <p className='text-gray-500 font-medium mb-7 text-center' data-aos="fade-down" data-aos-delay="100">My introduction</p>
        <div className="card bg-base-100 shadow-xl projectCard" data-aos="zoom-in" data-aos-delay="200">
        <p className='text-gray-500 text-lg font-medium py-5 px-10'>
          Hi, I'm Sadia Afrin, a passionate web developer with a knack for creating dynamic and user-friendly websites. With a strong foundation in front-end and back-end technologies, I specialize in building scalable and efficient web applications.
          <br></br>
          I thrive on solving complex problems and turning creative ideas into reality. Whether it's crafting responsive designs with HTML, CSS, and JavaScript, or building robust server-side solutions with Node.js and MongoDB, I enjoy every step of the development process.
          <br></br>
          When I'm not coding, you'll find me exploring new tech trends, contributing to open-source projects, or refining my skills through online learning and challenges. I'm constantly seeking opportunities to grow and collaborate with other developers to create impactful solutions.
          <br></br>
          Let's build something amazing together!
        </p>
        </div>
      </div>
    </section>

    {/* skills */}
    <section id="skills">
    <div className='w-10/12 mx-auto my-10' data-aos="fade-up">
      <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down">Skills</h2>
      <p className='text-gray-500 font-medium mb-10 text-center' data-aos="fade-down" data-aos-delay="100">My technical level</p>
      <Marquee pauseOnHover={true} data-aos="zoom-in" data-aos-delay="200">
        {
          skillsData.map(item => <Logos key={item._id} item={item}></Logos>)
        }
        </Marquee>
        
    {/* Progress bars section */}
    <div className="text-center mt-10">
      {[
        { skill: "HTML", value: 90 },
        { skill: "CSS", value: 92 },
        { skill: "JavaScript", value: 82 },
        { skill: "React", value: 78 },
        { skill: "Tailwind CSS", value: 90 },
        { skill: "Node.js", value: 75 },
        { skill: "Express.js", value: 70 },
        { skill: "Firebase", value: 85 },
        { skill: "MongoDB", value: 77 },
        { skill: "JWT Token", value: 70 },
      ].map((item, index) => (
        <div key={item.skill} data-aos="fade-right" data-aos-delay={index * 100}>
        <div
       key={item.skill}
       data-aos="fade-right"
       data-aos-delay={index * 100}
       className="flex items-center justify-between gap-4 md:gap-6 max-w-2xl mx-auto">
          <span className="text-lg font-bold text-gray-600 w-[120px] text-left">{item.skill} : </span>
          <progress
            className="progress progress-success flex-1"
            value={item.value}
            max="100"
          ></progress>
           <span className="text-gray-600 font-semibold w-[40px] text-right">
        {item.value}%
      </span>
          </div>
          <br />
        </div>
      ))}
    </div>
    </div>
    </section>

    {/* qualification */}
    <section id="qualification">
    <div className='w-10/12 mx-auto my-10' data-aos="fade-up">
       <h2 className='text-3xl text-center font-semibold mb-1'  data-aos="fade-down">Qualification</h2>
       <p className='text-gray-500 font-medium mb-7 text-center'  data-aos="fade-down" data-aos-delay="100">My personal journey</p>

       <ul className="timeline timeline-vertical">
  <li data-aos="fade-right" data-aos-delay="200">
    <div className="timeline-start timeline-box p-5">
      <h3 className='text-2xl font-semibold'>B.Sc.</h3>
      <p className='text-gray-500 text-lg font-medium mt-2'>Computer Scinece and Engineering
        <br></br>
      Mymensingh Engineering College</p>
      <p className='text-gray-400 font-medium my-2'><i className="fa-regular fa-calendar-days mr-1"></i>2019-2024</p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="text-[#008080]" onClick={()=>document.getElementById('my_modal_5').showModal()}>View More <i className="fa-solid fa-arrow-right"></i></button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-xl py-4">Mymensingh Engineer College</h3>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i>
     B.Sc. in Computer Science and Engineering</p>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i> 
    February 2019 - May 2024</p>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i>
     CGPA 3.47 out of 4.00</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-[#008080]">X</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-[#008080]">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li data-aos="fade-left" data-aos-delay="300">
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-[#008080]">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box p-5">
    <h3 className='text-2xl font-semibold'>H.S.C</h3>
      <p className='text-gray-500 text-lg font-medium mt-2'>Scinece
        <br></br>
      Shamsul Haque Khan School & College</p>
      <p className='text-gray-400 font-medium my-2'><i className="fa-regular fa-calendar-days mr-1"></i>2016-2018</p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="text-[#008080]" onClick={()=>document.getElementById('my_modal_4').showModal()}>View More <i className="fa-solid fa-arrow-right"></i></button>
<dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-xl py-4">Shamsul Haque Khan School & College</h3>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i> Study Science</p>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i> 
    Result: GPA 5.00</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-[#008080]">X</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    <hr />
  </li>
  <li data-aos="fade-right" data-aos-delay="400">
    <hr />
    <div className="timeline-start timeline-box p-5">
    <h3 className='text-2xl font-semibold'>Online Courses</h3>
      <p className='text-gray-500 text-lg font-medium mt-2'>Online Courses</p>
      <p className='text-gray-500 text-lg font-medium my-2'><i className="fa-regular fa-calendar-days mr-1"></i>2024</p>
       {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="text-[#008080]" onClick={()=>document.getElementById('my_modal_3').showModal()}>View More <i className="fa-solid fa-arrow-right"></i></button>
<dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-xl py-4">Courses Summary :</h3>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i> 
    Problem Solving</p>
    <p className="py-4 text-gray-500 text-lg font-medium"><i className="fa-regular fa-circle-check mr-1"></i> 
    Programming Hero</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-[#008080]">X</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 text-[#008080]">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
</ul>
    </div>
    </section>

    {/* projects */}
    <section id="projects">
 <div className='w-10/12 mx-auto my-10' data-aos="fade-up">
      <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down">Projects</h2>
      <p className='text-gray-500 font-medium mb-7 text-center' data-aos="fade-down" data-aos-delay="100">Most recent work
      </p>

       {/* project-1 */}
       <div className="card bg-base-100 shadow-lg projectCard" data-aos="zoom-in" data-aos-delay="100">
      <h2 className='text-2xl text-center font-semibold mb-4'>
      <Typewriter
    words={['Project - 1']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
      </h2>
      <div className="h-56 md:h-64 lg:w-[650px] mx-auto">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {images1.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  <div className="card-body w-10/12 md:w-5/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Resume360 (Team Project)</h2>
    <p className='text-gray-500 font-semibold mb-1'>Resume 360 is a modern web application that allows users to easily build professional resumes and cover letters.</p>
    <NavLink to='project1Details'><button className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">View Details
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </button></NavLink>
    <a href='https://github.com/bikash-sarker-dev/resume360' target="_blank" className="btn relative inline-flex items-center gap-2 px-4 py-3 font-bold text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Github Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
    <a href='https://resume360.netlify.app/' target="_blank" className="btn relative inline-flex items-center gap-2 px-4 py-3 font-bold text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Live Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
  </div>
      </div>

        {/* project-2 */}
        <div className="card bg-base-100 shadow-lg projectCard" data-aos="zoom-in" data-aos-delay="100">
      <h2 className='text-2xl text-center font-semibold mb-4'>
      <Typewriter
    words={['Project - 2']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
      </h2>
      <div className="h-56 md:h-64 lg:w-[650px] mx-auto">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {images2.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  <div className="card-body w-10/12 md:w-5/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Study Alliance</h2>
    <p className='text-gray-500 font-semibold mb-1'>Study Alliance is a full-featured educational platform.</p>
    <NavLink to='project2Details'><button className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">View Details
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </button></NavLink>
    <a href='https://github.com/Sadia0920/study-alliance' target="_blank" className="btn relative inline-flex items-center gap-2 px-4 py-3 font-bold text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Github Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
    <a href=' https://study-alliance-83c26.web.app' target="_blank" className="btn relative inline-flex items-center gap-2 px-4 py-3 font-bold text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Live Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
  </div>
      </div>

      {/* project-3 */}
      <div className="card bg-base-100 shadow-lg projectCard" data-aos="zoom-in" data-aos-delay="100">
      <h2 className='text-2xl text-center font-semibold mb-4'>
      <Typewriter
    words={['Project - 3']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
      </h2>
      <div className="h-56 md:h-64 lg:w-[650px] mx-auto">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {images3.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  <div className="card-body md:w-5/12 w-10/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">VolunForce</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a volunteer management website.</p>
    <NavLink to='project3Details'><button className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">View Details
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </button></NavLink>
    <a href='https://github.com/Sadia0920/volunForce' target="_blank" className="btn relative inline-flex items-center gap-2 px-4 py-3 font-bold text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Github Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
    <a href='https://volunforce-client.web.app/' target="_blank" className="btn relative inline-flex items-center gap-2 px-4 py-3 font-bold text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Live Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
  </div>
      </div>

      {/* project-4 */}
      <div className="card bg-base-100 shadow-lg projectCard" data-aos="zoom-in" data-aos-delay="200">
      <h2 className='text-2xl text-center font-semibold mb-4'>
      <Typewriter
    words={['Project - 4']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
      </h2>
      <div className="h-56 md:h-64 lg:w-[650px] mx-auto">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {images4.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  <div className="card-body md:w-5/12 w-10/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Game Freak Reviews</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a game reviewing website.</p>
    <NavLink to='project4Details'><button className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">View Details
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </button></NavLink>
    <a href='https://github.com/Sadia0920/gameFreak-reviews' target="_blank" className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Github Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
    <a href='https://game-freak-reviews-client.web.app/' target="_blank" className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Live Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
  </div>
      </div>

      {/* project-5 */}
      <div className="card bg-base-100 shadow-lg projectCard" data-aos="zoom-in" data-aos-delay="300">
      <h2 className='text-2xl text-center font-semibold mb-4'>
      <Typewriter
    words={['Project - 5']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
      </h2>
      <div className="h-56 md:h-64 lg:w-[650px] mx-auto">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {images5.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-center" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  <div className="card-body md:w-5/12 w-10/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Discount pro</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a discount coupon finding website.</p>
    <NavLink to='project5Details'><button className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">View Details
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </button></NavLink>
    <a href='https://github.com/Sadia0920/discount-pro' target="_blank" className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Github Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
    <a href='https://discount-pro-bbfa4.web.app/' target="_blank" className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Live Link
    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
    </a>
  </div>
      </div>
    </div>
    </section>

    {/* contact me */}
    <section id="contactMe">
    <div  className='w-10/12 mx-auto my-10' data-aos="fade-up">
      <h2 className='text-3xl text-center font-semibold mb-1' data-aos="fade-down" data-aos-delay="100">Contact Me</h2>
      <p className='text-gray-500 font-medium mb-7 text-center' data-aos="fade-down" data-aos-delay="200">Get in touch
      </p>
      <div className="hero" data-aos="zoom-in" data-aos-delay="200">
  <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:p-14">
      <div classname='flex justify-center items-center' data-aos="fade-down" data-aos-delay="300">
      <i className="fa-solid fa-phone"></i>
      <div>
      <h1 className="text-xl font-bold">Call Me</h1>
      <p className="pb-6 text-gray-500 font-medium">+8801626000513</p>
      </div>
      </div>
      <div classname='flex justify-center items-center' data-aos="fade-down" data-aos-delay="400">
      <i className="fa-solid fa-envelope"></i>
      <div>
      <h1 className="text-xl font-bold">Email</h1>
      <p className="pb-6 text-gray-500 font-medium">sadiaafrin0920@gmail.com</p>
      </div>
      </div>
      <div classname='flex justify-center items-center' data-aos="fade-down" data-aos-delay="500">
      <i className="fa-solid fa-location-dot"></i>
      <div>
      <h1 className="text-xl font-bold">Location</h1>
      <p className="pb-6 text-gray-500 font-medium">Dhaka, Bangladesh</p>
      </div>
      </div>
    </div>
    <div className="card w-full md:w-10/12 lg:w-7/12 shrink-0 shadow-2xl">
      <form onSubmit={handleSendMessage} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" name='message' placeholder="Enter Your Message" className="textarea textarea-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn font-bold relative inline-flex items-center gap-2 px-4 py-3 text-white bg-[#008080] border-none rounded-lg overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-indigo-600 hover:bg-slate-300">Send Message
          <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-700 ease-in-out"></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
    </section>

    </>
  )
}
