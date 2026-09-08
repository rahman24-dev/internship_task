import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Northbank',
    category: 'Product design',
    year: '2025',
    result: 'Redesigned the trading dashboard used by 40,000 daily active traders.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Field & Form',
    category: 'E-commerce',
    year: '2024',
    result: 'A sneaker retailer’s online store, rebuilt around fast browsing on mobile.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Otherwise',
    category: 'Mobile app',
    year: '2024',
    result: 'A habit-tracking app for people managing chronic conditions.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Oasis',
    category: 'Brand identity',
    year: '2023',
    result: 'Full identity and packaging system for an independent skincare label.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="border-b border-line px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-light sm:text-5xl">Selected work</h2>
          <p className="max-w-xs text-sm text-muted">
            A handful of projects we can talk about publicly — more in our archive on request.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href="#contact"
              className={`group grid grid-cols-1 items-center gap-6 border-t border-line py-10 last:border-b sm:grid-cols-12 sm:gap-8 ${
                idx % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-sm sm:col-span-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="sm:col-span-7">
                <div className="flex items-baseline justify-between gap-4 text-sm text-muted">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display ink-link mt-2 inline-block text-3xl font-light sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-md text-ink/70">{project.result}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
