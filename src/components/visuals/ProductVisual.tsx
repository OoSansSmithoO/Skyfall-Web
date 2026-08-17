import DigitalLabVisual from './DigitalLabVisual'
import IntegrationVisual from './IntegrationVisual'
import MissionCoreVisual from './MissionCoreVisual'
import NSeriesVisual from './NSeriesVisual'
import ProximityVisual from './ProximityVisual'
import VerificationVisual from './VerificationVisual'

type ProductVisualProps = {
  product: string
}

function ProductVisual({ product }: ProductVisualProps) {
  switch (product) {
    case 'N-Series':
      return <NSeriesVisual />

    case 'Skyfall Mission Core':
      return <MissionCoreVisual />

    case 'Proximity Operations Suite':
      return <ProximityVisual />

    case 'Capture Verification Module':
      return <VerificationVisual />

    case 'Skyfall Digital Mission Lab':
      return <DigitalLabVisual />

    case 'Mission Integration':
      return <IntegrationVisual />

    default:
      return null
  }
}

export default ProductVisual
