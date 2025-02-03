"use client";
import { motion } from 'framer-motion';

export default function About() {
    // Animation for the content
    const contentAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={contentAnimation}
            className="max-w-3xl mx-auto bg-[#4E6A5B]/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-32"
        >
            <h1 className="text-3xl font-bold mb-6 text-[#00000]">about me</h1>
            <div className="space-y-6 text-black">
                <p>
                Hi there! I’m Anisa, a marketing and mathematics student at Suffolk University, and I 
                love exploring the way people think and make decisions. First impressions matter—a belief that 
                drew me to marketing in the first place. I see it as the ideal intersection of psychology and business. 
                I also have a thing for numbers—they tell stories, and I love bringing them to life
                </p>

                <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#000000]">Education</h2>
                    <ul className="list-disc list-inside space-y-10 text-black">
                        <li>
                            Suffolk University - Marketing Major, Mathematics Minor (Expected May 2026)
                            <ul className="list-disc list-inside ml-5 space-y-  ">
                                <h1 className="ml-8">Suffolk University Madrid (Spring 2024)</h1>
                                <h1 className="ml-8">Honors Program | Deans List</h1>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#000000]">Achievements</h2>
                    <ul className="list-disc list-inside space-y-2 text-black">
                        <li>Spring '24 Dean's List at Boston University</li>
                        <li>Spring '23 and Fall '23 Dean's List at Adelphi University</li>
                    </ul>
                </div> */}
            </div>
        </motion.div>
    );
}

