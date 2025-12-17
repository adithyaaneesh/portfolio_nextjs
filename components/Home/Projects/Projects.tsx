import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* Project Card */}
        {[
          {
            img: "/images/p1.png",
            title: "Swiggy-API",
            tech: "Django | DRF | PayPal",
            live: "#",
            github: "https://github.com/adithyaaneesh/swiggy_api",
          },
          {
            img: "/images/p2.png",
            title: "Life Link",
            tech: "HTML | CSS | Django | Python",
            live: "https://blood-bank-management-6gyx.onrender.com",
            github: "https://github.com/adithyaaneesh/blood-bank-management",
          },
          {
            img: "/images/p3.png",
            title: "Urban Tote Co.",
            tech: "React.js | Hooks | MUI",
            live: "https://react-dom-project.vercel.app/",
            github: "https://github.com/adithyaaneesh/react-dom-project",
          },
          {
            img: "/images/p4.png",
            title: "Organic Store (Team Project)",
            tech: "HTML | CSS | JavaScript",
            live: "#",
            github: "https://github.com/arathyrajeesh/ecommerce-mini-project",
          },
        ].map((project, index) => (
          <div
            key={index}
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
          >
            <Image
              src={project.img}
              alt="project image"
              width={800}
              height={650}
              className="rounded-lg"
            />

            <h2 className="mt-4 text-xl sm:text-4xl font-semibold text-white">
              {project.title}
            </h2>
            <h2 className="pt-2 font-medium text-white/80">
              {project.tech}
            </h2>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
