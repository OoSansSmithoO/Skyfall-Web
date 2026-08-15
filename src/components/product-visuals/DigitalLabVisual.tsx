function DigitalLabVisual() {
  return (
    <svg
      className="product-engineering-visual"
      viewBox="0 0 420 210"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="diagram-earth-limb"
        d="M-10 180 Q200 95 430 180"
      />

      <path
        className="diagram-sim-trajectory"
        d="M58 150 C115 70 214 55 334 92"
      />

      <g className="diagram-sim-sat">
        <rect x="184" y="71" width="32" height="22" />
        <rect x="164" y="76" width="18" height="12" />
        <rect x="218" y="76" width="18" height="12" />
      </g>

      <g className="diagram-data-layers">
        <line x1="58" y1="38" x2="150" y2="38" />
        <line x1="58" y1="48" x2="126" y2="48" />
        <line x1="58" y1="58" x2="138" y2="58" />

        <line x1="286" y1="126" x2="360" y2="126" />
        <line x1="286" y1="136" x2="344" y2="136" />
        <line x1="286" y1="146" x2="368" y2="146" />
      </g>

      <text x="54" y="28">
        MODEL STATE
      </text>

      <text x="283" y="116">
        TELEMETRY
      </text>

      <text x="159" y="200">
        DIGITAL MISSION ENVIRONMENT
      </text>
    </svg>
  )
}

export default DigitalLabVisual