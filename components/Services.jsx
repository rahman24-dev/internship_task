import { LayoutDashboard, Code, Palette, Search } from 'lucide-react';

const services = [
  {
    title: 'UI/UX design',
    desc: 'Research, wireframes, prototypes and design systems built around how people actually use your product.',
    icon: LayoutDashboard,
  },
  {
    title: 'Web development',
    desc: 'Fast, accessible websites and web apps, handed over with documentation your team can maintain.',
    icon: Code,
  },
  {
    title: 'Brand identity',
    desc: 'Logo, typography and colour, with a short set of guidelines that keeps everything consistent.',
    icon: Palette,
  },
  {
    title: 'SEO & growth',
    desc: 'Technical and content groundwork so the site you invested in is the one people find.',
    icon: Search,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-surface px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we do</h2>
          <p className="mt-3 text-muted">
            Four disciplines, usually combined on a single project rather than sold separately.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-line bg-page p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
