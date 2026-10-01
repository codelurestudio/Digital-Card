import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { eventData } from '@/data';
import { Reveal } from './Reveal';
import { OrnamentalDivider } from './Decorative';

export default function RSVPSection() {
  return (
    <section id="rsvp" className="relative py-8 sm:py-10 px-6">
      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <div className="relative glass-dark rounded-lg border border-red-500/30 shadow-red-lg px-5 py-7 sm:px-8 sm:py-9 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-6"
            >
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-red-500/40 bg-zinc-900/50">
                <Heart className="h-6 w-6 text-red-400" fill="currentColor" />
              </div>
            </motion.div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white tracking-wide mb-4">
              We Would Love to Celebrate With You
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-zinc-300 mb-2">
              Please confirm your attendance
            </p>

            <OrnamentalDivider className="my-4" />

            <motion.a
              href={eventData.rsvpUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full border border-red-500/50 bg-gradient-to-b from-red-700 to-red-800 px-8 py-4 font-display text-sm sm:text-base text-white tracking-extra-wide uppercase transition-all hover:border-red-500 hover:shadow-red-lg"
            >
              <Heart className="h-4 w-4 text-zinc-200" />
              RSVP
            </motion.a>

            <p className="mt-6 font-serif text-sm text-red-300">
              Kindly respond by October 5
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

