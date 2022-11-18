import React from 'react';
import project0 from '../projectsImgs/project0.png';
import project1 from '../projectsImgs/project1.png';
import project2 from '../projectsImgs/project2.png';


const Portfolio = () => {

    const portfolios = [{id:1, src: project0, demo: "https://personal-website88.netlify.app", code: 'https://github.com/MahmoudMira8/special-Design'},
                        {id:2, src:project1, demo:'https://omnifood-healthyfood.netlify.app' , code: 'https://github.com/MahmoudMira8/Omnifood'},
                        {id:3, src: project2, demo: 'https://portfolioproject11.netlify.app', code: 'https://github.com/MahmoudMira8/Responsive-Portfolio-project',},
                        ]

    const toDemo = (demo) =>{
        window.location.href = demo;
    }                    

    const toGithub = (github) =>{
        window.location.href = github;
    }

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6 '>
                    Check out some of my work right here
                </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id, src, demo, code}) => (
                    <div key = {id} className='shadow-md shadow-gray-600 rounded-lg '>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full h-[200px]'/>
                        <div className='flex items-center justify-center'>
                            <button onClick={() => toDemo(demo)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>
                                Demo
                            </button>
                            <button onClick={() => toGithub(code)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Code
                            </button>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio