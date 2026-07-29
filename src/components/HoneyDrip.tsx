export function HoneyDrip({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="honey-drip-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="55%" stopColor="#E8A812" />
          <stop offset="100%" stopColor="#D4890A" />
        </linearGradient>
      </defs>
      <path
        className="honey-drip-blob"
        fill="url(#honey-drip-fill)"
        d="M0 0h1440v24
           C1388 24 1360 58 1328 88
           C1302 112 1278 132 1244 122
           C1204 110 1194 62 1158 54
           C1118 46 1094 96 1052 102
           C1006 108 984 62 940 50
           C890 36 866 90 820 98
           C772 106 748 58 702 50
           C652 40 628 94 580 100
           C532 106 510 58 462 48
           C410 36 386 90 338 98
           C292 106 270 60 224 50
           C174 38 150 88 108 96
           C70 102 44 70 0 78
           V0Z"
      />
      <ellipse className="honey-drip-drop delay-1" cx="210" cy="118" rx="12" ry="16" fill="#D4890A" />
      <ellipse className="honey-drip-drop delay-2" cx="510" cy="112" rx="9" ry="12" fill="#E8A812" />
      <ellipse className="honey-drip-drop delay-3" cx="840" cy="120" rx="11" ry="15" fill="#D4890A" />
      <ellipse className="honey-drip-drop delay-4" cx="1160" cy="110" rx="8" ry="11" fill="#E8A812" />
    </svg>
  );
}
