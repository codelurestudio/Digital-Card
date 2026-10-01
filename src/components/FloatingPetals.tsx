import { useMemo } from 'react';

interface PetalConfig {
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  drift: number;
}

function Petal({ config }: { config: PetalConfig }) {
  const { left, delay, duration, size, rotation, drift } = config;

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: `${left}%`,
        top: '-5%',
        animation: `petalFall ${duration}s linear ${delay}s infinite`,
        '--drift': `${drift}px`,
        '--rotation': `${rotation}deg`,
        '--size': `${size}px`,
      } as React.CSSProperties}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        style={{ opacity: 0.5 }}
      >
        <path
          d="M10 0 C 14 4, 18 8, 10 20 C 2 8, 6 4, 10 0 Z"
          fill="url(#petalGradient)"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function FloatingPetals({ count = 12 }: { count?: number }) {
  const petals = useMemo<PetalConfig[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 10,
        size: 10 + Math.random() * 14,
        rotation: Math.random() * 360,
        drift: -30 + Math.random() * 60,
      })),
    [count],
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
      style={{ overflow: 'hidden' }}
    >
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.4; }
          100% {
            transform: translate(var(--drift), 105vh) rotate(var(--rotation));
            opacity: 0;
          }
        }
      `}</style>
      {petals.map((p, i) => (
        <Petal key={i} config={p} />
      ))}
    </div>
  );
}

