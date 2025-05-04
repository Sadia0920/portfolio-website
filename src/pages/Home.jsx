import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import picture from '../assets/IMG.png'
import Marquee from "react-fast-marquee";
import Logos from '../components/Logos';
import '../components/Logos.css'
import project11 from '../assets/project-1/pic1.png'
import project12 from '../assets/project-1/pic2.png'
import project13 from '../assets/project-1/pic3.png'
import project21 from '../assets/project-2/pic1.png'
import project22 from '../assets/project-2/pic2.png'
import project23 from '../assets/project-2/pic3.png'
import project31 from '../assets/project-3/pic1.png'
import project32 from '../assets/project-3/pic2.png'
import project33 from '../assets/project-3/pic3.png'
import { Typewriter } from 'react-simple-typewriter';

export default function() {

  const [skillsData,setSkillsData]=useState([]);
  useEffect(()=>{
    fetch('skills.json')
    .then(res => res.json())
    .then(data => {
      setSkillsData(data)
      // console.log(skillsData)
    })
  },[])

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
    <div className="hero bg-base-100 w-9/12 mx-auto mt-4">
    <div className="hero-content flex-col lg:flex-row-reverse justify-center  w-full">
      <div className='flex-1'>
      <img
        src={picture}
        className="w-72 mx-auto" />
      </div>
      <div className='text-center flex-1'>
        <div className='flex items-center justify-center gap-14'>
        <div className='flex flex-col'>
            <a href="https://www.linkedin.com/in/sadia-afrin-597515301/" target="_blank"><i className="fa-brands fa-linkedin text-xl text-[#008080]"></i></a>
            <br></br>
            <a href="https://github.com/Sadia0920" target="_blank"><i className="fa-brands fa-github text-xl text-[#008080]"></i></a>
            <br></br>
            <a href="https://www.facebook.com/sadia.afrin.khan.52" target="_blank"><i 
        className="fa-brands fa-facebook text-xl text-[#008080]"></i></a>
        </div>
       <div className='text-left'>
       <h1 className="text-3xl font-bold">Hi!👋, I'm Sadia Afrin</h1>
        <p className="py-3 text-gray-600 text-2xl font-semibold">
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
        <p className="pb-4 text-gray-500 font-medium">
        Welcome to my digital space where creativity meets code. I’m a web developer specializing in JavaScript, React, and Node.js. Explore my portfolio to see how technology and design come together to build impactful web experiences.
        </p>
        <a href="https://drive.google.com/file/d/16EKH1e71zqoqH-5DvfQUaGbuXiVo7v0u/view?usp=drive_link" target="_blank" className="btn bg-[#008080] text-white">Download Resume <i className="fa-solid fa-download"></i></a>
       </div>
        </div>
      </div>
    </div>
    </div>
    </section>

    {/* about me */}
    <section id="aboutMe" className="w-10/12 mx-auto my-20">
      <div className="about-content">
        <h2 className='text-3xl text-center font-semibold mb-1'>About Me</h2>
        <p className='text-gray-500 font-medium mb-7 text-center'>My introduction</p>
        <div className="card bg-base-100 shadow-xl projectCard">
        <p className='text-gray-500 text-lg font-medium py-10 px-20'>
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
    <div className='w-10/12 mx-auto my-20'>
      <h2 className='text-3xl text-center font-semibold mb-1'>Skills</h2>
      <p className='text-gray-500 font-medium mb-7 text-center'>My technical level</p>
      <Marquee pauseOnHover={true}>
        {
          skillsData.map(item => <Logos key={item._id} item={item}></Logos>)
        }
        </Marquee>
        <div className='text-center mt-7'>
          
        <span className='text-lg font-bold text-gray-600'>HTML : </span><progress className="progress  progress-success w-56 md:w-96" value="90" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>CSS : </span><progress className="progress  progress-success w-56 md:w-96" value="92" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>JavaScript : </span><progress className="progress  progress-success w-56 md:w-96" value="82" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>React : </span><progress className="progress  progress-success w-56 md:w-96" value="70" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>Tailwind CSS : </span><progress className="progress  progress-success w-56 md:w-96" value="90" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>Node.js : </span><progress className="progress  progress-success w-56 md:w-96" value="72" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>Express.js : </span><progress className="progress  progress-success w-56 md:w-96" value="66" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>Firebase : </span><progress className="progress  progress-success w-56 md:w-96" value="73" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>MongoDB : </span><progress className="progress  progress-success w-56 md:w-96" value="63" max="100"></progress>
        <br></br>
        <span className='text-lg font-bold text-gray-600'>JWT Token : </span><progress className="progress  progress-success w-56 md:w-96" value="62" max="100"></progress>
        </div>
    </div>
    </section>

    {/* qualification */}
    <section id="qualification">
    <div className='w-10/12 mx-auto my-20'>
       <h2 className='text-3xl text-center font-semibold mb-1'>Qualification</h2>
       <p className='text-gray-500 font-medium mb-7 text-center'>My personal journey</p>

       <ul className="timeline timeline-vertical">
  <li>
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
  <li>
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
  <li>
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
 <div className='w-10/12 mx-auto my-20'>
      <h2 className='text-3xl text-center font-semibold mb-1'>Projects</h2>
      <p className='text-gray-500 font-medium mb-7 text-center'>Most recent work
      </p>
      <div className="card bg-base-100 shadow-xl projectCard">
      <h2 className='text-2xl text-center font-semibold mb-4'>Project - 1</h2>
      <div className="carousel carousel-vertical rounded-box h-60 mx-auto">
  <div className="carousel-item w-full h-full">
    <img src={project11} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project12} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project13} />
  </div>
</div>

  <div className="card-body md:w-5/12 w-10/12 lg:w-4/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">VolunForce</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a volunteer management website.</p>
    <NavLink to='project1Details'><button className='btn bg-[#008080] text-white'>View Details</button></NavLink>
    <a href='https://github.com/programming-hero-web-course2/b10a11-client-side-Sadia0920' target="_blank" className="btn bg-[#008080] text-white">Github Link</a>
    <a href='https://volunforce-client.web.app/' target="_blank" className="btn bg-[#008080] text-white">Live Link</a>
  </div>
      </div>
      <div className="card bg-base-100 shadow-xl projectCard">
      <h2 className='text-2xl text-center font-semibold mb-4'>Project - 2</h2>
      <div className="carousel carousel-vertical rounded-box h-60 mx-auto">
  <div className="carousel-item w-full h-full">
    <img src={project21} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project22} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project23} />
  </div>
</div>

  <div className="card-body md:w-5/12 w-10/12 lg:w-4/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Game Freak Reviews</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a game reviewing website.</p>
    <NavLink to='project2Details'><button className='btn bg-[#008080] text-white'>View Details</button></NavLink>
    <a href='https://github.com/programming-hero-web-course2/b10-a10-client-side-Sadia0920' target="_blank" className="btn bg-[#008080] text-white">Github Link</a>
    <a href='https://game-freak-reviews-client.web.app/' target="_blank" className="btn bg-[#008080] text-white">Live Link</a>
  </div>
      </div>
      <div className="card bg-base-100 shadow-xl projectCard">
      <h2 className='text-2xl text-center font-semibold mb-4'>Project - 3</h2>
      <div className="carousel carousel-vertical rounded-box h-60 mx-auto">
  <div className="carousel-item w-full h-full">
    <img src={project31} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project32} />
  </div>
  <div className="carousel-item w-full h-full">
    <img src={project33} />
  </div>
</div>

  <div className="card-body md:w-5/12 w-10/12 lg:w-4/12 mx-auto text-center">
    <h2 className="text-xl font-bold mb-1">Discount pro</h2>
    <p className='text-gray-500 font-semibold mb-1'>This is a discount coupon finding website.</p>
    <NavLink to='project3Details'><button className='btn bg-[#008080] text-white'>View Details</button></NavLink>
    <a href='https://github.com/programming-hero-web-course1/b10-a9-authentication-Sadia0920' target="_blank" className="btn bg-[#008080] text-white">Github Link</a>
    <a href='https://discount-pro-bbfa4.web.app/' target="_blank" className="btn bg-[#008080] text-white">Live Link</a>
  </div>
      </div>
    </div>
    </section>

    {/* contact me */}
    <section id="contactMe">
    <div  className='w-10/12 mx-auto my-20'>
      <h2 className='text-3xl text-center font-semibold mb-1'>Contact Me</h2>
      <p className='text-gray-500 font-medium mb-7 text-center'>Get in touch
      </p>
      <div className="hero">
  <div className="hero-content justify-between gap-20 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:ml-20">
      <div classname='flex justify-center items-center'>
      <i className="fa-solid fa-phone"></i>
      <div>
      <h1 className="text-xl font-bold">Call Me</h1>
      <p className="pb-6 text-gray-500 font-medium">+8801626000513</p>
      </div>
      </div>
      <div classname='flex justify-center items-center'>
      <i className="fa-solid fa-envelope"></i>
      <div>
      <h1 className="text-xl font-bold">Email</h1>
      <p className="pb-6 text-gray-500 font-medium">sadiaafrin0920@gmail.com</p>
      </div>
      </div>
      <div classname='flex justify-center items-center'>
      <i className="fa-solid fa-location-dot"></i>
      <div>
      <h1 className="text-xl font-bold">Location</h1>
      <p className="pb-6 text-gray-500 font-medium">Dhaka, Bangladesh</p>
      </div>
      </div>
    </div>
    <div className="card w-full max-w-lg  shrink-0 shadow-2xl">
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
          <button className="btn bg-[#008080] text-white">Send Message</button>
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
