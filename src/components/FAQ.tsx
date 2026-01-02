"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What is the recommended stay in treatment?",
    answer: `Commitment by the family and your loved one is essential in the recovery process. Bright Mission Recovery will provide an individual plan tailored specifically to their needs, including co-occurring treatment.

Bright Mission Recovery recommends a comprehensive 30-day residential treatment program because increased length of care has proven to provide better outcomes, such as continued abstinence, decreased potential for relapse, and continued employment.

According to the National Institute on Drug Abuse, participation for less than 90 days in residential or outpatient care is of limited effectiveness, and treatment lasting significantly longer is recommended for maintaining positive outcomes.`,
  },
  {
    question: "What happens if my loved one wants to leave before 30 days?",
    answer: `Recovery is a difficult process and takes a tremendous amount of courage. However, this is a disease and certain expected symptoms of the disease may persist while in treatment.

Your loved one may call you requesting or demanding that you take them home. This is an indicator that the symptoms of the disease are present. Factors may include physiological changes, the brain's response to withdrawal, or internal triggers.

Remain supportive by:
• Reassuring them you love them
• Remaining firm on your boundaries
• Staying in close contact with the treatment team for guidance and support`,
  },
  {
    question: "What is the Transition Period?",
    answer: `Also known as the "blackout period," this is a 5-day period when your loved one has limited contact with outside individuals to focus on treatment.

This allows clients to:
• Settle in
• Focus on recovery
• Socialize with peers
• Build confidence in sobriety

When appropriate, staff may assist with "Safety Calls" to loved ones or employers.`,
  },
  {
    question: "What is an ROI?",
    answer: `ROI stands for Release of Information. Your loved one must sign this document for Bright Mission Recovery to communicate with you regarding their treatment.

Without an ROI, staff will state: "I cannot confirm nor deny whether they are in our program."

Encourage your loved one to sign an ROI so updates can be shared.`,
  },
  {
    question: "Visitation Expectations",
    answer: `• Visits are Sundays only
• For family and friends
• Requires approval from the case manager
• Patient safety remains the top priority`,
  },
  {
    question: "Can I use my cellphone while in treatment?",
    answer: `Clients should bring their cell phone but will not be allowed to use it during treatment. All electronics are locked in personal lockers.

Use for essential matters (e.g., bills) must be arranged with a case manager or counselor.`,
  },
];

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-[#503E29]/20 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base sm:text-lg md:text-xl font-semibold text-[#503E29] pr-4 sm:pr-8 group-hover:text-[#B94C4F] transition-colors leading-tight">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#B94C4F] text-white rotate-180" : "bg-[#90BB6C] text-white"
          }`}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-6 text-sm sm:text-base text-[#503E29]/80 whitespace-pre-line leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#B94C4F] mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#F5C754] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F2EECE] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
