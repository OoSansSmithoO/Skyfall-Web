import DigitalLabVisual from './product-visuals/DigitalLabVisual'
import IntegrationVisual from './product-visuals/IntegrationVisual'
import MissionCoreVisual from './product-visuals/MissionCoreVisual'
import NSeriesVisual from './product-visuals/NSeriesVisual'
import ProximityVisual from './product-visuals/ProximityVisual'
import VerificationVisual from './product-visuals/VerificationVisual'

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