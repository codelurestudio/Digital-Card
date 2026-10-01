import { motion } from 'framer-motion';
import { eventData } from '@/data';
import { OrnamentalDivider } from './Decorative';

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-10 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif italic text-xl sm:text-2xl text-zinc-300 mb-2">
            With Love,
          </p>
          <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide mb-4">
            <span className="text-gradient-red">{eventData.coupleNames.bride} &amp; {eventData.coupleNames.groom}</span>
          </h3>

          <OrnamentalDivider className="my-4" />

          <p className="font-serif text-lg sm:text-xl text-red-400 tracking-wide">
            {eventData.event.date}
          </p>

          <div className="mt-8 flex justify-center">
            <motion.svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="text-red-500"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M30 12 C 35 18, 40 22, 30 30 C 20 22, 25 18, 30 12 Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M30 48 C 25 42, 20 38, 30 30 C 40 38, 35 42, 30 48 Z"
                fill="currentColor"
                opacity="0.3"
              />
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <path
                d="M12 30 Q 21 26, 30 30"
                stroke="currentColor"
                strokeWidth="0.6"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M48 30 Q 39 26, 30 30"
                stroke="currentColor"
                strokeWidth="0.6"
                fill="none"
                opacity="0.4"
              />
            </motion.svg>
          </div>

          <p className="mt-8 font-serif text-xs text-zinc-400 tracking-wide">
            Anantara Kalutara Resort, Sri Lanka
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

