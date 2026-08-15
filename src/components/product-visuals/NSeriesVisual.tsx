function NSeriesVisual() {
  return (
    <svg
      className="product-engineering-visual"
      viewBox="0 0 420 210"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="diagram-orbit-line"
        d="M18 156 C120 70 285 65 405 120"
      />

      <g className="diagram-spacecraft">
        <rect x="42" y="94" width="34" height="25" />
        <rect x="14" y="99" width="27" height="15" />
        <rect x="77" y="99" width="27" height="15" />

        <line x1="41" y1="106" x2="14" y2="106" />
        <line x1="76" y1="106" x2="104" y2="106" />

        <circle cx="59" cy="106" r="3" />
      </g>

      <path
        className="diagram-tether-line"
        d="M76 106 C122 104 146 108 176 105"
      />

      <g className="diagram-net">
        <path d="M176 74 L266 62 L286 146 L176 137 Z" />
        <path d="M190 72 L205 139" />
        <path d="M210 69 L226 141" />
        <path d="M230 66 L247 143" />
        <path d="M250 64 L267 145" />

        <path d="M179 91 L270 82" />
        <path d="M179 108 L276 101" />
        <path d="M178 124 L281 120" />
      </g>

      <path
        className="diagram-target-shape"
        d="M218 91 L247 82 L264 105 L251 130 L220 124 L208 104 Z"
      />

      <g className="diagram-nodes">
        <circle cx="176" cy="74" r="3" />
        <circle cx="266" cy="62" r="3" />
        <circle cx="286" cy="146" r="3" />
        <circle cx="176" cy="137" r="3" />
      </g>

      <text x="14" y="138">
        N-SERIES
      </text>

      <text x="212" y="160">
        SOFT CAPTURE
      </text>
    </svg>
  )
}

export default NSeriesVisual