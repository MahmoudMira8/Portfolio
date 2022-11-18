import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full pt-52'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Contact Me</p>
                <p className='py-6'>Submit the form below to contact with me</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <form action="https://getform.io/f/73ea8f6b-3a95-4829-8e51-57143eb6607d" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea placeholder="Enter your message" name="message"rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                </form>

                <button type="submit" className='text-white w-fit px-6 py-3 my-4 font-bold flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300'>Send message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact