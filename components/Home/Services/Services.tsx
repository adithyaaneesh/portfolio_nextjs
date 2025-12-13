import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Collaborate with brand <br />and agencies to create   <br /> impactful results.
        </h1>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard 
                    icon="/images/l1.png" 
                    name="UI and UX" 
                    description="Designing clean, intuitive, and user-friendly interfaces focused on usability and responsiveness."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard 
                    icon="/images/l2.png" 
                    name="Web and Mobile App" 
                    description="Building responsive and scalable web applications using modern frontend technologies."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard 
                    icon="/images/l3.png" 
                    name="Design & Creative" 
                    description="Creating visually appealing digital experiences with a balance of design and functionality."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard 
                    icon="/images/l4.png" 
                    name="Development" 
                    description="Developing secure, scalable backend systems and RESTful APIs."
                />
            </div>
        </div>
    </div>
  )
}

export default Services
