import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/mahmoudmira18/",
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={30}/></>
            ),
            href: "https://github.com/MahmoudMira8",
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href: "mailto:mahmoud.mira2030@gmail.com",
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonLinesFill size={30}/></>
            ),
            href: "/mahmoudResume.pdf",
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li>
                    {links.map(({id, child, href, style, download}) => (
                        <li className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white ${style}`}>
                            <a href={href} id={id} download={download} target="_blank" rel="noreferrer"
                                className='flex justify-between items-center w-full text-white'>
                                {child}   
                            </a>
                        </li>
                    ))}
                </li>
            </ul>
        </div>
    )
};

export default SocialLinks;

<li >

</li>