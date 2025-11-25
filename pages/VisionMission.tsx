import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ThreeBackground from '../components/ThreeBackground';

const VisionMission = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center bg-bst-dark overflow-hidden">
                {/* 3D Background with floating diamonds */}
                <ThreeBackground />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Vision & Mission</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                            Guiding principles that drive our commitment to excellence
                        </p>
                    </motion.div>
                </div>

                {/* Wave Separator */}
                <div className="absolute bottom-0 left-0 w-full leading-none">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </section>

            {/* Vision & Mission Content */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-6">
                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image */}
                                <div className="relative h-[500px] lg:h-[600px]">
                                    <img
                                        src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/Asset-2.png"
                                        alt="Vision"
                                        className="w-full h-full object-contain bg-[#1e5ba8] p-8"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-10 md:p-16 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-bst-blue to-indigo-600 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark">Vision</h2>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                                        To be a globally recognized business known for quality, exceeding customer expectations & seizing opportunities for growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Content - Reversed order on desktop */}
                                <div className="p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-bst-accent to-orange-600 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark">Mission</h2>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                                        Develop a world class organization through benchmarked processes, technology, creativity & people. Become a global brand name which stands for innovation & creativity.
                                    </p>
                                </div>

                                {/* Image */}
                                <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2">
                                    <img
                                        src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/Asset-1.jpg"
                                        alt="Mission"
                                        className="w-full h-full object-contain bg-[#1e5ba8] p-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-br from-bst-dark via-[#1e3a8a] to-bst-dark rounded-3xl shadow-2xl p-10 md:p-16 text-white">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold">Core Values</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-3 text-cyan-300">Honesty, Ethics & Integrity</h3>
                                    <p className="text-gray-300 font-light">
                                        We shall adhere to the virtuous attributes of transparency, truthfulness, straightforwardness & being morally correct under all circumstances.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-3 text-cyan-300">Inspire Commitment with Complete Ownership</h3>
                                    <p className="text-gray-300 font-light">
                                        We shall work, lead & live in a way that inspires, motivates others withing & outside the organization.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-3 text-cyan-300">Trust</h3>
                                    <p className="text-gray-300 font-light">
                                        We shall act with & maintain the trust of all our stakeholders including the employeers, customers, vendors, partners & invetros.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-3 text-cyan-300">Excellence in all our Actions</h3>
                                    <p className="text-gray-300 font-light">
                                        We shall invest in our teams & processes to continuously raise the benchmarks across the board & achieve excellencein all our activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default VisionMission;
