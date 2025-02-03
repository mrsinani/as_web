"use client";
import {motion} from 'framer-motion';
import React from 'react';

export default function Stats() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-[#4E6A5B]/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-32"
        >
            <h1 className="text-3xl font-bold mb-8 text-black text-center">Stats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    className="text-center p-6 bg-[#4E6A5B]/0 rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-4xl font-bold text-black-600">3.80</p>
                    <p className="text-black">Current GPA at Suffolk University</p>
                </motion.div>
                <motion.div 
                    className="text-center p-6  rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-4xl font-bold text-black-600">4</p>
                    <p className="text-black">Languages I know</p>
                </motion.div>
                <motion.div 
                    className="text-center p-6  rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-4xl font-bold text-black-600">12</p>
                    <p className="text-black">Countries Visited</p>
                </motion.div>
                <motion.div 
                    className="text-center p-6  rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {/* <p className="text-4xl font-bold text-black-600">
                        {(() => {
                            const [secondsAlive, setSecondsAlive] = React.useState(
                                Math.floor((Date.now() - new Date('2003-08-11T23:00:00+02:00').getTime()) / 1000)
                            );

                            React.useEffect(() => {
                                const interval = setInterval(() => {
                                    setSecondsAlive(
                                        Math.floor((Date.now() - new Date('2003-08-11T23:00:00+02:00').getTime()) / 1000)
                                    );
                                }, 1000);

                                return () => clearInterval(interval);
                            }, []);

                            return secondsAlive.toLocaleString();
                        })()}
                    </p>
                    <p className="text-black">seconds alive</p> */}
                    <p className="text-2xl font-bold text-black-600">Geometry of Grief</p>
                    <p className="text-black font-bold text-black-600">Michael Frame</p>
                    <p className="text-black">Current Favorite Book</p>
                </motion.div>
            </div>
        </motion.div>
    );
}

