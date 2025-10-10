export const HeroImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
      <svg viewBox="0 0 400 400" className="relative w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.2 }} />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Base grid */}
        <path d="M 50 50 H 350 V 350 H 50 Z" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1" />
        <path d="M 50 150 H 350 M 50 250 H 350 M 150 50 V 350 M 250 50 V 350" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.5" />
        
        {/* Abstract document layers */}
        <rect x="100" y="120" width="200" height="160" rx="10" fill="hsl(var(--secondary))" opacity="0.3" transform="rotate(-5 200 200)" />
        <rect x="100" y="120" width="200" height="160" rx="10" fill="hsl(var(--secondary))" opacity="0.5" transform="rotate(5 200 200)" />
        <rect x="100" y="120" width="200" height="160" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />

        {/* Data lines */}
        <path d="M 120 150 h 160 M 120 170 h 100 M 120 190 h 160 M 120 210 h 120 M 120 230 h 160" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" opacity="0.5" />
        <rect x="230" y="160" width="50" height="20" fill="url(#grad1)" rx="3" filter="url(#glow)" />

        {/* Connection points */}
        <circle cx="50" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="350" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="350" r="4" fill="hsl(var(--primary))" />
        <circle cx="350" cy="350" r="4" fill="hsl(var(--primary))" />
        <path d="M 50 50 C 150 100, 100 250, 200 200" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M 350 350 C 250 300, 300 150, 200 200" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.7" />
      </svg>
    </div>
  );
};