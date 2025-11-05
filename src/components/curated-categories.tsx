import Image from 'next/image';
import { curatedCategories } from '#data/products';

export default function CuratedCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {curatedCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-brand-50/30 shadow-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <p className="mt-3 text-sm text-slate-100/90">{category.description}</p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100/80">
                  Explore Styles
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
