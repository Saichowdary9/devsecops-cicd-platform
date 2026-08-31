import { useState } from 'react';
import { navLinks, personal } from '../data/portfolioData';
import useScrollSpy from '../hooks/useScrollSpy';
import { Icon } from './icons';

// Computed once at module load (navLinks is static), so useScrollSpy always
// receives the same array reference instead of a new one on every render.
const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-base/85 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-tight text-ink"
        >
          {personal.name}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-signal'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#contact" className="btn-secondary hidden md:inline-flex">
          Contact Me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-base px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-md px-2 py-3 text-base text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
