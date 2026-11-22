import { useLang } from "../i18n.jsx";

const skills = [
  { key: "languages", items: ["HTML5", "CSS3", "JavaScript"] },
  { key: "frameworks", items: ["React", "Tailwind CSS", "Zustand"] },
  { key: "tools", items: ["Figma"] },
];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold">{a.heading}</h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          {/* TODO: add one or two personal sentences (interests, what you enjoy building) */}
        </div>

        <div className="space-y-5">
          {skills.map((s) => (
            <div key={s.key}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent dark:text-accent-dark">
                {a.groups[s.key]}
              </h3>
              <ul className="flex flex-wrap gap-2" dir="ltr">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-slate-300 px-3 py-1 text-sm dark:border-slate-700"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
