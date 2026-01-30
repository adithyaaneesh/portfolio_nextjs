'use client'
import React from 'react'
import { SiBootstrap, SiCss3, SiDjango, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPython, SiReact, SiRedux, SiTailwindcss } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name:'HTML',
        icon:<SiHtml5/>,
        percentage:89,
    },
    {
        name:'CSS',
        icon:<SiCss3/>,
        percentage:89,
    },
    {
        name:'Javascript',
        icon:<SiJavascript/>,
        percentage:89,
    },
    {
        name:'React.js',
        icon:<SiReact/>,
        percentage:92,
    },
    {
        name:'Redux',
        icon:<SiRedux/>,
        percentage:86,
    },
    {
        name:'Tailwind CSS',
        icon:<SiTailwindcss/>,
        percentage:78,
    },
    {
        name:'Bootstrap',
        icon:<SiBootstrap/>,
        percentage:78,
    },
    {
        name:'Python',
        icon:<SiPython/>,
        percentage:86,
    },
    {
        name:'Django',
        icon:<SiDjango/>,
        percentage:94,
    },
    {
        name:'MySQL',
        icon:<SiMysql/>,
        percentage:86,
    },
    {
        name:'Mongo DB',
        icon:<SiMongodb/>,
        percentage:86,
    },
    {
        name:'Git',
        icon:<SiGit/>,
        percentage:86,
    },
    {
        name:'GitHub',
        icon:<SiGithub/>,
        percentage:86,
    },
]

const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16'>
        <h2 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <span className='text-cyan-300'>Skills</span>
        </h2>
        <div className='flex flex-wrap justify-center gap-6 mt-16'
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="0"
        data-aos-easing="ease-in-out"
        >
            {skills.map((skill,i)=>{
                return <Tilt key={skill.name} scale={1.5} transitionSpeed={600}>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center 
                    justify-center shadow-lg transition hover:scale-105'>
                        <div className='text-5xl mb-4 text-gray-300'>{skill.icon}</div>
                        {/* <p className='text-2xl font-semibold'>{skill.percentage}%</p> */}
                        <p className='text-purple-400 mt-1'>{skill.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  )
}

export default Skills
