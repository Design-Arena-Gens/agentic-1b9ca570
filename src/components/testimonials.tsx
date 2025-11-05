const testimonials = [
  {
    quote:
      'Every piece drapes like it was tailored for me. The styling session helped me build a capsule I reach for daily.',
    author: 'Maya Chen',
    role: 'Creative Director'
  },
  {
    quote: 'Their attention to fabric detail and fit consistency is unmatched. I feel polished without effort.',
    author: 'Daniel Ríos',
    role: 'Architect'
  },
  {
    quote: 'I love knowing each garment is responsibly produced. Luxury without compromising values.',
    author: 'Leila Morgan',
    role: 'Photographer'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 pb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Community Voices</span>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Designed for those who value intentional craftsmanship.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-lg backdrop-blur"
            >
              <p className="text-sm leading-relaxed text-white/90">“{testimonial.quote}”</p>
              <div className="mt-auto text-sm font-semibold text-brand-200">{testimonial.author}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-300/80">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
