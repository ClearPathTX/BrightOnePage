"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    title: "Detox",
    items: [
      "First phase of treatment",
      "Typically lasts about one week",
      "24/7 medical supervision",
      "Medication-assisted treatment when needed",
      "Therapy and support for co-occurring mental health conditions",
    ],
  },
  {
    title: "Residential Treatment",
    items: [
      "21-day live-in program (including detox)",
      "Structured, individualized care",
      "Round-the-clock supervision",
    ],
  },
  {
    title: "Partial Hospitalization Program (PHP)",
    items: [
      "Step-down level of care",
      "Clients return home evenings and weekends",
      "Full-day therapy, skill-building, and holistic services",
      "Limited telehealth options available",
    ],
  },
  {
    title: "Outpatient Referrals",
    items: [
      "Referrals for IOP, outpatient, or sober living",
      "Trusted external providers",
    ],
  },
];

const therapies = [
  "Group therapy",
  "Individual therapy",
  "Psychoeducation",
  "Relapse prevention",
];

const specializedGroups = ["LGBTQIA+", "Family systems", "CBT", "DBT", "Mindfulness"];

const additionalServices = [
  "Medication-assisted treatment",
  "Case management",
  "Transportation support",
  "Sober companions",
  "Aftercare planning",
  "Alumni services to reduce relapse risk",
];

export default function TreatmentPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B94C4F] mb-6">
            Treatment
          </h2>
          <div className="w-24 h-1 bg-[#F5C754] mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-[#503E29] max-w-4xl mx-auto leading-relaxed">
            Individuals with substance use disorder (SUD) benefit most from a continuum of care,
            allowing treatment intensity to adjust as needs change. Bright Mission Recovery provides
            personalized, evidence-based programs for individuals with SUD and co-occurring mental
            health disorders, supporting long-term recovery at every stage.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-[#F2EECE] rounded-2xl p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#90BB6C] mb-4">{program.title}</h3>
              <ul className="space-y-3">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#503E29]">
                    <svg
                      className="w-5 h-5 text-[#F5C754] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Therapy & Peer Support */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#503E29] rounded-2xl p-8 sm:p-12 mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F5C754] mb-8 text-center">
            Therapy & Peer Support
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#90BB6C] mb-4">Clients participate in:</h4>
              <ul className="space-y-2">
                {therapies.map((therapy) => (
                  <li key={therapy} className="text-[#F2EECE] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F5C754] rounded-full" />
                    {therapy}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#90BB6C] mb-4">Specialized groups:</h4>
              <ul className="space-y-2">
                {specializedGroups.map((group) => (
                  <li key={group} className="text-[#F2EECE] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F5C754] rounded-full" />
                    {group}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-[#F2EECE] italic">
                These sessions build coping skills, confidence, and peer connection.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Services & Alumni */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#F2EECE] rounded-2xl p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#B94C4F] mb-4">
              Additional Services
            </h3>
            <ul className="space-y-3">
              {additionalServices.map((service) => (
                <li key={service} className="flex items-center gap-3 text-[#503E29]">
                  <svg
                    className="w-5 h-5 text-[#90BB6C] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-[#F2EECE] rounded-2xl p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#B94C4F] mb-4">Alumni Support</h3>
            <p className="text-[#503E29] mb-4">After treatment, clients receive:</p>
            <ul className="space-y-3">
              {[
                "Continued support through referrals",
                "Regular check-ins",
                "Crisis access to clinicians",
                "Ongoing education to sustain recovery",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#503E29]">
                  <svg
                    className="w-5 h-5 text-[#90BB6C] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
