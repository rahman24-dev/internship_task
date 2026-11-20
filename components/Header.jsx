'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/90 backdrop-blur">
      <div className="px-6">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-bold text-on-accent"
            >
              L
            </span>
            Logic Loop
          </a>

          <nav aria-label="Main" className="hidden items-center gap-8 text-sm md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-fg">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover md:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-line text-muted md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-page px-6 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
