import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { eventData } from '@/data';

const target = new Date(`${eventData.event.dateISO}+05:30`).getTime();
function remaining() { return Math.max(0, target - Date.now()); }
export default function Countdown() {
  const [time, setTime] = useState(remaining);
  const reduced = useReducedMotion();
  useEffect(() => { const timer = setInterval(() => setTime(remaining()), 1000); return () => clearInterval(timer); }, []);
  const units = [{ label: 'Days', value: Math.floor(time / 86400000) }, { label: 'Hours', value: Math.floor(time / 3600000) % 24 }, { label: 'Minutes', value: Math.floor(time / 60000) % 60 }, { label: 'Seconds', value: Math.floor(time / 1000) % 60 }];
  return <div className="countdown-strip"><div><span className="live-dot" /><p>{time ? 'Counting the moments' : 'A day to remember'}<span>{time ? 'UNTIL WE CELEBRATE TOGETHER' : 'THANK YOU FOR SHARING OUR STORY'}</span></p></div><div className="countdown-units">{units.map(unit => <div className="countdown-unit" key={unit.label}><div className="countdown-value"><AnimatePresence mode="popLayout" initial={false}><motion.strong key={unit.value} initial={{ y: reduced ? 0 : 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: reduced ? 0 : -15, opacity: 0 }} transition={{ duration: .2 }}>{String(unit.value).padStart(2, '0')}</motion.strong></AnimatePresence></div><span>{unit.label}</span></div>)}</div></div>;
}
