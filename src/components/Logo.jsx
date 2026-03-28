import React from 'react';

export default function Logo({ className = "h-14 w-auto" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 380 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="primaryRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="40%" stopColor="#e10600" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>
        
        <linearGradient id="darkRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ea2323" />
          <stop offset="100%" stopColor="#7a0000" />
        </linearGradient>

        <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.9" />
        </filter>
      </defs>

      <g filter="url(#drop-shadow)">
        {/* Car Outline Graphic */}
        {/* Top/Front Hood line */}
        <path
          d="M 25,60 C 40,25 90,20 140,25"
          stroke="url(#primaryRed)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Top Sweeping Roof */}
        <path
          d="M 40,43 C 65,22 100,20 135,22"
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Rear sweeping line */}
        <path
          d="M 20,65 C 10,90 20,120 35,140"
          stroke="url(#primaryRed)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Side panels */}
        <path
          d="M 25,75 C 60,65 100,75 125,100"
          stroke="url(#darkRed)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 35,95 C 65,95 90,105 110,120"
          stroke="url(#darkRed)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Lower bumper accent */}
        <path
          d="M 50,115 C 70,110 90,115 100,125"
          stroke="url(#primaryRed)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Text Area */}
        {/* "Auto" */}
        <text
          x="150"
          y="65"
          fontFamily="'Inter', 'Outfit', sans-serif"
          fontWeight="900"
          fontSize="52"
          fill="url(#primaryRed)"
          letterSpacing="-1"
          style={{ fontStyle: 'italic' }}
        >
          Auto
        </text>
        
        {/* "Herb" */}
        <text
          x="140"
          y="115"
          fontFamily="'Inter', 'Outfit', sans-serif"
          fontWeight="900"
          fontSize="56"
          fill="url(#primaryRed)"
          letterSpacing="-1"
          style={{ fontStyle: 'italic' }}
        >
          Herb
        </text>

        {/* Highlight edges for text for the 3D pop */}
        <text x="151" y="64" fontFamily="sans-serif" fontWeight="900" fontSize="52" fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.4" style={{ fontStyle: 'italic', letterSpacing: '-1' }}>Auto</text>
        <text x="141" y="114" fontFamily="sans-serif" fontWeight="900" fontSize="56" fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.4" style={{ fontStyle: 'italic', letterSpacing: '-1' }}>Herb</text>

        {/* Subtitle */}
        <text
          x="80"
          y="145"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="13"
          fill="#ff3b30"
          letterSpacing="0.8"
        >
          Car Detailing &amp; Accessories Studio
        </text>
      </g>
    </svg>
  );
}
