"use client";
import {motion} from 'framer-motion';

export default function Projects() {
    const cardVariants = {
        hidden: {y: 10, opacity: 0},
        visible: {y: -40, opacity: 1}
    };

    const projects = [
        {
            title: "Marketing and Project Management",
            description: "Product Intern at Rendever",
            description2: "I create promotional strategies that highlight product innovations and virtual events, reinforcing Rendever’s mission. I also host interactive virtual experiences, introducing innovative solutions to promote accessibility and inclusivity for diverse senior audiences.",
            description3: "Lead Marketing Intern at Alfa Art Gallery",
            description4: "I managed the gallery’s prestigious Middlesex County Grant, cultivating strong relationships with key grant representatives. I meticulously organized data, delegated tasks, and monitored progress to ensure seamless project execution.",
            delay: 0.2
        },
        {
            title: "Client Relations",
            description: "Benefit Consultant at Aflac",
            description2: "I identified new clients and generated leads through strategic outreach and in-depth market research, while expertly managing customer interactions through CRM platforms.",
            description3: "Public Relations Specialist",
            description4: "I cultivated a loyal clientele through targeted marketing, social media, and personalized service, delivering exceptional VIP experiences and driving event attendance. I collaborated with management to design innovative event themes, using customer insights and analytics to refine strategies and maximize turnout.",
            delay: 0.2
        },
        {
            title: "Volunteering",
            description: "Mission Ambassador at One Track International",
            description2: "Led and executed a successful fundraising campaign, advancing the organization’s mission. Contributed to program development and played a key role in raising awareness of its core values.",
            delay: 0.2
        },
    ];

    return (
        <div className="pt-20 pb-20 z-10 overflow-y-auto">
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