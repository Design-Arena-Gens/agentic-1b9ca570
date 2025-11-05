import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '#data/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found — Atelier Aura'
    };
  }

  return {
    title: `${product.name} — Atelier Aura`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Atelier Aura`,
      description: product.description,
      images: product.gallery.map((image) => ({ url: image }))
    }
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const siblings = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[product.image, ...product.gallery].map((image, index) => (
                <div key={image + index} className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200/60">
                  <Image
                    src={image}
                    alt={`${product.name} look ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-500">{product.category}</p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{product.name}</h1>
              <p className="text-lg text-brand-700">${product.price}</p>
              <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-brand-600">{product.rating.toFixed(1)}</span>
                  <span>({product.reviews} reviews)</span>
                </div>
                <span aria-hidden>•</span>
                <span>{product.inStock ? 'In stock — ships in 1-2 days' : 'Made to order — ships in 3 weeks'}</span>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Colorway</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="rounded-full border border-brand-200 px-4 py-2 text-xs font-medium text-brand-700 transition hover:border-brand-500 hover:text-brand-900"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Size</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-16 rounded-full border border-brand-200 py-2 text-xs font-semibold text-brand-700 transition hover:border-brand-500 hover:text-brand-900"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Complimentary tailoring adjustments available within 30 days of delivery.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800">
                Add to Cart
              </button>
              <button className="w-full rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-500 hover:text-brand-900">
                Save to Wishlist
              </button>
            </div>
            <div className="rounded-3xl bg-brand-50/60 p-6 text-sm text-brand-700">
              <p className="font-semibold text-brand-800">Fabric & Care</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>70% responsibly sourced silk, 30% OEKO-TEX certified viscose lining.</li>
                <li>Dry clean only. Steam to refresh between wears.</li>
                <li>Crafted in small batches at our Florence atelier.</li>
              </ul>
            </div>
          </div>
        </div>
        {siblings.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">More from this capsule</h2>
              <Link href={`/collections/${product.category.toLowerCase()}`} className="text-sm font-semibold text-brand-600">
                View collection →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {siblings.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/60"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 100vw"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-600">${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
