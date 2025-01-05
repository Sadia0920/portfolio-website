import React from 'react'
import Marquee from "react-fast-marquee";
import Logos from '../components/Logos';
import { useLoaderData } from 'react-router-dom';

export default function Skills() {
  const skillsData = useLoaderData();
  return (
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
  )
}
