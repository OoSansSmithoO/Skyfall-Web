import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from 'react'

type PreloaderGateProps = {
  onComplete: () => void
}

type GatePhase =
  | 'booting'
  | 'authorized'
  | 'opening'
  | 'receding'

const terminalLines = [
  'POWER BUS ............. WAKE',
  'FILAMENT ARRAY ........ HEATING',
  'GUIDANCE CORE ......... NOMINAL',
  'ORBITAL NETWORK ....... LINKED',
  'ACCESS CHANNEL ........ SECURE',
]

const enteringText =
  'ENTERING SKYFALL'

function PreloaderGate({
  onComplete,
}: PreloaderGateProps) {
  const [phase, setPhase] =
    useState<GatePhase>('booting')

  const [hidden, setHidden] =
    useState(false)

  const enteringLetters =
    useMemo(
      () => enteringText.split(''),
      [],
    )

  useEffect(() => {
    /*
      PHASE 01
      Cold-start archival hardware.
    */

    const authorizedTimer =
      window.setTimeout(() => {
        setPhase('authorized')
      }, 2500)

    /*
      PHASE 02
      Legacy instrumentation has transferred
      power into the mechanical door bus.
    */

    const openingTimer =
      window.setTimeout(() => {
        setPhase('opening')
      }, 3350)

    /*
      PHASE 03
      Visitor is crossing the old antechamber.
      Legacy systems begin shutting down behind them.
    */

    const recedingTimer =
      window.setTimeout(() => {
        setPhase('receding')
      }, 4750)

    /*
      PHASE 04
      Threshold is clear.

      Only now release modern Skyfall animations.
    */

    const completeTimer =
      window.setTimeout(() => {
        setHidden(true)

        onComplete()
      }, 6200)

    return () => {
      window.clearTimeout(
        authorizedTimer,
      )

      window.clearTimeout(
        openingTimer,
      )

      window.clearTimeout(
        recedingTimer,
      )

      window.clearTimeout(
        completeTimer,
      )
    }
  }, [onComplete])

  if (hidden) {
    return null
  }

  const gateClasses = [
    'preloader-gate',

    phase === 'authorized'
      ? 'is-authorized'
      : '',

    phase === 'opening' ||
    phase === 'receding'
      ? 'is-open'
      : '',

    phase === 'receding'
      ? 'is-receding'
      : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={gateClasses}
      aria-hidden="true"
    >
      {/* ====================================================
          PRISTINE SKYFALL ENVIRONMENT
          ==================================================== */}

      <div className="gate-backlight" />

      {/* ====================================================
          OLD FACILITY ANTECHAMBER
          ==================================================== */}

      <div
        className="gate-antechamber"
        aria-hidden="true"
      >
        <div className="gate-antechamber-depth">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="gate-antechamber-floor" />

        <div className="gate-antechamber-light" />
      </div>

      <div className="gate-frame">
        {/* ====================================================
            CRT / PHOSPHOR FIELD
            ==================================================== */}

        <div className="gate-crt-noise" />

        <div className="gate-crt-vignette" />

        <div className="gate-cold-start" />

        {/* ====================================================
            FACILITY IDENTIFICATION
            ==================================================== */}

        <div className="gate-header">
          SKYFALL SYSTEMS
        </div>

        {/* ====================================================
            TERMINAL POST
            ==================================================== */}

        <div className="gate-terminal">
          {terminalLines.map(
            (line, index) => (
              <span
                key={line}
                style={
                  {
                    '--terminal-line':
                      index,
                  } as CSSProperties
                }
              >
                {line}
              </span>
            ),
          )}
        </div>

        {/* ====================================================
            AUTHORIZATION
            ==================================================== */}

        <div className="gate-status">
          <strong>
            AUTHORIZING ACCESS
          </strong>

          <span>
            INITIALIZING SECURE FACILITY
          </span>
        </div>

        {/* ====================================================
            MECHANICAL DOORS
            ==================================================== */}

        <div className="gate-door gate-door-left">
          <div className="gate-panel-detail" />
        </div>

        <div className="gate-door gate-door-right">
          <div className="gate-panel-detail" />
        </div>

        {/* ====================================================
            SKYFALL LOGO
            SINGLE → SPLIT
            ==================================================== */}

        <div className="gate-logo">
          <div className="gate-logo-whole">
            <img
              src={`${import.meta.env.BASE_URL}brand/manifestation.png`}
              alt="Skyfall"
            />
          </div>

          <div
            className="gate-logo-split"
            aria-hidden="true"
          >
            <div className="gate-logo-half gate-logo-left">
              <img
                src={`${import.meta.env.BASE_URL}brand/manifestation.png`}
                alt="Skyfall"
              />
            </div>
            <div className="gate-logo-half gate-logo-right">
              <img
                src={`${import.meta.env.BASE_URL}brand/manifestation.png`}
                alt="Skyfall"
              />
            </div>
          </div>
        </div>

        {/* ====================================================
            CENTRAL LOCK
            ==================================================== */}

        <div className="gate-lock">
          <div className="gate-lock-ring gate-lock-ring-a" />

          <div className="gate-lock-ring gate-lock-ring-b" />

          <div className="gate-lock-core">
            <div className="gate-lock-center" />
          </div>
        </div>

        {/* ====================================================
            POWER / AUTHORIZATION RAIL
            ==================================================== */}

        <div className="gate-progress">
          <span />
        </div>

        {/* ====================================================
            LEGACY VACUUM TUBES
            ==================================================== */}

        <div className="gate-tube gate-tube-left">
          <span />
        </div>

        <div className="gate-tube gate-tube-right">
          <span />
        </div>

        {/* ====================================================
            FACILITY DEPTH
            ==================================================== */}

        <div className="gate-depth-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* ====================================================
            FINAL ENTRY STATUS
            ==================================================== */}

        <div className="gate-entry-status">
          <span className="gate-access-granted">
            ACCESS GRANTED
          </span>

          <strong className="gate-entering">
            {enteringLetters.map(
              (letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  style={
                    {
                      '--letter':
                        index,
                    } as CSSProperties
                  }
                >
                  {letter === ' '
                    ? '\u00A0'
                    : letter}
                </span>
              ),
            )}
          </strong>
        </div>

        {/* ====================================================
            PIECEWISE LEGACY HARDWARE DISSOLVE
            ==================================================== */}

        <div className="gate-dissolve">
          {Array.from({
            length: 12,
          }).map(
            (_, index) => (
              <span
                key={index}
                style={
                  {
                    '--gate-cell':
                      index,
                  } as CSSProperties
                }
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default PreloaderGate
