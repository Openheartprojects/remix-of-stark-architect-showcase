import { useId } from "react";

type Variant = "home" | "how" | "learning" | "inference";

const variantTransforms: Record<Variant, { a: string; b: string; c: string }> = {
  home: {
    a: "translate(150,76) rotate(-7 140 110)",
    b: "translate(268,54) rotate(1 140 110)",
    c: "translate(380,86) rotate(8 140 110)",
  },
  how: {
    a: "translate(160,70) rotate(-6 140 110)",
    b: "translate(270,58) rotate(2 140 110)",
    c: "translate(372,82) rotate(8 140 110)",
  },
  learning: {
    a: "translate(154,84) rotate(-5 140 110)",
    b: "translate(278,62) rotate(4 140 110)",
    c: "translate(388,78) rotate(10 140 110)",
  },
  inference: {
    a: "translate(146,74) rotate(-8 140 110)",
    b: "translate(274,56) rotate(0 140 110)",
    c: "translate(384,90) rotate(7 140 110)",
  },
};

export default function NotebookConnectionsIllustration({
  variant = "how",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const id = useId();
  const paperId = `${id}-paper`;
  const softId = `${id}-soft`;

  const t = variantTransforms[variant];

  const renderNotebookConnections = () => {
    return (
      <>
        <path
          d="M230 210 C260 190 290 170 320 150"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="2"
          className="live-illustration__line"
        />
        <path
          d="M400 170 C430 155 455 145 500 128"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="2"
          className="live-illustration__line live-illustration__line--delay"
        />

        <g filter={`url(#${softId})`} className="live-illustration__float">
          <g transform={t.a}>
            <rect
              x="0"
              y="0"
              width="280"
              height="220"
              rx="18"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="28"
              y1="56"
              x2="252"
              y2="56"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="28"
              y1="92"
              x2="210"
              y2="92"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.8"
            />
            <line
              x1="28"
              y1="128"
              x2="236"
              y2="128"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle cx="52" cy="168" r="7" fill="hsl(var(--primary) / 0.35)" />
          </g>

          <g transform={t.b}>
            <rect
              x="0"
              y="0"
              width="280"
              height="220"
              rx="18"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="28"
              y1="56"
              x2="252"
              y2="56"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="28"
              y1="92"
              x2="222"
              y2="92"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.8"
            />
            <line
              x1="28"
              y1="128"
              x2="206"
              y2="128"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle cx="214" cy="166" r="7" fill="hsl(var(--primary) / 0.35)" />
          </g>

          <g transform={t.c}>
            <rect
              x="0"
              y="0"
              width="280"
              height="220"
              rx="18"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="28"
              y1="56"
              x2="252"
              y2="56"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="28"
              y1="92"
              x2="208"
              y2="92"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.8"
            />
            <line
              x1="28"
              y1="128"
              x2="236"
              y2="128"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle cx="78" cy="164" r="7" fill="hsl(var(--primary) / 0.35)" />
          </g>
        </g>
      </>
    );
  };

  const renderLearning = () => {
    return (
      <>
        <path
          d="M224 208 C276 190 330 174 386 156"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="2"
          className="live-illustration__line"
        />
        <path
          d="M392 160 C428 150 462 140 508 122"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="2"
          className="live-illustration__line live-illustration__line--delay"
        />

        <g filter={`url(#${softId})`} className="live-illustration__float">
          {/* Open book */}
          <g transform="translate(140,76)">
            <path
              d="M40 36 C90 18 140 18 190 36 V206 C140 186 90 186 40 206 Z"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <path
              d="M190 36 C240 18 290 18 340 36 V206 C290 186 240 186 190 206 Z"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="190"
              y1="34"
              x2="190"
              y2="210"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* Left page lines */}
            <line x1="64" y1="72" x2="168" y2="72" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="64" y1="102" x2="150" y2="102" stroke="hsl(var(--border))" strokeWidth="2" opacity="0.8" />
            <rect x="64" y="132" width="92" height="10" rx="5" fill="hsl(var(--primary) / 0.18)" />

            {/* Right page lines */}
            <line x1="214" y1="72" x2="316" y2="72" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="214" y1="102" x2="300" y2="102" stroke="hsl(var(--border))" strokeWidth="2" opacity="0.8" />
            <rect x="214" y="132" width="108" height="10" rx="5" fill="hsl(var(--primary) / 0.14)" />

            {/* Learning markers */}
            <circle cx="116" cy="168" r="7" fill="hsl(var(--primary) / 0.35)" />
            <circle cx="270" cy="168" r="7" fill="hsl(var(--primary) / 0.28)" />
          </g>

          {/* Note card */}
          <g transform="translate(470,92) rotate(8 80 62)">
            <rect
              x="0"
              y="0"
              width="160"
              height="124"
              rx="16"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line x1="22" y1="34" x2="138" y2="34" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="22" y1="62" x2="112" y2="62" stroke="hsl(var(--border))" strokeWidth="2" opacity="0.8" />
            <rect x="22" y="86" width="94" height="10" rx="5" fill="hsl(var(--primary) / 0.16)" />
          </g>
        </g>
      </>
    );
  };

  const renderInference = () => {
    return (
      <>
        {/* Control plane connections */}
        <path
          d="M160 116 H302"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="2"
          className="live-illustration__line"
        />
        <path
          d="M418 116 H560"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="2"
          className="live-illustration__line live-illustration__line--delay"
        />
        <path
          d="M350 156 V250"
          fill="none"
          stroke="hsl(var(--primary) / 0.28)"
          strokeWidth="2"
          className="live-illustration__line"
        />

        <g filter={`url(#${softId})`} className="live-illustration__float">
          {/* Client */}
          <g transform="translate(84,86)">
            <rect
              x="0"
              y="0"
              width="120"
              height="60"
              rx="14"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <rect x="18" y="18" width="46" height="10" rx="5" fill="hsl(var(--border))" opacity="0.9" />
            <rect x="18" y="34" width="70" height="10" rx="5" fill="hsl(var(--border))" opacity="0.65" />
            <circle cx="96" cy="30" r="7" fill="hsl(var(--primary) / 0.25)" />
          </g>

          {/* Gateway */}
          <g transform="translate(232,86)">
            <rect
              x="0"
              y="0"
              width="160"
              height="60"
              rx="14"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <rect x="18" y="18" width="86" height="10" rx="5" fill="hsl(var(--border))" opacity="0.9" />
            <rect x="18" y="34" width="116" height="10" rx="5" fill="hsl(var(--border))" opacity="0.65" />
            <circle cx="136" cy="30" r="7" fill="hsl(var(--primary) / 0.22)" />
          </g>

          {/* Scheduler */}
          <g transform="translate(406,86)">
            <rect
              x="0"
              y="0"
              width="160"
              height="60"
              rx="14"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <rect x="18" y="18" width="92" height="10" rx="5" fill="hsl(var(--border))" opacity="0.9" />
            <rect x="18" y="34" width="104" height="10" rx="5" fill="hsl(var(--border))" opacity="0.65" />
            <circle cx="136" cy="30" r="7" fill="hsl(var(--primary) / 0.22)" />
          </g>

          {/* Node cluster */}
          <g transform="translate(176,246)">
            <rect
              x="0"
              y="0"
              width="348"
              height="78"
              rx="18"
              fill={`url(#${paperId})`}
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <g opacity="0.9">
              <rect x="24" y="22" width="86" height="34" rx="12" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2" />
              <rect x="132" y="22" width="86" height="34" rx="12" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2" />
              <rect x="240" y="22" width="86" height="34" rx="12" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2" />
            </g>
            <circle cx="67" cy="39" r="6" fill="hsl(var(--primary) / 0.22)" />
            <circle cx="175" cy="39" r="6" fill="hsl(var(--primary) / 0.22)" />
            <circle cx="283" cy="39" r="6" fill="hsl(var(--primary) / 0.22)" />
          </g>
        </g>
      </>
    );
  };

  return (
    <svg
      viewBox="0 0 720 360"
      className={className}
      role="img"
      aria-label="Three notebook pages gently overlapping with thin lines connecting them"
    >
      <defs>
        <linearGradient id={paperId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(var(--background))" />
          <stop offset="1" stopColor="hsl(var(--card))" />
        </linearGradient>
        <filter id={softId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="14"
            floodColor="hsl(225 15% 18% / 0.08)"
          />
        </filter>
      </defs>

      <g className="live-illustration">
        {variant === "learning" ? renderLearning() : null}
        {variant === "inference" ? renderInference() : null}
        {variant === "home" || variant === "how" ? renderNotebookConnections() : null}
      </g>
    </svg>
  );
}
