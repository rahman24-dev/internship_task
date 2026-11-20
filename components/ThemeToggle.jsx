'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('logic-loop-theme', next);
    } catch {
    }
    setTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
