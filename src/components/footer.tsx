import Link from 'next/link';

const footerNav = [
  {
    title: 'Shop',
    items: [
      { label: 'New Arrivals', href: '/collections/new-arrivals' },
      { label: 'Ready to Wear', href: '/collections/ready-to-wear' },
      { label: 'Accessories', href: '/collections/accessories' },
      { label: 'Gifts', href: '/collections/gifts' }
    ]
  },
  {
    title: 'Studio',
    items: [
      { label: 'Our Story', href: '/about' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' }
    ]
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Size Guide', href: '/size-guide' }
    ]
  }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semibold tracking-tight text-brand-700">
              Atelier Aura
            </Link>
            <p className="text-sm text-slate-500">
              Elevated essentials designed with mindful materials and modular styling in mind. Crafted in limited-production ateliers across Europe and Japan.
            </p>
            <div className="flex gap-4 text-sm text-brand-600">
              <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </Link>
              <Link href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                Pinterest
              </Link>
              <Link href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                TikTok
              </Link>
            </div>
          </div>
          {footerNav.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{column.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-brand-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Atelier Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
