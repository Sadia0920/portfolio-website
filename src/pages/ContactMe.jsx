import React from 'react'

export default function ContactMe() {
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
      <p className="pb-6 text-gray-500 font-medium">01626000513</p>
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
    <div className="card w-full max-w-lg shrink-0 shadow-2xl">
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
  )
}
