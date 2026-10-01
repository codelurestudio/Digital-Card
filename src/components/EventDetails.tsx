import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import { eventData } from '@/data';
import { Reveal } from './Reveal';
import { OrnamentalDivider, CornerOrnament } from './Decorative';

export default function EventDetails() {
  const details = [
    { icon: Calendar, label: 'Date', value: eventData.event.date },
    { icon: Clock, label: 'Time', value: eventData.event.time },
    { icon: MapPin, label: 'Venue', value: eventData.event.venue },
  ];

  return (
    <section
      id="event-details"
      className="relative py-8 sm:py-10 px-6"
    >
      <div className="relative max-w-2xl mx-auto">
        <Reveal>
          <div className="relative glass-dark rounded-lg border border-red-500/30 shadow-red-lg overflow-hidden">
            <CornerOrnament
              position="top-left"
              className="absolute top-2 left-2 opacity-50"
            />
            <CornerOrnament
              position="top-right"
              className="absolute top-2 right-2 opacity-50"
            />
            <CornerOrnament
              position="bottom-left"
              className="absolute bottom-2 left-2 opacity-50"
            />
            <CornerOrnament
              position="bottom-right"
              className="absolute bottom-2 right-2 opacity-50"
            />

            <div className="px-5 py-7 sm:px-8 sm:py-9 text-center">
              <p className="font-serif italic text-red-400 text-sm sm:text-base tracking-wide mb-3">
                We invite you to join us at
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-extra-wide mb-6">
                FIRST DAY
              </h2>
              <OrnamentalDivider className="mb-5" />

              <div className="space-y-4 sm:space-y-5 text-left sm:text-center">
                {details.map(({ icon: Icon, label, value }) => (
                  <Reveal key={label} delay={0.1}>
                    <div className="flex items-center gap-4 sm:flex-col sm:gap-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-red-500/40 bg-zinc-900/50 sm:mx-auto">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="sm:mt-2">
                        <p className="font-serif text-xs uppercase tracking-extra-wide text-red-400 mb-1">
                          {label}
                        </p>
                        <p className="font-serif text-lg sm:text-xl text-white leading-snug">
                          {value}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.4}>
                <div className="mt-5">
                  <a
                    href={eventData.event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-gradient-to-b from-zinc-900 to-zinc-900/50 px-6 py-3 font-display text-xs sm:text-sm text-white tracking-extra-wide uppercase transition-all hover:border-red-500 hover:bg-red-500/10 hover:shadow-red"
                  >
                    <Navigation className="h-4 w-4 text-red-400" />
                    View Location
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
