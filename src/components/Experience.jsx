import { useLang } from "../i18n.jsx";

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20"
    >
      <h2 className="mb-10 text-3xl font-bold">{e.heading}</h2>

      <div className="grid gap-10 md:grid-cols-2">
        <article>
          <h3 className="text-xl font-semibold">{e.role}</h3>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            {e.period} · {e.place}
          </p>
          <ul className="list-disc space-y-2 ps-5 text-slate-700 dark:text-slate-300">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>

        <div>
          <h3 className="mb-4 text-xl font-semibold">{e.eduHeading}</h3>
          <ul className="space-y-4">
            {e.education.map((item) => (
              <li key={item.title}>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
