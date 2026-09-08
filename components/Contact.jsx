'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const projectTypes = ['a new website', 'a brand identity', 'a product interface', 'something else'];

export default function Contact() {
  const [status, setStatus] = useState('idle'); 
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: projectTypes[0],
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // In production this posts to your form handler / API route.
    setTimeout(() => setStatus('sent'), 700);
  };

  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Left: direct info */}
        <div className="lg:col-span-4">
          <h2 className="font-display text-4xl font-light sm:text-5xl">Let’s talk.</h2>
          <p className="mt-4 max-w-xs text-ink/70">
            Tell us a bit about the project below, or reach out directly — we read
            everything ourselves.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href="mailto:studio@lumina.design" className="ink-link inline-flex items-center gap-1.5">
              studio@lumina.design
              <ArrowUpRight size={14} className="text-muted" />
            </a>
            <div className="flex gap-5 pt-2 text-muted">
              <a href="https://instagram.com" className="ink-link hover:text-ink">
                Instagram
              </a>
              <a href="https://linkedin.com" className="ink-link hover:text-ink">
                LinkedIn
              </a>
            </div>
          </div>

          <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
            Chennai, India
            <br />
            Currently booking for Q1 2027.
          </p>
        </div>

        {/* Right: sentence-style form */}
        <div className="lg:col-span-8">
          {status === 'sent' ? (
            <div className="flex min-h-64 flex-col justify-center border-t border-line pt-10">
              <h3 className="font-display text-3xl font-light">Got it, thank you.</h3>
              <p className="mt-3 max-w-sm text-ink/70">
                We reply to every message within two working days. Keep an eye on{' '}
                {form.email || 'your inbox'}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setForm({ name: '', email: '', type: projectTypes[0], message: '' });
                }}
                className="ink-link mt-6 w-fit text-sm font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-t border-line pt-10">
              <div className="font-display flex flex-wrap items-baseline gap-x-2 gap-y-4 text-2xl leading-relaxed font-light sm:text-3xl">
                <span>Hi, I’m</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="your name"
                  className="min-w-0 flex-1 basis-40 border-b border-line-strong bg-transparent placeholder-ink/30 outline-none focus:border-ink"
                />
                <span>. You can reach me at</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 basis-56 border-b border-line-strong bg-transparent placeholder-ink/30 outline-none focus:border-ink"
                />
                <span>. I’m thinking about</span>
                <select
                  value={form.type}
                  onChange={update('type')}
                  className="border-b border-line-strong bg-transparent outline-none focus:border-ink"
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-paper text-ink">
                      {t}
                    </option>
                  ))}
                </select>
                <span>.</span>
              </div>

              <label className="mt-10 block text-sm text-muted" htmlFor="message">
                Anything else that would help us prepare?
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Budget, timeline, links to things you like — whatever's useful."
                className="mt-2 w-full resize-none border-b border-line-strong bg-transparent py-2 text-ink placeholder-ink/30 outline-none focus:border-ink"
              />

              <MagneticButton
                as="button"
                type="submit"
                disabled={status === 'sending'}
                className="mt-8 rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send this'}
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
