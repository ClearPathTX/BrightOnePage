"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#503E29] text-[#F2EECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <Image
              src="/logo.png"
              alt="Bright Mission Recovery"
              width={180}
              height={60}
              className="h-12 sm:h-16 w-auto mb-4 brightness-110 mx-auto sm:mx-0"
            />
            <p className="text-[#F2EECE]/80 leading-relaxed text-sm sm:text-base">
              A substance use disorder treatment center providing rehabilitation and care for
              individuals struggling with drug and alcohol addiction.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-[#F5C754] font-bold text-lg mb-4">Contact</h4>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#90BB6C] text-white font-semibold rounded-full hover:bg-[#7AA85A] transition-all duration-300 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>

            <p className="mt-4 sm:mt-6 text-[#F2EECE]/70 text-sm flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available 24/7
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#F2EECE]/20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#F2EECE]/60">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Bright Mission Recovery. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-[#90BB6C] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#90BB6C] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
