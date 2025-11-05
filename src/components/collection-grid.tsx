import Image from 'next/image';
import Link from 'next/link';
import type { Collection } from '#lib/types';

export default function CollectionGrid({ collections }: { collections: Collection[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 pb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Curated Capsules</span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Discover the aesthetic that moves you.</h2>
        <p className="max-w-2xl text-sm text-slate-600">
          From coastal minimalism to downtown nights, collect pieces crafted in limited runs with responsible materials and precise tailoring.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={collection.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold">{collection.name}</h3>
              <p className="mt-2 text-sm text-slate-100/90">{collection.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                View Capsule
                <span aria-hidden className="text-base">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
