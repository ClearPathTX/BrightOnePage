"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutFacility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/facility1.jpg"
                alt="Bright Mission Recovery Facility"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5C754] rounded-full opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#90BB6C] rounded-full opacity-20 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B94C4F] mb-6">
              START YOUR RECOVERY AT BRIGHT MISSION RECOVERY
            </h2>
            <div className="w-24 h-1 bg-[#F5C754] mb-8" />

            <div className="space-y-6 text-[#503E29] text-lg leading-relaxed">
              <p>
                Bright Mission Recovery is a substance use disorder treatment center that provides
                rehabilitation and care for individuals struggling with drug and alcohol addiction,
                on a secluded property with various amenities and a focus on creating a healing
                environment for recovery.
              </p>
              <p>
                The program offers detoxification and residential treatment services, with a mission
                to promote renewal, rebuilding, and recovery for individuals suffering from
                substance abuse. The goal is to assist clients in reintegrating into the community
                as responsible, drug-free individuals through structure, guidance, education, and a
                philosophy based on the 12-Step program of recovery.
              </p>
              <p>
                At Bright Mission Recovery, our passionate professionals are committed to guiding
                individuals on their recovery journey. Our diverse staff includes licensed
                therapists, addiction counselors, medical doctors, behavioral health technicians,
                and support personnel who provide exceptional care and unwavering support.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#90BB6C]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#503E29] font-medium">Licensed Therapists</span>
              </div>
              <div className="flex items-center gap-2 text-[#90BB6C]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#503E29] font-medium">Medical Doctors</span>
              </div>
              <div className="flex items-center gap-2 text-[#90BB6C]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#503E29] font-medium">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
