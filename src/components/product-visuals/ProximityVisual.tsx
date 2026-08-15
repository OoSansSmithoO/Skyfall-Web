function ProximityVisual() {
  return (
    <svg
      className="product-engineering-visual"
      viewBox="0 0 420 210"
      aria-hidden="true"
      focusable="false"
    >
      <g className="diagram-chaser">
        <rect x="38" y="94" width="34" height="24" />
        <rect x="16" y="100" width="20" height="12" />
        <rect x="74" y="100" width="20" height="12" />
      </g>

      <path
        className="diagram-guidance-line"
        d="M94 106 C145 96 208 98 286 106"
      />

      <g className="diagram-range-gates">
        <ellipse cx="134" cy="106" rx="12" ry="38" />
        <ellipse cx="180" cy="106" rx="15" ry="45" />
        <ellipse cx="228" cy="106" rx="18" ry="52" />
      </g>

      <g className="diagram-target-sat">
        <rect x="300" y="90" width="40" height="30" />
        <rect x="274" y="96" width="24" height="18" />
        <rect x="342" y="96" width="24" height="18" />
      </g>

      <circle
        className="diagram-lock-point"
        cx="320"
        cy="105"
        r="5"
      />

      <text x="28" y="140">
        CHASER
      </text>

      <text x="120" y="176">
        RELATIVE NAVIGATION CORRIDOR
      </text>

      <text x="298" y="140">
        TARGET
      </text>
    </svg>
  )
}

export default ProximityVisual