import ProductCard from '#components/product-card';
import { featuredCollections, products } from '#data/products';

const staticCollections = new Set([
  'new-arrivals',
  'dresses',
  'loungewear',
  'ready-to-wear',
  'accessories',
  'gifts',
  'coastal-spring',
  'night-out',
  'studio-minimal'
]);

export function generateStaticParams() {
  return Array.from(staticCollections).map((slug) => ({ slug }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const collection = featuredCollections.find((c) => c.href.endsWith(slug));

  const filtered = products.filter((product) => {
    if (slug === 'new-arrivals') return true;
    if (slug === 'dresses') return product.category === 'Dresses';
    if (slug === 'loungewear') return product.category === 'Loungewear';
    if (slug === 'ready-to-wear') return ['Dresses', 'Outerwear', 'Tops', 'Bottoms'].includes(product.category);
    if (slug === 'accessories') return false;
    if (slug === 'gifts') return product.price < 200;
    return product.tags.includes(slug.replace(/-/g, ' '));
  });

  const headline = collection?.name ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  const description =
    collection?.description ??
    'Our stylists curated this edit to help you build a modular wardrobe with intentional fabrics and sophisticated silhouettes.';

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 pb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Capsule Edit</span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{headline}</h1>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-slate-200/60 bg-brand-50/40 p-12 text-center">
            <p className="text-sm text-brand-700">
              This capsule is currently in production. Join the Edition Journal to receive early access to the next drop.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
