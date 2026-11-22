import { useLang } from "../i18n.jsx";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center gap-6 px-6"
    >
      <p className="text-sm font-medium text-accent dark:text-accent-dark">
        {t.hero.role}
      </p>
      <h1 className="text-4xl font-bold sm:text-6xl">{t.hero.name}</h1>
      <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
        {t.hero.tagline}
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-5 py-3 font-medium text-white hover:opacity-90 dark:bg-accent-dark dark:text-slate-900"
        >
          {t.hero.projects}
        </a>
        <a
          href="/resume.pdf"
          className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-accent dark:border-slate-700 dark:hover:border-accent-dark"
        >
          {t.hero.resume}
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-accent dark:border-slate-700 dark:hover:border-accent-dark"
        >
          {t.hero.contact}
        </a>
      </div>
    </section>
  );
}
