"use client";
import { motion } from 'framer-motion';

const contentAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    return (
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-[#4E6A5B]/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-32"
        >
            <h1 className="text-center text-3xl font-bold mb-6 text-black">Contact</h1>
            <div className="space-y-4">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* <h2 className="text-lg font-semibold text-black">Email</h2> */}
                    <a href="mailto:anisaspaho11@gmail.com" className="text-[#342826] underline block text-center">
                        anisaspaho11@gmail.com
                    </a>
                </motion.div>

                {/* <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-lg font-semibold text-black">Phone</h2>
                    <p className="text-black">(917) 972-4855</p>
                </motion.div> */}

                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {/* <h2 className="text-lg font-semibold text-black">Social</h2> */}
                    <div className="text-center space-y-2">
                        <a 
                            href="https://linkedin.com/in/anisa-spaho" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-center block underline text-[#342826]"
                        >
                            LinkedIn
                        </a>
                        {/* <a 
                            href="https://github.com/mrsinani" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block text-blue-600 hover:text-blue-800"
                        >
                            GitHub
                        </a> */}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

