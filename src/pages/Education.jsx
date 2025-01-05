import React from 'react'

export default function Education() {
  return (
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
  )
}
