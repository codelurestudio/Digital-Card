import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { galleryImages } from '@/data';
import { Reveal } from './Reveal';

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const visibleImages = expanded ? galleryImages : galleryImages.slice(0, 6);
  const move = (direction: number) => setSelected(index => index === null ? null : (index + direction + galleryImages.length) % galleryImages.length);
  useEffect(() => {
    const element = dialog.current;
    if (selected === null) { element?.close(); return; }
    if (!element?.open) { element?.showModal(); closeButton.current?.focus(); }
  }, [selected]);
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);
  return <section className="gallery-section section-space" id="gallery"><div className="shell">
    <Reveal className="section-heading"><div><p className="eyebrow"><span className="section-number">03</span> LITTLE MOMENTS. BIG FEELINGS.</p><h2>Our kind of <em>beautiful.</em></h2></div><span className="outline-tag">THE PHOTO DIARY <ArrowUpRight size={13} /></span></Reveal>
    <div className="gallery-grid personal-gallery" id="photo-grid">{visibleImages.map((photo, i) => <Reveal key={photo.src} delay={(i % 3) * .06}><button className="gallery-tile" onClick={() => setSelected(i)} aria-label={`View image ${i + 1}: ${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" /><div className="gallery-overlay"><span>FRAME {String(i + 1).padStart(2, '0')}</span><ArrowUpRight size={16} /></div></button></Reveal>)}</div>
    {galleryImages.length > 6 && <button className="gallery-more" aria-expanded={expanded} aria-controls="photo-grid" onClick={() => setExpanded(value => !value)}>{expanded ? 'Show fewer moments' : `Explore all ${galleryImages.length} moments`} {expanded ? '−' : '+'}</button>}
  </div>
  <dialog ref={dialog} className="lightbox" aria-label="Photo gallery" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } }}>
    <button ref={closeButton} className="lightbox-close" aria-label="Close gallery" onClick={() => setSelected(null)}><X size={20} /></button>
    <button className="lightbox-prev" aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft size={22} /></button>
    <button className="lightbox-next" aria-label="Next image" onClick={() => move(1)}><ChevronRight size={22} /></button>
    {selected !== null && <motion.figure key={selected} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}><img src={galleryImages[selected].src} alt={galleryImages[selected].alt} /><figcaption>{selected + 1} / {galleryImages.length} · {galleryImages[selected].alt}</figcaption></motion.figure>}
  </dialog></section>;
}
