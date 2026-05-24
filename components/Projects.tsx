const projects = [
  {
    name: "Aplicación para administración Inmobiliaria",
    description:
      "Aplicación móvil para gestión inmobiliaria. Administra propiedades, clientes y contratos desde el celular.",
    tech: ["React Native", "Node.js","TypeScript", "Firebase", "MySQL"],
  },
  {
    name: "Aplicativo para gestión de gastos",
    description:
      "Control de gastos personales con categorías, reportes visuales y sincronización en la nube.",
    tech: ["React Native", "Node.js", "MySQL", "Firebase"],
  },
  {
    name: "Sistemas Empresariales",
    description:
      "Sistemas de gestión para empresas con módulos de inventario, facturación y reportería avanzada.",
    tech: ["PHP", "SQL Server","MySQL"],
  },
  {
    name: "Landing Page",
    description:
      "Landing page moderna y responsiva desarrollada para presentar productos y servicios con un diseño atractivo y optimizado.",
    tech: ["Next.js","React","TypeScript","Tailwind CSS","HTML","CSS","JavaScript"],
  },
    {
  name: "Páginas Web",
  description:
    "Desarrollo de páginas web modernas, responsivas y optimizadas para brindar una experiencia profesional, rápida y atractiva en cualquier dispositivo.",
  tech: [
    "Next.js","React","TypeScript","Tailwind CSS","HTML","CSS","JavaScript"],
   },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight">Proyectos</h2>
          <div className="mt-3 h-px w-10 bg-neutral-700" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-600"
            >
              <h3 className="font-semibold text-neutral-100 transition-colors group-hover:text-white">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-neutral-700/60 bg-neutral-800/50 px-2 py-0.5 text-xs text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
