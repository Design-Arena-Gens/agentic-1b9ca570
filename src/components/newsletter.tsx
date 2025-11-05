'use client';

import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('success');
    const form = event.currentTarget;
    form.reset();
  }

  return (
    <section className="border-t border-slate-200 bg-brand-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Edition Journal</span>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-900">Receive styling notes and early capsule previews.</h2>
          <p className="text-sm text-brand-700">
            Subscribe for curated stories, layering guides, and access to micro-drops designed with our atelier partners.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-full border border-brand-200 bg-white px-5 text-sm text-brand-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-brand-700 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
          >
            Join List
          </button>
          {status === 'success' && (
            <p className="text-xs font-medium text-brand-600 sm:ml-3">Welcome to the Edition Journal!</p>
          )}
        </form>
      </div>
    </section>
  );
}
