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
} from "./components";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-gradient-to-r from-purple-500 to-black">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
          <About></About>
          <Experience></Experience>

          <Tech></Tech>
          <Works></Works>
          <Feedbacks></Feedbacks>
          <div className="relative z-0">
            <Contact></Contact>
            <StarsCanvas></StarsCanvas>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
