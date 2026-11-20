import { ArrowRight } from 'lucide-react';

const facts = [
  { label: 'Founded', value: '2018' },
  { label: 'Team', value: '6 people' },
  { label: 'Based in', value: 'Chennai, India' },
  { label: 'Focus', value: 'Brand, web, product' },
];

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Now booking projects for Q1 2027
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Design and development for products people enjoy using.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Logic Loop is a small studio that designs and builds websites, brand identities and
          product interfaces for startups and growing teams.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
          >
            Start a project
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            View our work
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="mt-1 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
