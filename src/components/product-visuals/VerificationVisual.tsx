function VerificationVisual() {
  return (
    <svg
      className="product-engineering-visual"
      viewBox="0 0 420 210"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        className="diagram-verification-ring"
        cx="210"
        cy="105"
        r="66"
      />

      <circle
        className="diagram-verification-ring inner"
        cx="210"
        cy="105"
        r="48"
      />

      <path
        className="diagram-target-shape"
        d="M187 84 L218 76 L239 98 L229 131 L196 137 L176 112 Z"
      />

      <g className="diagram-verification-points">
        <circle cx="210" cy="39" r="4" />
        <circle cx="276" cy="105" r="4" />
        <circle cx="210" cy="171" r="4" />
        <circle cx="144" cy="105" r="4" />
      </g>

      <g className="diagram-sensor-rays">
        <line x1="210" y1="43" x2="210" y2="76" />
        <line x1="272" y1="105" x2="240" y2="105" />
        <line x1="210" y1="167" x2="210" y2="138" />
        <line x1="148" y1="105" x2="176" y2="105" />
      </g>

      <text x="154" y="194">
        CAPTURE VERIFIED
      </text>
    </svg>
  )
}

export default VerificationVisual