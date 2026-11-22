import { useLang } from "../i18n.jsx";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="mb-4 text-3xl font-bold">{c.heading}</h2>
      <p className="mb-8 max-w-xl text-slate-700 dark:text-slate-300">
        {c.text}
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:mahdiyehhaj497@gmail.com"
          dir="ltr"
          className="rounded-lg bg-accent px-5 py-3 font-medium text-white hover:opacity-90 dark:bg-accent-dark dark:text-slate-900"
        >
          mahdiyehhaj497@gmail.com
        </a>
        <a
          href="https://github.com/mahdiyehhaj497-oss"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:border-accent dark:border-slate-700 dark:hover:border-accent-dark"
        >
          {c.github}
        </a>
      </div>
    </section>
  );
}
