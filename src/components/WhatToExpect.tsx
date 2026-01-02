"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhatToExpect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-[#F2EECE]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B94C4F] mb-4">
            WHAT YOU CAN EXPECT
          </h2>
          <p className="text-xl sm:text-2xl text-[#503E29] italic">
            Step into a brighter future at Bright Mission Recovery.
          </p>
          <div className="w-24 h-1 bg-[#F5C754] mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-[#90BB6C] mb-4">BRIGHT MISSION RECOVERY</h3>
              <p className="text-[#503E29] leading-relaxed">
                Bright Mission Recovery is a substance use disorder treatment center that provides
                rehabilitation and care for individuals struggling with drug and alcohol addiction,
                on a secluded property with various amenities and a focus on creating a healing
                environment for recovery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#90BB6C] mb-4">
                EFFECTIVE SUBSTANCE ABUSE DISORDER TREATMENTS
              </h3>
              <p className="text-[#503E29] leading-relaxed">
                Individuals diagnosed with substance use disorder (SUD) often require multiple
                treatment programs to achieve and maintain long-term sobriety successfully. People
                benefit from participating in a continuum of care. Bright Mission Recovery offers
                multiple personalized treatment programs to individuals struggling with SUD and
                co-occurring mental health disorders.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/facility2.jpg"
                alt="Bright Mission Recovery Treatment Center"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#B94C4F] rounded-full opacity-10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
