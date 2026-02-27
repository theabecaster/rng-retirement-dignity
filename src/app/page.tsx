import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Topics from "@/components/Topics";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mission />
      <Topics />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
