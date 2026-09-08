import { Layout, Smartphone, Palette, TrendingUp } from 'lucide-react';

const serviceList = [
  {
    title: 'UI/UX design',
    desc: 'Wireframes, prototypes and interface systems built around how people actually use the product, not just how it looks in a deck.',
    icon: Layout,
  },
  {
    title: 'Web development',
    desc: 'Fast, accessible websites and web apps, handed over with documentation your team can actually maintain.',
    icon: Smartphone,
  },
  {
    title: 'Brand identity',
    desc: 'Logo, typography and a small set of rules — enough for a brand to feel consistent without a 60-page guideline nobody opens.',
    icon: Palette,
  },
  {
    title: 'Growth & SEO',
    desc: 'Technical and content groundwork so the site you paid for is the one people actually find.',
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-lg">
          <h2 className="font-display text-4xl font-light sm:text-5xl">What we do</h2>
          <p className="mt-4 text-ink/70">
            Four disciplines, applied together on most projects rather than sold as
            separate packages.
          </p>
        </div>

        <div className="flex flex-col border-t border-line">
          {serviceList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group grid grid-cols-1 gap-4 border-b border-line py-8 sm:grid-cols-12 sm:items-start sm:gap-8"
              >
                <div className="flex items-center gap-4 sm:col-span-4">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-muted transition-colors group-hover:text-ink"
                  />
                  <h3 className="font-display text-2xl font-light">{item.title}</h3>
                </div>
                <p className="text-ink/70 sm:col-span-6">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
