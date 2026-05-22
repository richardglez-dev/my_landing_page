import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-800/50 px-6 py-8 text-center text-sm text-neutral-600">
        <p>Richard Gonzalez © 2026</p>
      </footer>
    </>
  );
}
