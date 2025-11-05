import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-white px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">We could not find that page.</h1>
      <p className="max-w-md text-sm text-slate-600">
        The capsule you are looking for may have moved or sold out. Explore our latest releases or connect with our styling team for assistance.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
      >
        Return Home
      </Link>
    </div>
  );
}
