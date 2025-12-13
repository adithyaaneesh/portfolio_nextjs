import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            A small selection of recent <br /> <span className='text-cyan-300'>projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* projects 1*/}
            <div>
                <Image src='/images/p1.jpg' alt='img' width={800} height={650} className='rounded-lg'/>
                <h2 className='mt-4 text-xl sm:text-4xl font-semibold text-white'>Modern Finance Dashboard UI</h2>
                <h2 className='pt-2 font-medium text-white/80'>Apps, UI/UX</h2>
            </div>
            {/* projects 2*/}
            <div>
                <Image src='/images/p2.jpg' alt='img' width={800} height={650} className='rounded-lg'/>
                <h2 className='mt-4 text-xl sm:text-4xl font-semibold text-white'>Portfolio Website for Creatives</h2>
                <h2 className='pt-2 font-medium text-white/80'>Bradning , Motion</h2>
            </div>
            {/* projects 3*/}
            <div>
                <Image src='/images/p3.jpg' alt='img' width={800} height={650} className='rounded-lg'/>
                <h2 className='mt-4 text-xl sm:text-4xl font-semibold text-white'>Brand Identity for Startups</h2>
                <h2 className='pt-2 font-medium text-white/80'>Branding , UI/UX</h2>
            </div>
            {/* projects 4*/}
            <div>
                <Image src='/images/p4.jpg' alt='img' width={800} height={650} className='rounded-lg'/>
                <h2 className='mt-4 text-xl sm:text-4xl font-semibold text-white'>SaaS Dashboard Development</h2>
                <h2 className='pt-2 font-medium text-white/80'>Apps, UI/UX</h2>
            </div>
        </div>
    </div>
  )
}

export default Projects
