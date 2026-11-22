import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";

export default function Navbar() {
  const { t, toggle } = useLang();

  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3"
      >
        <a
          href="#top"
          className="font-semibold text-accent dark:text-accent-dark"
        >
          {t.hero.name.split(" ")[0]}
        </a>

        <ul className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="flex h-11 min-w-11 items-center justify-center rounded-full border border-slate-300 px-3 text-sm font-medium dark:border-slate-700"
          >
            {t.aria.lang}
          </button>
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? t.aria.toLight : t.aria.toDark}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-lg dark:border-slate-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
