"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "LEARN ABOUT OUR TREATMENTS",
    content:
      "No one should ever detox from alcohol, prescription drugs, or heroin on their own. Withdrawals can be life threatening. You or your loved one need to be monitored by medical professionals to ensure safety. We offer safe & private medical detox program.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "OUR ACCREDITED PROGRAMS",
    content:
      "Recovery from drug & alcohol addiction is a life-long process. No matter where you are in the journey, having the support tools & being part of a sober community helps make living drug & alcohol free that much easier. Learn about our case management program.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function StartRecovery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="start-recovery" className="py-20 sm:py-28 bg-[#F2EECE]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B94C4F] mb-6">
            START YOUR RECOVERY WITH US
          </h2>
          <div className="w-24 h-1 bg-[#F5C754] mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-[#503E29] max-w-4xl mx-auto leading-relaxed">
            The first step in the addiction treatment and recovery process is that moment when your
            loved one admits there is a problem and is ready and willing to go accept help and get
            treatment. We&apos;re here for you when you or your loved one is ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#90BB6C] mb-4">{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#B94C4F] mb-4">{card.title}</h3>
              <p className="text-[#503E29] leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
