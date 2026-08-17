import { productItems } from '../../data/productData'
import ProductVisual from '../visuals/ProductVisual'

function ProductsSection() {
  return (
    <section
      className="products-section"
      id="products-catalog"
      aria-labelledby="products-heading"
    >
      <div className="section-label">
        <span>05</span>
        <p>PRODUCTS</p>
      </div>

      <div className="products-header">
        <div>
          <p className="eyebrow">
            SYSTEMS + SOFTWARE + ENGINEERING
          </p>

          <h2 id="products-heading">
            Technology built
            <span>
              {' '}
              to deploy.
            </span>
          </h2>
        </div>

        <div className="products-header-copy">
          <p>
            Skyfall products are structured as modular systems,
            software platforms, payload technologies, and engineering
            services that can be integrated independently or combined
            into larger missions.
          </p>

          <a
            className="button button-secondary"
            href="#contact"
          >
            Request Product Information
          </a>
        </div>
      </div>

      <div className="products-grid">
        {productItems.map((product) => (
          <article
            className="product-card"
            key={product.number}
          >
            <div className="product-card-top">
              <span>
                {product.number}
              </span>

              <div className="product-status">
                <span
                  className="product-status-dot"
                  aria-hidden="true"
                />

                {product.status}
              </div>
            </div>

            <div className="product-family">
              {product.family}
            </div>

            <div className="product-card-visual">
              <ProductVisual product={product.title} />
            </div>

            <div className="product-card-body">
              <h3>
                {product.title}
              </h3>

              <p>
                {product.description}
              </p>
            </div>

            <div className="product-tags">
              {product.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="product-card-footer">
              <span>
                {product.mode}
              </span>

              <span aria-hidden="true">
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductsSection
