export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Logic Loop Studio. All rights reserved.</p>
        <a href="#top" className="hover:text-fg">
          Back to top
        </a>
      </div>
    </footer>
  );
}
