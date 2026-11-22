import { useLang } from "../i18n.jsx";

function Block({ title, children }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent dark:text-accent-dark">
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20"
    >
      <h2 className="mb-10 text-3xl font-bold">{p.heading}</h2>

      <article className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800 sm:p-8">
        <header className="mb-6">
          <h3 className="text-2xl font-bold" dir="ltr">
            {p.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300">{p.subtitle}</p>
        </header>

        {/* TODO: replace with a clean screenshot (shop page) after getting the client's OK */}
        <div
          role="img"
          aria-label={p.shotAlt}
          className="mb-8 flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400"
        >
          {p.shot}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Block title={p.blocks.context}>
            <p className="text-slate-700 dark:text-slate-300">{p.context}</p>
          </Block>
          <Block title={p.blocks.role}>
            <p className="text-slate-700 dark:text-slate-300">{p.role}</p>
          </Block>
          <Block title={p.blocks.built}>
            <ul className="list-disc space-y-1 ps-5 text-slate-700 dark:text-slate-300">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Block>
          <Block title={p.blocks.decisions}>
            <ul className="list-disc space-y-2 ps-5 text-slate-700 dark:text-slate-300">
              {p.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Block>
          <Block title={p.blocks.result}>
            <p className="text-slate-700 dark:text-slate-300">{p.resultText}</p>
          </Block>
          <Block title={p.blocks.stack}>
            <p className="text-slate-700 dark:text-slate-300" dir="ltr">
              {p.stack.join(" · ")}
            </p>
          </Block>
        </div>

        <footer className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-5 py-3 font-medium text-white hover:opacity-90 dark:bg-accent-dark dark:text-slate-900"
          >
            {p.live}
          </a>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {p.code}
          </span>
        </footer>
      </article>
    </section>
  );
}
