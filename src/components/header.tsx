'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navigation = [
  { name: 'New Arrivals', href: '/collections/new-arrivals' },
  { name: 'Dresses', href: '/collections/dresses' },
  { name: 'Loungewear', href: '/collections/loungewear' },
  { name: 'Edition Journal', href: '/journal' }
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-xl font-semibold tracking-tight text-brand-700">
                  Atelier Aura
                </Link>
                <nav className="hidden md:flex md:items-center md:gap-6">
                  {navigation.map((item) => {
                    const active = pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          'text-sm font-medium transition hover:text-brand-600',
                          active ? 'text-brand-600' : 'text-slate-600'
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-brand-500 hover:text-brand-600 md:inline-flex">
                  Book Styling
                </button>
                <button className="hidden text-slate-600 hover:text-brand-600 md:inline-flex">Sign in</button>
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-brand-600 md:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-y-90 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="border-t border-slate-200/60 bg-white md:hidden">
                <div className="space-y-1 px-4 py-6">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-600"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <Disclosure.Button
                    as={Link}
                    href="/appointments"
                    className="mt-2 block rounded-md border border-brand-500 px-3 py-2 text-center text-sm font-medium text-brand-600"
                  >
                    Book Styling
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
}
