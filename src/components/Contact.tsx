"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-[#90BB6C]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            GET IN TOUCH WITH OUR PROFESSIONAL STAFF TODAY
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#F5C754] mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
            We understand that reaching out for help is an important and sometimes challenging step.
            At Bright Mission Recovery, we are here for you every hour of every day, ready to
            provide the support and assistance you need. Don&apos;t hesitate to get in touch with us.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#90BB6C] text-lg sm:text-xl font-bold rounded-full hover:bg-[#F2EECE] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              CONTACT US
            </a>
          </motion.div>

          {/* 24/7 Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-8 sm:mt-10"
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm sm:text-base">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
              Available 24/7 for support
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
