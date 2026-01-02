"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "I'm so thankful for where i am at today mind body and soul. 20 + yrs of drug abuse I didn't think I would ever feel like this again…..at peace and free of substance abuse. I still have work to do and Bright Mission Recovery is getting me ready for the next phase IOP Intensive OutPatient. I'm scared but very excited to rejoin society. Thank you BMR",
    name: 'Washington "Buffalo" G',
  },
  {
    quote:
      "I admitted myself to treatment at Bright mission recovery. It wasn't an easy decision to make but due to the help and support from BMR staff I've made it this far. The first day I arrived all the staff welcomed me with open arms, everyone was polite and respectful. Thank you all for providing a safe environment for me to focus on my recovery!",
    name: "Norma C",
  },
  {
    quote:
      "I want everybody to know how awesome this program is. I want to express how I felt when I first arrived at the facility, I felt like I was at home. The staff truly cares, is patient, and compassionate. I finally had to leave my comfort zone and went to BMR. Thank you to all the staff for sticking by me and turning me into a better person.",
    name: "Kristen N",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#503E29]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5C754] mb-4 sm:mb-6">
            PATIENT STORIES
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#90BB6C] mx-auto" />
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-[#F2EECE] rounded-2xl p-6 lg:p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 lg:left-8">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#B94C4F] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <p className="text-[#503E29] italic leading-relaxed mt-4 mb-6 text-sm lg:text-base">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="border-t border-[#503E29]/20 pt-4">
                <p className="font-bold text-[#B94C4F]">— {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F2EECE] rounded-2xl p-6 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-6">
              <div className="w-8 h-8 bg-[#B94C4F] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <p className="text-[#503E29] italic leading-relaxed mt-4 mb-6 text-sm min-h-[180px]">
              &quot;{testimonials[activeIndex].quote}&quot;
            </p>

            <div className="border-t border-[#503E29]/20 pt-4">
              <p className="font-bold text-[#B94C4F]">— {testimonials[activeIndex].name}</p>
            </div>
          </motion.div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#F5C754] scale-125"
                    : "bg-[#F2EECE]/50 hover:bg-[#F2EECE]/70"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe Navigation Arrows */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-2 rounded-full bg-[#F2EECE]/20 text-[#F2EECE] active:scale-95 transition-transform"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-2 rounded-full bg-[#F2EECE]/20 text-[#F2EECE] active:scale-95 transition-transform"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
