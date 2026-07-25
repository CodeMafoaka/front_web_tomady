import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import AppScreens from "./components/AppScreens";
import Alerts from "./components/Alerts";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Solutions />
        <AppScreens />
        <Alerts />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}