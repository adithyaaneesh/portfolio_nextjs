import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* work part */}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My Work <span className='text-cyan-200'>Experience</span>
            </h1>
            <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <ResumeCard 
                    icon={BsDatabase} 
                    role="Python Full-Stack Trainer" 
                    date='Jan 2026 - Present'
                    description="Deliver hands-on training in Python full-stack development, covering Django, REST APIs, React, and 
                    database management. Mentor students through real-world projects, code reviews, and best practices in full-stack 
                    application development."
                />
                <ResumeCard 
                    icon={FaCodepen} 
                    role="Python Full-Stack Developer Intern" 
                    date='June 2025 - Jan 2026'
                    description="Developed and maintained full-stack web applications using React, Python, and Django. 
                    Built RESTful APIs, integrated frontend components, and worked with databases while following clean 
                    coding and version control practices."
                />
                
                {/* <ResumeCard icon={FaReact} role="Front-end Developer" />
                <ResumeCard icon={BsDatabase} role="Backend Developer" /> */}
            </div>
        </div>
        {/* education part */}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                My <span className='text-cyan-200'>Education</span>
            </h1>
            <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ResumeCard 
                    icon={BiBadge} 
                    role="Bachelor of Computer Application" 
                    date="Jan 2022 - Dec 2025"
                    description='M E T arts & Science College, Nadapuram'
                />
                <ResumeCard 
                    icon={FaReact} 
                    role="HSS" 
                    date="June 2020 - Mar 2022"
                    description='Completed Higher Secondary Education in the stream of Computer Science'
                />
                {/* <ResumeCard icon={BsDatabase} 
                    role="Certificate in Digital Marketing" 
                    date="Jan 2016 - Dec 2019"
                /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
