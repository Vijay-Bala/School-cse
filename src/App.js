import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Marquee from "./Components/Marquee"; 
import Schedule from "./Components/Schedule";
// import ImageSlider from "./Components/ImmageSlider";
// import Features from "./Components/Features";
import General from "./Components/General";
import Aboutclg from "./Components/Aboutclg";
import Aboutclg2 from "./Components/Aboutclg2";
import Canvas from "./Components/Waves/Canvas";
import Preloader from "./Components/Preloader"

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Schedule />
      <Marquee />
      <About />
      <Aboutclg />
      <Aboutclg2 />
      <General />
      {/* <Features />
      <ImageSlider /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Canvas />
      <Footer /> 
      <Preloader />
    </div>
  );
}

export default App;
