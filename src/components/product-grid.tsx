import ProductCard from '#components/product-card';
import { products } from '#data/products';

export default function ProductGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 pb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Featured Edit</span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Wardrobe statements with staying power.</h2>
        <p className="max-w-2xl text-sm text-slate-600">
          Elevated essentials curated by our design team to pair across capsules. Each piece cut in responsibly sourced fabrics with refined detailing.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
