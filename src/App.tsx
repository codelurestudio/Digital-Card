import { useState, type CSSProperties } from 'react';
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Heart, CalendarDays, MapPin, Clock, Plus, Flower2 } from 'lucide-react';
import { eventData, heroImage, coupleImage, timeline } from '@/data';
import { Reveal } from '@/components/Reveal';
import Gallery from '@/components/Gallery';
import Countdown from '@/components/Countdown';

function getGoogleCalendarUrl() {
  const day = eventData.event.dateISO.slice(0, 10).replace(/-/g, '');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${eventData.coupleNames.bride} & ${eventData.coupleNames.groom} — First Day Celebration`,
    dates: `${day}T100000/${day}T150000`,
    details: `Join us in celebrating the first day of ${eventData.coupleNames.bride} and ${eventData.coupleNames.groom}.`,
    location: eventData.event.venue,
    ctz: 'Asia/Colombo',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const googleCalendarUrl = getGoogleCalendarUrl();

const flowerFall = Array.from({ length: 18 }, (_, index) => ({
  left: (index * 37 + 7) % 100,
  size: 13 + (index % 5) * 2.5,
  duration: 10 + (index % 6) * 1.35,
  delay: -((index * 1.7) % 13),
  drift: -42 + (index % 7) * 14,
  color: ['#c7c6da', '#bfcbb5', '#eccabb', '#c5d9e1', '#eee59b'][index % 5],
}));

function FallingFlowers() {
  return (
    <div className="falling-flowers" aria-hidden="true">
      {flowerFall.map((flower, index) => (
        <span
          key={index}
          style={{
            '--flower-left': `${flower.left}%`,
            '--flower-size': `${flower.size}px`,
            '--flower-duration': `${flower.duration}s`,
            '--flower-delay': `${flower.delay}s`,
            '--flower-drift': `${flower.drift}px`,
            '--flower-color': flower.color,
          } as CSSProperties}
        >
          <Flower2 />
        </span>
      ))}
    </div>
  );
}

function saveDate() {
  window.location.assign(googleCalendarUrl);
}

function CurtainOpening({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);
  const { bride, groom } = eventData.coupleNames;
  const date = new Date(eventData.event.dateISO);

  return (
    <motion.section
      className="curtain-opening-stage"
      aria-label="First day invitation cover"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ duration: 0.35 }}
    >
      <motion.div className="pastel-curtain pastel-curtain-left" animate={opened ? { x: '-102%' } : { x: 0 }} transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }} />
      <motion.div className="pastel-curtain pastel-curtain-right" animate={opened ? { x: '102%' } : { x: 0 }} transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }} />
      <motion.div className="curtain-opening-copy" animate={opened ? { opacity: 0, y: -18 } : { opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="curtain-rings" aria-hidden="true"><i /><i /></div>
        <p>TOGETHER WITH THEIR FAMILIES</p>
        <h1><span>{bride}</span><em>&amp;</em><span>{groom}</span></h1>
        <div className="curtain-rule"><i /><Heart size={10} fill="currentColor" /><i /></div>
        <strong>FIRST DAY · {date.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}</strong>
        <motion.button type="button" onClick={() => setOpened(true)} disabled={opened} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>Tap to open</motion.button>
      </motion.div>
      <motion.div
        className="transition-car"
        aria-hidden="true"
        initial={{ x: '-28vw', opacity: 0 }}
        animate={opened ? { x: '128vw', opacity: [0, 1, 1, 1, 0] } : { x: '-28vw', opacity: 0 }}
        transition={{ duration: 3.5, delay: .72, ease: [0.45, 0, 0.2, 1], times: [0, .08, .75, .92, 1] }}
        onAnimationComplete={() => opened && onOpen()}
      >
        <span className="car-ribbon">JUST MARRIED</span>
        <span className="car-body"><i /><i /></span>
        <span className="car-window car-window-one" /><span className="car-window car-window-two" />
        <span className="car-wheel car-wheel-one" /><span className="car-wheel car-wheel-two" />
      </motion.div>
      <motion.p className="curtain-footer" animate={opened ? { opacity: 0 } : { opacity: 1 }}>A LITTLE LOVE · A LIFETIME TOGETHER</motion.p>
    </motion.section>
  );
}

function LegacyInvitation() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const { bride, groom } = eventData.coupleNames;
  const date = new Date(eventData.event.dateISO);
  return (
    <div className="invitation">
      <motion.div className="reading-progress" style={{ scaleX: progress }} />
      <a className="skip-link" href="#main">Skip to invitation</a>
      <header className="site-nav shell">
        <a href="#home" className="monogram" aria-label={`${bride} and ${groom}, home`}>{bride[0]}<span>+</span>{groom[0]}<i /></a>
        <nav aria-label="Main navigation"><a href="#story">Our story</a><a href="#event-details">The day</a><a href="#gallery">Gallery</a></nav>
        <button className="nav-cta" onClick={saveDate}>Save the date <ArrowUpRight size={15} /></button>
      </header>
      <main id="main">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}><span className="live-dot" /> A FIRST DAY CELEBRATION</motion.p>
            <h1 id="hero-title">
              <span className="name-mask"><motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: .1, ease: [.22, 1, .36, 1] }}>{bride}<span className="name-dot">.</span></motion.span></span>
              <span className="name-mask"><motion.span className="second-name" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: .25, ease: [.22, 1, .36, 1] }}><em>&</em> {groom}</motion.span></span>
            </h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .5 }}>
              <p className="hero-description">A new chapter. Our favourite people.<br />One unforgettable celebration.</p>
              <div className="hero-actions"><a href="#event-details" className="button-primary">You're invited <ArrowUpRight size={19} /></a><a href="#story" className="round-link" aria-label="Discover our story"><ArrowDown size={20} /></a><span className="tiny-label">SCROLL TO<br />OUR STORY</span></div>
            </motion.div>
            <div className="hero-foot"><span>{String(date.getDate()).padStart(2, '0')} / {String(date.getMonth() + 1).padStart(2, '0')} / {date.getFullYear()}</span><span>SRI LANKA <Plus size={12} /></span></div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0 round 24px)' }} animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0 round 24px)' }} transition={{ duration: 1.1, delay: .15, ease: [.22, 1, .36, 1] }}>
            <img className="hero-photo" src={heroImage} alt={`${bride} and ${groom} together beside a waterfall`} fetchPriority="high" />
            <div className="photo-shade" />
            <span className="photo-label"><Heart size={13} fill="currentColor" /> TOGETHER, ALWAYS.</span>
            <div className="photo-caption"><p>Here's to</p><strong>our forever.</strong><span>{eventData.event.date} · {date.getFullYear()}</span></div>
            <div className="date-sticker"><span>{date.toLocaleDateString('en', { month: 'short' }).toUpperCase()}</span><strong>{date.getDate()}</strong><ArrowUpRight size={20} /></div>
          </motion.div>
        </section>
        <div className="love-ticker" aria-hidden="true"><div className="ticker-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>A LITTLE LOVE <Plus /> A LIFETIME TOGETHER <Heart size={22} /> {bride.toUpperCase()} & {groom.toUpperCase()} <Plus /></span>)}</div></div>
        <section className="story-section shell section-space" id="story">
          <Reveal className="story-photo"><img src={coupleImage} alt={`${bride} and ${groom} dressed in white beside a waterfall`} loading="lazy" /><span className="image-index">01 / OUR BEGINNING</span></Reveal>
          <Reveal className="story-copy" delay={.1}><p className="eyebrow"><span className="section-number">01</span> TWO HEARTS. ONE STORY.</p><h2>Found each other.<br />Choosing <em>forever.</em></h2><p>With joyful hearts and together with our families, we invite you to celebrate our first day and the beginning of a beautiful new chapter.</p><p>It wouldn't be the same without you.</p><div className="signature">{bride} <span>&</span> {groom}<Heart size={20} /></div></Reveal>
        </section>
        <section className="shell section-space event-section" id="event-details">
          <Reveal className="section-heading"><div><p className="eyebrow"><span className="section-number">02</span> THE PLAN</p><h2>Your place.<br /><em>Our special day.</em></h2></div><p>Good company. Beautiful moments.<br />Everything you need to be there.</p></Reveal>
          <div className="event-grid">
            <Reveal className="event-card date-card"><CalendarDays size={23} /><span className="eyebrow">SAVE THE DATE</span><strong>{String(date.getDate()).padStart(2, '0')}<span>{date.toLocaleDateString('en', { month: 'long' })}<small>{date.getFullYear()}</small></span></strong><button className="text-button" onClick={saveDate}>Add to calendar <ArrowUpRight size={18} /></button></Reveal>
            <Reveal className="event-card" delay={.08}><Clock size={23} /><span className="eyebrow">MAKE A DAY OF IT</span><h3>{eventData.event.time.split(' – ')[0]}<br /><span>onwards.</span></h3><p>{eventData.event.time}<br />A celebration to remember.</p></Reveal>
            <Reveal className="event-card venue-card" delay={.16}><MapPin size={23} /><span className="eyebrow">MEET US HERE</span><h3>{eventData.event.venue.split(',')[0]}<span>Sri Lanka</span></h3><a className="text-button" href={eventData.event.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18} /></a></Reveal>
          </div>
          <Countdown />
        </section>
        <Gallery />
        <section className="shell section-space" id="timeline">
          <Reveal className="section-heading"><div><p className="eyebrow"><span className="section-number">04</span> MOMENT BY MOMENT</p><h2>Let the day <em>unfold.</em></h2></div><span className="outline-tag">{eventData.event.date.toUpperCase()}</span></Reveal>
          <div className="schedule-grid">{timeline.map((item, i) => <Reveal className="schedule-item" key={item.time} delay={i * .07}><div className="schedule-top"><span>0{i + 1}</span><Plus size={17} /></div><p className="schedule-time">{item.time}</p><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div>
        </section>
        <section className="shell closing-section" id="rsvp"><Reveal className="closing-card"><div className="closing-orbit" aria-hidden="true" /><div className="closing-copy"><p className="eyebrow">OUR DAY IS BETTER WITH YOU IN IT.</p><h2>Come for the love.<br />Stay for the <em>memories.</em></h2><p>We can't wait to celebrate with you.</p><div className="closing-actions"><button className="button-white" onClick={saveDate}>Save our date <ArrowUpRight size={19} /></button>{eventData.rsvpUrl !== '#rsvp' && <a className="button-white" href={eventData.rsvpUrl}>RSVP <ArrowUpRight size={19} /></a>}</div></div><Heart className="closing-heart" strokeWidth={.7} aria-hidden="true" /></Reveal></section>
      </main>
      <footer className="shell modern-footer"><a className="monogram" href="#home">{bride[0]}<span>+</span>{groom[0]}<i /></a><p>With love, {bride} & {groom}</p><a href="#home">BACK TO TOP <ArrowUpRight size={15} /></a></footer>
    </div>
  );
}

function Invitation() {
  const { bride, groom } = eventData.coupleNames;
  const date = new Date(eventData.event.dateISO);

  return (
    <main className="card-page">
      <motion.article
        className="invitation-card"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="card-header">
          <div className="card-rings" aria-hidden="true"><i /><i /></div>
          <h1>{bride}<em>&amp;</em>{groom}</h1>
          <p>INVITE YOU TO JOIN US IN CELEBRATING</p>
          <strong>THEIR BEAUTIFUL FIRST DAY</strong>
        </header>

        <section className="card-date" aria-label="First day date and time">
          <p>{date.toLocaleDateString('en', { weekday: 'long' })}</p>
          <div><span>{date.toLocaleDateString('en', { month: 'long' })}</span><strong>{String(date.getDate()).padStart(2, '0')}</strong><small>{date.getFullYear()}</small></div>
          <p>At {eventData.event.time.split(' – ')[0]}</p>
        </section>

        <section className="card-venue">
          <MapPin size={19} />
          <h2>{eventData.event.venue.split(',')[0]}</h2>
          <p>{eventData.event.venue}</p>
        </section>

        <div className="card-actions">
          <a href={eventData.event.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> Directions</a>
          <a className="calendar-action" href={googleCalendarUrl}><CalendarDays size={15} /> Add to Calendar</a>
        </div>

        <footer className="card-footer">
          <Heart size={17} fill="currentColor" />
          <p>WITH LOVE</p>
          <strong>{bride} &amp; {groom}</strong>
        </footer>
      </motion.article>
    </main>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const InvitationView = new URLSearchParams(window.location.search).has('legacy')
    ? LegacyInvitation
    : Invitation;

  return (
    <MotionConfig reducedMotion="user">
      <FallingFlowers />
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65 }}>
            <InvitationView />
          </motion.div>
        ) : (
          <CurtainOpening key="opening" onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}


