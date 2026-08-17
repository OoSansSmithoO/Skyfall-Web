function IntegrationVisual() {
  return (
    <svg
      className="product-engineering-visual"
      viewBox="0 0 420 210"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className="diagram-integration-bus"
        x="165"
        y="78"
        width="90"
        height="54"
      />

      <rect
        x="181"
        y="89"
        width="58"
        height="32"
      />

      <g className="diagram-integration-links">
        <line x1="210" y1="78" x2="210" y2="35" />
        <line x1="165" y1="105" x2="94" y2="105" />
        <line x1="255" y1="105" x2="326" y2="105" />
        <line x1="210" y1="132" x2="210" y2="174" />
      </g>

      <g className="diagram-integration-modules">
        <rect x="186" y="18" width="48" height="18" />
        <rect x="48" y="94" width="46" height="22" />
        <rect x="326" y="94" width="46" height="22" />
        <rect x="186" y="174" width="48" height="18" />
      </g>

      <text x="186" y="13">
        PAYLOAD
      </text>

      <text x="45" y="86">
        POWER
      </text>

      <text x="326" y="86">
        COMMS
      </text>

      <text x="182" y="205">
        AVIONICS
      </text>

      <text x="177" y="107">
        SPACECRAFT BUS
      </text>
    </svg>
  )
}

export default IntegrationVisual