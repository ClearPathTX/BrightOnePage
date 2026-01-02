"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const facilityImages = [
  { src: "/facility1.jpg", alt: "Bright Mission Recovery Main Building" },
  { src: "/facility2.jpg", alt: "Bright Mission Recovery Grounds" },
  { src: "/facility3.jpg", alt: "Bright Mission Recovery Amenities" },
  { src: "/facility4.jpg", alt: "Bright Mission Recovery Interior" },
  { src: "/facility5.jpg", alt: "Bright Mission Recovery Outdoor Area" },
];

export default function OurFacility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev === facilityImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? facilityImages.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#F2EECE]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B94C4F] mb-4 sm:mb-6">
            Our Facility
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#F5C754] mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-[#503E29] max-w-4xl mx-auto leading-relaxed px-2">
            Bright Mission Recovery offers detox, residential, and partial hospitalization
            treatment programs where clients benefit from a family-like environment and structured
            care.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#503E29] max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2">
            The treatment center has six beds, making it a highly personalized experience for
            individuals struggling with substance abuse. Clients have the opportunity to spend more
            time one-on-one with their care team.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Main Image with Navigation */}
          <div className="relative aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <Image
              src={facilityImages[activeImage].src}
              alt={facilityImages[activeImage].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />

            {/* Mobile Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-2 sm:hidden">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-black/30 text-white backdrop-blur-sm active:scale-95 transition-transform"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-black/30 text-white backdrop-blur-sm active:scale-95 transition-transform"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeImage === index ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Thumbnail Navigation */}
          <div className="hidden sm:grid grid-cols-5 gap-2 sm:gap-4">
            {facilityImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                  activeImage === index
                    ? "ring-4 ring-[#90BB6C] scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {[
            {
              icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              ),
              title: "6-Bed Facility",
              description: "Intimate, personalized care environment",
            },
            {
              icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
              title: "Family-Like Environment",
              description: "Structured care with personal attention",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#90BB6C]/10 text-[#90BB6C] mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#503E29] mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-[#503E29]/70">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
