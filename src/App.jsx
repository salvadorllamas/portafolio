import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Cristal,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-full">
          {/* <div className="absolute h-96  bg-black p-4 w-full  shadow-2xl "></div> */}
          <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
