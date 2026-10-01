interface DividerProps {
  className?: string;
}

export function OrnamentalDivider({ className = '' }: DividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50 sm:w-20" />
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="text-red-500"
        fill="none"
      >
        <path
          d="M20 4 C 24 10, 28 14, 20 20 C 12 14, 16 10, 20 4 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M20 36 C 16 30, 12 26, 20 20 C 28 26, 24 30, 20 36 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        <path
          d="M8 20 Q 14 16, 20 20"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M32 20 Q 26 16, 20 20"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
        />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50 sm:w-20" />
    </div>
  );
}

export function GoldFlourish({ className = '' }: DividerProps) {
  return (
    <svg
      className={className}
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 10 Q 20 4, 40 10 T 55 10"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        className="text-red-500"
        opacity="0.5"
      />
      <circle cx="60" cy="10" r="3" className="text-red-500" fill="currentColor" />
      <path
        d="M120 10 Q 100 4, 80 10 T 65 10"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        className="text-red-500"
        opacity="0.5"
      />
    </svg>
  );
}

export function CornerOrnament({
  position = 'top-left',
  className = '',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}) {
  const rotation = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-left': 'rotate(270deg)',
    'bottom-right': 'rotate(180deg)',
  }[position];

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className={`text-red-500 ${className}`}
      style={{ transform: rotation }}
      aria-hidden="true"
    >
      <path
        d="M4 4 L 4 28 M4 4 L 28 4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M4 4 Q 16 4, 16 16 Q 16 28, 4 28"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
      <path
        d="M18 8 Q 22 12, 18 16 Q 14 12, 18 8 Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}
