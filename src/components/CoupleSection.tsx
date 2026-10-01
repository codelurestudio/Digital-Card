import { motion } from 'framer-motion';
import { coupleImage, eventData } from '@/data';
import { Reveal } from './Reveal';
import { OrnamentalDivider, CornerOrnament } from './Decorative';

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative py-10 sm:py-14 px-6 overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-red-900/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <p className="text-center font-serif italic text-red-400 text-base sm:text-lg mb-4 tracking-wide">
            The Couple
          </p>
          <OrnamentalDivider className="mb-5 sm:mb-7" />
        </Reveal>

        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-center md:justify-center md:gap-10">
          {/* Image with red frame */}
          <Reveal delay={0.2} className="flex-shrink-0">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-red-500/30 rounded-sm" />
              <div className="absolute -inset-1.5 sm:-inset-2 border border-red-500/50 rounded-sm" />

              <div className="relative overflow-hidden rounded-sm shadow-red-lg">
                <motion.img
                  src={coupleImage}
                  alt={`${eventData.coupleNames.bride} and ${eventData.coupleNames.groom} on their wedding day`}
                  className="w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem] object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <CornerOrnament
                position="top-left"
                className="absolute -top-6 -left-6"
              />
              <CornerOrnament
                position="bottom-right"
                className="absolute -bottom-6 -right-6"
              />
            </div>
          </Reveal>

          {/* Names and message */}
          <Reveal delay={0.4} className="text-center md:text-left">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
              <span className="block">{eventData.coupleNames.bride}</span>
              <span className="font-serif italic text-3xl sm:text-4xl text-red-400 my-2 block">
                &amp;
              </span>
              <span className="block">{eventData.coupleNames.groom}</span>
            </h2>

            <div className="my-4 flex justify-center md:justify-start">
              <OrnamentalDivider />
            </div>

            <p className="font-serif italic text-xl sm:text-2xl text-zinc-300 leading-relaxed max-w-md">
              &ldquo;Two hearts, one beautiful journey.&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

