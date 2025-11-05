import CollectionGrid from '#components/collection-grid';
import CuratedCategories from '#components/curated-categories';
import FeatureHighlights from '#components/feature-highlights';
import Hero from '#components/hero';
import Newsletter from '#components/newsletter';
import ProductGrid from '#components/product-grid';
import Testimonials from '#components/testimonials';
import { featuredCollections } from '#data/products';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <ProductGrid />
      <CollectionGrid collections={featuredCollections} />
      <CuratedCategories />
      <Testimonials />
      <Newsletter />
    </>
  );
}
