'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Read the theme the anti-flash script already set on <html>, once, on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('lumina-theme', next);
    } catch (e) {
      /* private browsing, ignore */
    }
    setTheme(next);
  };

  // Avoid rendering the wrong state before we know the real theme.
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle theme'}
      aria-pressed={isDark}
      className="relative flex h-8 w-15 shrink-0 items-center rounded-full border border-line-strong px-1 transition-colors cursor-pointer"
      style={{ width: '3.75rem' }}
    >
      <span
        className="absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{ transform: `translate(${isDark ? '1.85rem' : '0'}, -50%)` }}
      >
        {/* sun */}
        <svg
          viewBox="0 0 24 24"
          width="13"
          height="13"
          className={`absolute transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-100'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        {/* moon */}
        <svg
          viewBox="0 0 24 24"
          width="13"
          height="13"
          className={`absolute transition-opacity duration-200 ${isDark ? 'opacity-100' : 'opacity-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </span>
    </button>
  );
}
