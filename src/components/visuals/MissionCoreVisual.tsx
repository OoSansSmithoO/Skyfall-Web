function MissionCoreVisual() {
  return (
    <svg
      className="product-engineering-visual"
      viewBox="0 0 420 210"
      aria-hidden="true"
      focusable="false"
    >
      <g className="diagram-core">
        <rect x="180" y="82" width="60" height="46" />
        <rect x="190" y="91" width="40" height="28" />
        <circle cx="210" cy="105" r="4" />
      </g>

      <g className="diagram-network-lines">
        <line x1="180" y1="105" x2="102" y2="58" />
        <line x1="240" y1="105" x2="320" y2="54" />
        <line x1="180" y1="105" x2="96" y2="155" />
        <line x1="240" y1="105" x2="320" y2="158" />
        <line x1="210" y1="128" x2="210" y2="180" />
      </g>

      <g className="diagram-small-sats">
        <rect x="84" y="48" width="28" height="18" />
        <rect x="306" y="45" width="28" height="18" />
        <rect x="82" y="147" width="28" height="18" />
        <rect x="306" y="149" width="28" height="18" />
      </g>

      <g className="diagram-ground">
        <line x1="210" y1="180" x2="210" y2="194" />
        <path d="M194 194 Q210 180 226 194" />
      </g>

      <text x="178" y="71">
        MISSION CORE
      </text>

      <text x="187" y="203">
        GROUND LINK
      </text>
    </svg>
  )
}

export default MissionCoreVisual