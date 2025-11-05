import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '#lib/types';
import { StarIcon } from '@heroicons/react/20/solid';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-100/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow">
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute bottom-4 left-4 rounded bg-slate-900/80 px-2 py-1 text-xs font-medium text-white">
            Waitlist
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
          <span className="text-sm font-medium text-brand-700">${product.price}</span>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {product.colors.slice(0, 3).map((color) => (
            <span key={color} className="rounded-full border border-slate-200 px-2 py-1">
              {color}
            </span>
          ))}
          {product.colors.length > 3 && <span>+{product.colors.length - 3}</span>}
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
            <StarIcon className="h-4 w-4 text-amber-400" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-slate-300">•</span>
            <span>{product.reviews} reviews</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">View Details</span>
        </div>
      </div>
    </Link>
  );
}
