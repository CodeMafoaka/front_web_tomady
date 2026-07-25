import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import AppScreens from "./components/AppScreens";
import Alerts from "./components/Alerts";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FadeIn>
          <Stats />
        </FadeIn>
        <FadeIn>
          <Solutions />
        </FadeIn>
        <FadeIn>
          <AppScreens />
        </FadeIn>
        <FadeIn>
          <Alerts />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>
        <FadeIn>
          <CTA />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}