import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { eventData, heroImage } from '@/data';
import { OrnamentalDivider, CornerOrnament } from './Decorative';

interface InvitationOpeningProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function InvitationOpening({
  onOpen,
  isOpen,
}: InvitationOpeningProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black py-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Sri Lankan wedding couple"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Corner ornaments */}
          <CornerOrnament
            position="top-left"
            className="absolute top-4 left-4 sm:top-8 sm:left-8"
          />
          <CornerOrnament
            position="top-right"
            className="absolute top-4 right-4 sm:top-8 sm:right-8"
          />
          <CornerOrnament
            position="bottom-left"
            className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8"
          />
          <CornerOrnament
            position="bottom-right"
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8"
          />

          {/* Content */}
          <div className="relative z-10 px-6 text-center max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif italic text-base text-zinc-200/90 sm:text-lg tracking-wide mb-4 sm:mb-5"
            >
              Together with their families
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-2 sm:mb-4">
                <span className="text-shimmer-white">{eventData.coupleNames.bride.toUpperCase()}</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="my-3 sm:my-4"
              >
                <span className="font-serif italic text-4xl sm:text-5xl text-zinc-200">
                  &amp;
                </span>
              </motion.div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4 sm:mb-5">
                <span className="text-shimmer-white">{eventData.coupleNames.groom.toUpperCase()}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="font-serif text-lg sm:text-xl text-white/90 italic mb-2 sm:mb-3"
            >
              Invite you to celebrate their
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="font-display text-xl sm:text-2xl text-red-400 tracking-extra-wide uppercase mb-4 sm:mb-5"
            >
              First Day
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <OrnamentalDivider className="mb-4 sm:mb-5" />

              <p className="font-serif text-2xl sm:text-3xl text-white tracking-wide mb-5 sm:mb-6">
                19 October
              </p>

              <motion.button
                onClick={onOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 rounded-full border border-red-500/60 bg-gradient-to-b from-red-700/80 to-red-800/90 px-8 py-4 sm:px-10 sm:py-5 backdrop-blur-sm transition-colors hover:border-red-500 hover:from-red-700 hover:to-red-800"
              >
                <span className="font-display text-sm sm:text-base text-white tracking-extra-wide uppercase">
                  Open Invitation
                </span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="h-5 w-5 text-zinc-200" />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

