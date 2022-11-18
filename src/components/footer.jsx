import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Footer = () => {

    const links = [
        {
            id: 1,
            child: (
                <FaLinkedin size={30}/>
            ),
            href: "https://www.linkedin.com/in/mahmoudmira18/",
            style: "mr-5",
        },
        {
            id: 2,
            child: (
                <FaGithub size={30}/>
            ),
            href: "https://github.com/MahmoudMira8",
            style: "mr-5",
        },
        {
            id: 3,
            child: (
                <HiOutlineMail size={30}/>
            ),
            href: "mailto:mahmoud.mira2030@gmail.com",
            style: "mr-5",
        },
        {
            id: 4,
            child: (
                <BsFillPersonLinesFill size={30}/>
            ),
            href: "/mahmoudResume.pdf",
            download: true,
        },
    ]

  return (
    <div name="footer" className='bg-gradient-to-b from-gray-800 to-black w-full pt-30'>
        <div className='flex flex-row w-full justify-center items-center text-white pb-5'>
            {links.map(({id, child, href, style, download}) => (
                <div className={`flex justify-between items-center p-4 bg-gray-500 rounded-md ${style}`}>
                    <a href={href} id={id} download={download} target="_blank" rel="noreferrer"
                        className='flex justify-between items-center w-full'>
                        {child}   
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer