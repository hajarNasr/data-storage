import Hero from "./sections/hero/Hero";
import WhoWeAre from "./sections/who_we_are";
import Features from "./sections/features";
import Testimonials from "./sections/testimonials";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <WhoWeAre />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
