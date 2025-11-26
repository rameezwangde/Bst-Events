import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ThreeBackground from '../components/ThreeBackground';

const VisionMission = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-br from-[#030712] via-[#0b1a3d] to-[#050915] overflow-hidden">
                <ThreeBackground />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.18),transparent_40%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.14),transparent_35%)]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/70"
                    >
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">Growth mindset</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">Brand-first delivery</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">Safety & trust</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-bst-accent">Vision & Mission</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
                            Principles that keep every show precise, on-brand, and human.
                        </p>
                    </motion.div>
                </div>

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
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-bst-cream/70 via-white to-white"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image */}
                                <div className="relative h-[500px] lg:h-[600px]">
                                    <img
                                        src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/Asset-2.png"
                                        alt="Vision"
                                        className="w-full h-full object-contain bg-gradient-to-br from-bst-blue via-[#1e5ba8] to-bst-dark p-8"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-bst-blue to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark">Vision</h2>
                                    </div>

                                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                                        Be the trusted partner for brands that need experiences engineered with precision, creativity, and measurable impact—regionally and globally.
                                    </p>
                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'World-class builds, hospitality-grade delivery',
                                            'Operational excellence with safety-first standards',
                                            'Brand-consistent storytelling across every touchpoint'
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3 rounded-2xl border border-bst-blue/15 bg-bst-blue/5 px-4 py-3">
                                                <svg className="w-5 h-5 text-bst-blue mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-base text-bst-dark/90">{item}</span>
                                            </div>
                                        ))}
                                    </div>
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
                                <div className="p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-bst-accent to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark">Mission</h2>
                                    </div>

                                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                                        Build a world-class team that fuses process, creativity, and technology to deliver events that feel effortless and unmistakably on-brand.
                                    </p>
                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'Benchmark processes with transparent budgets',
                                            'Integrated creative, build, and show-calling teams',
                                            'Constant improvement through post-show retros'
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-3 rounded-2xl border border-bst-accent/20 bg-bst-accent/5 px-4 py-3">
                                                <svg className="w-5 h-5 text-bst-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-base text-bst-dark/90">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2">
                                    <img
                                        src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/Asset-1.jpg"
                                        alt="Mission"
                                        className="w-full h-full object-contain bg-gradient-to-br from-bst-accent via-[#1e5ba8] to-bst-dark p-8"
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
                                <div className="bg-gradient-to-br from-bst-dark via-[#1e3a8a] to-bst-dark rounded-3xl shadow-2xl p-10 md:p-16 text-white relative overflow-hidden">
                                    <div className="absolute -right-24 -top-24 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
                                    <div className="absolute -left-24 bottom-0 w-72 h-72 bg-bst-accent/15 blur-3xl rounded-full"></div>
                                    <div className="relative z-10">
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
                                                We stay transparent, truthful, and morally correct in every decision and interaction.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                            <h3 className="text-xl font-bold mb-3 text-cyan-300">Ownership that inspires</h3>
                                            <p className="text-gray-300 font-light">
                                                We lead and deliver in ways that motivate teams, partners, and clients to trust the process.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                            <h3 className="text-xl font-bold mb-3 text-cyan-300">Trust</h3>
                                            <p className="text-gray-300 font-light">
                                                We maintain the trust of employees, customers, vendors, partners, and investors through consistent delivery.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                            <h3 className="text-xl font-bold mb-3 text-cyan-300">Excellence in action</h3>
                                            <p className="text-gray-300 font-light">
                                                We continuously invest in people and process to raise the bar on every project and show day.
                                            </p>
                                        </div>
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
