import { HandHeart, Sparkles, Utensils, Sun } from 'lucide-react';
import { timeline } from '@/data';
import { Reveal } from './Reveal';
import { OrnamentalDivider } from './Decorative';

const iconMap: Record<string, typeof HandHeart> = {
  'hand-heart': HandHeart,
  sparkles: Sparkles,
  utensils: Utensils,
  sun: Sun,
};

export default function EventTimeline() {
  return (
    <section className="relative py-8 sm:py-10 px-6">
      <div className="relative max-w-2xl mx-auto">
        <Reveal>
          <p className="text-center font-serif italic text-red-400 text-base sm:text-lg mb-3 tracking-wide">
            The Celebration
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-6">
            Event Timeline
          </h2>
          <div className="flex justify-center mb-5 sm:mb-7">
            <OrnamentalDivider />
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical red line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-3">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Sparkles;
              const isLeft = i % 2 === 0;

              return (
                <Reveal key={item.time} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Icon node */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full border border-red-500/50 bg-black shadow-red">
                      <Icon className="h-4 w-4 text-red-400" />
                    </div>

                    {/* Content */}
                    <div
                      className={`pl-16 sm:pl-0 sm:w-1/2 ${
                        isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                      }`}
                    >
                      <div className="inline-block">
                        <p className="font-display text-lg sm:text-xl text-red-400 tracking-wide mb-1">
                          {item.time}
                        </p>
                        <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="font-serif text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for the other half */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
