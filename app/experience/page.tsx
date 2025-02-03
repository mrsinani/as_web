"use client";
import {motion} from 'framer-motion';

export default function Projects() {
    const cardVariants = {
        hidden: {y: 10, opacity: 0},
        visible: {y: -40, opacity: 1}
    };

    const projects = [
        {
            title: "Projects",
            description: "Transportation Data Science Project | Columbia University ",
            description2: "Analyzed transportation data to identify patterns and trends, providing insights for safety improvements. Developed visualizations to support data-driven decisions in the transportation sector.",
            description3: "Marketing Strategy Plan | Dominusoft Trainings",
            description4: "Developed a comprehensive marketing strategy plan for a small beauty salon, focusing on brand visibility and customer acquisition. Used market research to design targeted campaigns, boosting online bookings and in-store visits.",
            delay: 0.2
        },
        {
            title: "Certifications",
            description: "Insurance Producer; Accident & Health or Sickness License",
            description2: "National Insurance Producer Registry, November 2022",
            description3: "Social Media Marketing Training",
            description4: "Dominusoft Trainings, March 2022",
            delay: 0.2
        },
    ];

    return (
        <div className="pt-20 pb-20 ] z-10 overflow-y-auto">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="max-w-3xl mx-auto z-10"
            >
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="max-w-3xl mx-auto bg-[#4E6A5B]/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg mt-20 z-10"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: project.delay}}
                            style={{ position: 'relative', top: '10px', overflow: 'hidden', maxHeight: '800px' }}
                        >
                            {project.title && <h2 className="text-center text-2xl font-bold text-black mb-4">{project.title}</h2>}
                            <p className="font-bold text-black text-lg mb-4">{project.description}</p>
                            {project.description2 && <p className="text-black mb-4">{project.description2}</p>}
                            <p className="font-bold text-black text-lg mb-4">{project.description3}</p>
                            {project.description4 && <p className="text-black mb-4">{project.description4}</p>}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}