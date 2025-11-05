import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-brand-50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
            SS24 Capsule
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
            Sculpted silhouettes for every city sunset.
          </h1>
          <p className="text-base text-brand-700 sm:text-lg">
            Discover the new season collection featuring technical outerwear, fluid eveningwear, and modular layers crafted to transition from studio to skyline.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/collections/new-arrivals"
              className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="/lookbook"
              className="rounded-full border border-brand-300 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand-500 hover:text-brand-900"
            >
              Explore Lookbook
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-12 top-12 h-56 w-56 rounded-full bg-brand-200/50 blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-brand-100 blur-2xl" aria-hidden />
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80"
              alt="Model wearing modern clothing"
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
