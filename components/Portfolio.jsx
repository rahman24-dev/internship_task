import Image from 'next/image';

const projects = [
  {
    title: 'Northbank',
    category: 'Product design',
    year: '2025',
    description: 'Redesigned the trading dashboard used by 40,000 daily active traders.',
    alt: 'Analytics dashboard on a laptop screen',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Field & Form',
    category: 'E-commerce',
    year: '2024',
    description: 'An online sneaker store rebuilt around fast, simple browsing on mobile.',
    alt: 'Laptop showing a website analytics view',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Otherwise',
    category: 'Mobile app',
    year: '2024',
    description: 'A habit-tracking app for people managing chronic conditions.',
    alt: 'Health and wellness items on a desk',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Oasis',
    category: 'Brand identity',
    year: '2023',
    description: 'Full identity and packaging system for an independent skincare label.',
    alt: 'Skincare product bottles',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="border-t border-line px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-muted">
            A few recent projects we can talk about publicly. More available on request.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border border-line bg-surface transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-3/2 bg-line">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                    {p.category}
                  </span>
                  <span className="text-muted">{p.year}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
