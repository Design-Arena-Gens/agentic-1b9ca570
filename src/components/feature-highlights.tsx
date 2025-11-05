import { featureHighlights } from '#data/products';
import {
  ShieldCheckIcon,
  SparklesIcon,
  ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline';
import { Leaf as LeafIcon } from 'lucide-react';

const iconMap = {
  leaf: LeafIcon,
  'shield-check': ShieldCheckIcon,
  sparkles: SparklesIcon,
  renewal: ArrowPathRoundedSquareIcon
} as const;

export default function FeatureHighlights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {featureHighlights.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] ?? SparklesIcon;
            return (
              <div
                key={feature.id}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/60 bg-brand-50/40 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
