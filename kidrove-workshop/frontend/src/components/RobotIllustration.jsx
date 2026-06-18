export function RobotIllustration() {
  return (
    <svg viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 340 }}>
      {/* Body */}
      <rect x="90" y="160" width="180" height="160" rx="28" fill="#7C3AED" opacity=".12"/>
      <rect x="98" y="168" width="164" height="144" rx="22" fill="white" stroke="#7C3AED" strokeWidth="2.5"/>
      {/* Screen on body */}
      <rect x="118" y="192" width="124" height="80" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
      <circle cx="148" cy="232" r="14" fill="#3B82F6" opacity=".2"/>
      <circle cx="148" cy="232" r="8" fill="#3B82F6"/>
      <rect x="172" y="218" width="54" height="6" rx="3" fill="#7C3AED" opacity=".4"/>
      <rect x="172" y="230" width="40" height="6" rx="3" fill="#7C3AED" opacity=".3"/>
      <rect x="172" y="242" width="50" height="6" rx="3" fill="#7C3AED" opacity=".2"/>
      {/* Buttons */}
      <circle cx="138" cy="294" r="10" fill="#FEF08A" stroke="#D97706" strokeWidth="1.5"/>
      <circle cx="168" cy="294" r="10" fill="#D1FAE5" stroke="#059669" strokeWidth="1.5"/>
      <circle cx="198" cy="294" r="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5"/>
      {/* Head */}
      <rect x="110" y="76" width="140" height="100" rx="28" fill="white" stroke="#7C3AED" strokeWidth="2.5"/>
      <rect x="100" y="68" width="160" height="108" rx="28" fill="white" stroke="#7C3AED" strokeWidth="2.5"/>
      {/* Eyes */}
      <rect x="128" y="96" width="36" height="26" rx="8" fill="#7C3AED" opacity=".15"/>
      <rect x="196" y="96" width="36" height="26" rx="8" fill="#7C3AED" opacity=".15"/>
      <circle cx="146" cy="109" r="9" fill="#7C3AED"/>
      <circle cx="214" cy="109" r="9" fill="#7C3AED"/>
      <circle cx="149" cy="106" r="3" fill="white"/>
      <circle cx="217" cy="106" r="3" fill="white"/>
      {/* Mouth */}
      <path d="M150 142 Q180 158 210 142" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Antenna */}
      <line x1="180" y1="68" x2="180" y2="44" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="180" cy="36" r="10" fill="#FEF08A" stroke="#D97706" strokeWidth="2"/>
      {/* Arms */}
      <rect x="38" y="178" width="52" height="30" rx="15" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="42" cy="193" r="8" fill="#3B82F6" opacity=".2"/>
      <rect x="270" y="178" width="52" height="30" rx="15" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="318" cy="193" r="8" fill="#3B82F6" opacity=".2"/>
      {/* Legs */}
      <rect x="126" y="320" width="40" height="52" rx="14" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <rect x="194" y="320" width="40" height="52" rx="14" fill="white" stroke="#7C3AED" strokeWidth="2"/>
      <rect x="120" y="358" width="52" height="18" rx="9" fill="#7C3AED" opacity=".15"/>
      <rect x="188" y="358" width="52" height="18" rx="9" fill="#7C3AED" opacity=".15"/>
      {/* Gear decorations */}
      <circle cx="56" cy="248" r="18" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="304" cy="280" r="14" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3"/>
    </svg>
  );
}
