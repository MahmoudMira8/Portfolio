import React from 'react';
import html from '../exImgs/html.png';
import css from '../exImgs/css.webp';
import js from '../exImgs/JS.png';
import react from '../exImgs/react.png';
import tailwind from '../exImgs/tailwind.png';
import c from '../exImgs/c++.png';
import oop from '../exImgs/oop.png';
import github from '../exImgs/github.png';
import database from '../exImgs/database.png';


const Skills = () => {
    const portfolios = [{id:1, src: html, title: "HTML", style: 'shadow-orange-500'}, 
                        {id:2, src:css, title: "CSS", style: 'shadow-blue-500'}, 
                        {id:3, src: js, title: "JavaScript", style: 'shadow-yellow-500'}, 
                        {id:4, src:react, title: "React", style: 'shadow-blue-500'}, 
                        {id:5, src: tailwind, title: "Tailwind", style: 'shadow-sky-500'}, 
                        {id:6, src:c, title: "C++", style: 'shadow-blue-500'}, 
                        {id:7, src: oop, title: "OOP", style: 'shadow-purple-500'}, 
                        {id:8, src: github, title: "Github", style: 'shadow-purple-500'}, 
                        {id:9, src: database, title: "Database", style: 'shadow-gray-300'},]

  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800  to-black w-full pt-52'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                    Skills
                </p>
                <p className='py-6 '>
                    these are the technologies i've worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {portfolios.map(({id, src, title, style}) => (
                    <div key = {id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto h-20'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
                
            </div>
            
        </div>
    </div>
  )
}

export default Skills