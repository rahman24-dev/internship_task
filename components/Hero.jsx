import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section id="top" className="border-b border-line px-6 pt-16 pb-10 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-9">
            <p className="fade-in-delayed text-sm text-muted" style={{ animationDelay: '0.5s' }}>
              Independent design studio
            </p>

            <h1 className="font-display mt-4 text-[13vw] leading-[0.95] font-light tracking-tight sm:text-6xl lg:text-7xl">
              <span className="line-clip">
                <span style={{ animationDelay: '0.05s' }}>Considered design</span>
              </span>
              <span className="line-clip">
                <span style={{ animationDelay: '0.18s' }}>for teams who</span>
              </span>
              <span className="line-clip">
                <span className="italic" style={{ animationDelay: '0.3s' }}>
                  sweat the details.
                </span>
              </span>
            </h1>

            <p
              className="fade-in-delayed mt-8 max-w-md text-lg text-ink/75"
              style={{ animationDelay: '0.75s' }}
            >
              We’re a small studio in Chennai working on brand identity, web design and
              product interfaces — usually for founders who notice when a line doesn’t sit
              right.
            </p>

            <div
              className="fade-in-delayed mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.9s' }}
            >
              <MagneticButton
                href="#work"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
              >
                See the work
              </MagneticButton>
              <a href="#contact" className="ink-link text-sm font-medium">
                Start a project
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
            <p
              className="fade-in-delayed max-w-56 text-right text-sm leading-relaxed text-muted"
              style={{ animationDelay: '1s' }}
            >
              Est. 2018.
              <br />
              Currently taking on two new projects for early 2027.
            </p>
          </div>
        </div>

        {/* Colophon strip — small, factual, replaces the generic stat-band */}
        <dl className="fade-in-delayed mt-16 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm sm:grid-cols-4" style={{ animationDelay: '1.1s' }}>
          <div>
            <dt className="text-muted">Founded</dt>
            <dd className="mt-1">2018, Chennai</dd>
          </div>
          <div>
            <dt className="text-muted">Studio size</dt>
            <dd className="mt-1">6 people</dd>
          </div>
          <div>
            <dt className="text-muted">Focus</dt>
            <dd className="mt-1">Brand, web, product</dd>
          </div>
          <div>
            <dt className="text-muted">Availability</dt>
            <dd className="mt-1">Booking Q1 2027</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
