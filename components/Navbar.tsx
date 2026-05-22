const links = [
  { label: "Tecnologías", href: "#technologies" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-800/40 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-sm font-medium text-neutral-300">
          Richard González
        </span>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
