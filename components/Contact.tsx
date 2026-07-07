const contactLinks = [
  {
    label: "Email",
    value: "richard01gonzalez@outlook.com",
    href: "mailto:richard01gonzalez@outlook.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/richard-gonzález-5b4070244",
    href: "https://linkedin.com/in/richard-gonz%C3%A1lez-5b4070244",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/richardglez",
    href: "https://github.com/richardglez-dev",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight">Contacto</h2>
          <div className="mt-3 h-px w-10 bg-neutral-700" />
        </div>

        <p className="mb-8 max-w-md text-neutral-500">
          ¿Tienes un proyecto en mente? Me interesa escucharte. Contáctame por
          cualquiera de estos medios.
        </p>

        <div className="space-y-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all duration-200 hover:border-neutral-600"
            >
              <span className="w-20 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-neutral-600 transition-colors group-hover:text-neutral-500">
                {link.label}
              </span>
              <span className="text-sm text-neutral-300 transition-colors group-hover:text-neutral-100">
                {link.value}
              </span>
              <span className="ml-auto text-neutral-600 transition-colors group-hover:text-neutral-400">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
