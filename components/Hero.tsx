const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
    <div className="flex h-9 w-5 justify-center rounded-full border border-neutral-700 p-1.5">
      <div className="h-1.5 w-1 animate-bounce rounded-full bg-neutral-500" />
    </div>
  </div>
);

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(59,130,246,0.07) 0%, transparent 65%)",
      }}
    >
      <div className="max-w-3xl">
        <p
          className="animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
          style={{ animationDelay: "0ms" }}
        >
          Portafolio
        </p>

        <h1
          className="animate-fade-in-up mt-4 text-5xl font-bold tracking-tight md:text-7xl"
          style={{ animationDelay: "100ms" }}
        >
          <span className="bg-gradient-to-br from-neutral-50 via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Richard Gonzalez
          </span>
        </h1>

        <p
          className="animate-fade-in-up mt-4 text-xl text-neutral-400 md:text-2xl"
          style={{ animationDelay: "200ms" }}
        >
          Desarrollador Full Stack &amp; Mobile
        </p>

        <p
          className="animate-fade-in-up mx-auto mt-5 max-w-md leading-relaxed text-neutral-500"
          style={{ animationDelay: "300ms" }}
        >
          Construyo aplicaciones web y móviles modernas con enfoque en
          rendimiento, experiencia de usuario y código limpio.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="https://github.com/richardglez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/richard-gonz%C3%A1lez-5b4070244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
