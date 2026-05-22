const technologies = [
  { name: "React Native", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-neutral-100" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "MySQL", color: "bg-orange-500" },
  { name: "SQL Server", color: "bg-red-500" },
  { name: "Firebase", color: "bg-amber-400" },
  { name: "PHP", color: "bg-amber-400" },
  { name: "ETL & Data Warehouse", color: "bg-amber-400" },

];

export default function Technologies() {
  return (
    <section id="technologies" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight">Tecnologías</h2>
          <div className="mt-3 h-px w-10 bg-neutral-700" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all duration-200 hover:border-neutral-600"
            >
              <span
                className={`h-2 w-2 flex-shrink-0 rounded-full ${tech.color}`}
              />
              <span className="text-sm font-medium text-neutral-300 transition-colors group-hover:text-neutral-100">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
