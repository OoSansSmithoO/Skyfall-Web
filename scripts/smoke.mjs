import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')
const failures = []

const expect = (condition, message) => {
  if (!condition) failures.push(message)
}

const read = (path) => readFileSync(path, 'utf8')
const htmlPath = join(dist, 'index.html')

expect(existsSync(htmlPath), 'dist/index.html is missing; run the production build first')

if (existsSync(htmlPath)) {
  const html = read(htmlPath)
  expect(html.startsWith('<!doctype html>'), 'built HTML does not start with a doctype')
  expect(html.includes('<div id="root"></div>'), 'React root element is missing')
  expect(html.includes('/Skyfall-Web/assets/'), 'built bundles do not use the configured Vite base path')
  expect(html.includes('Skyfall | Autonomous Spacecraft'), 'critical page title is missing')

  const bundlePaths = [...html.matchAll(/(?:src|href)="(\/Skyfall-Web\/assets\/[^"]+)"/g)]
    .map((match) => match[1].replace('/Skyfall-Web/', ''))

  expect(bundlePaths.length >= 2, 'built JavaScript and CSS bundle references were not found')
  for (const relativePath of bundlePaths) {
    expect(existsSync(join(dist, relativePath)), `built bundle is missing: ${relativePath}`)
  }
}

const criticalAssets = [
  'brand/manifestation.png',
  'brand/social.jpg',
  'industries/01-commercial-space.png',
  'industries/02-defense-national-security.png',
  'industries/03-civil-space.png',
  'industries/04-satellite-operators.png',
  'industries/05-spacecraft-manufacturers.png',
  'industries/06-launch-mission-providers.png',
  'industries/07-research-universities.png',
  'industries/08-orbital-servicing-logistics.png',
  'industries/09-space-sustainability.png',
  'industries/10-space-domain-awareness-on-orbit-inspection.png',
]

for (const asset of criticalAssets) {
  expect(existsSync(join(dist, asset)), `critical built asset is missing: ${asset}`)
}

if (failures.length) {
  console.error('Smoke checks failed:')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exitCode = 1
} else {
  console.log(`Smoke checks passed: built page, bundles, and ${criticalAssets.length} critical assets verified.`)
}
