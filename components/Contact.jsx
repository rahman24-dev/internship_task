'use client';

import { useState } from 'react';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

const projectTypes = ['Website', 'Brand identity', 'Product / app interface', 'Something else'];

const initialForm = { name: '', email: '', type: projectTypes[0], message: '' };

const fieldClass =
  'mt-1.5 w-full rounded-md border border-line bg-page px-3 py-2.5 text-sm text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); 

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 700);
  };

  const reset = () => {
    setForm(initialForm);
    setStatus('idle');
  };

  return (
    <section id="contact" className="border-t border-line bg-surface px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s talk</h2>
          <p className="mt-3 text-muted">
            Tell us about your project and we’ll get back to you within two working days.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a href="mailto:hello@logicloop.design" className="hover:underline">
                hello@logicloop.design
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" />
              <span>Chennai, India</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-page p-6 sm:p-8 lg:col-span-3">
          {status === 'sent' ? (
            <div role="status" className="flex min-h-72 flex-col items-center justify-center text-center">
              <CheckCircle2 size={40} className="text-accent" />
              <h3 className="mt-4 text-xl font-semibold">Message sent</h3>
              <p className="mt-2 max-w-sm text-muted">
                Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''}. We’ll reply to {form.email} soon.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 cursor-pointer text-sm font-medium text-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Abdur Rahman"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="rahman@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="text-sm font-medium">
                  What do you need?
                </label>
                <select id="type" value={form.type} onChange={update('type')} className={fieldClass}>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Goals, timeline, budget, links to references…"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full cursor-pointer rounded-md bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
