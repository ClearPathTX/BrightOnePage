"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-wider mb-4 leading-tight"
        >
          BRIGHT MISSION
          <br className="sm:hidden" />
          <span className="sm:inline"> </span>RECOVERY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-[#F5C754] text-[#503E29] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
            Luxury Treatment
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-light italic max-w-2xl px-4"
        >
          A safe place to heal, rebuild, and recover
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#start-recovery"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#90BB6C] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#7AA85A] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          >
            Begin Your Journey
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <a
            href="tel:+18884042804"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white text-base sm:text-lg font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
