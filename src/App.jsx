import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AOS from "aos";
import { Alamal, Home, ProjectPure } from "./pages/Index";
import Taesser from "./pages/taesser/Taesser";
import ElectricPick from "./pages/ُElictricPick/ElectricPick";
import Employees from "./pages/Employees/Employees";
import IcrWebsite from "./pages/IcrWebsite/IcrWebsite";
import ProjectReact from "./pages/ProjectReact/ProjectReact";
import IcrDashboard from "./pages/IcrDashboard/IcrDashboard";

const App = () => {
  useEffect(() => {
    AOS.init({
      // Whether to animate elements only once
    }); // Initialize AOS
  }, []);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div style={{ transition: "0.3s" }}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pure">
          <Route index element={<ProjectPure />} />
          <Route path="/pure/alamal" element={<Alamal />} />
          <Route path="/pure/tesser" element={<Taesser />} />
          <Route path="/pure/pick" element={<ElectricPick />} />
          <Route path="/pure/employees" element={<Employees />} />
        </Route>
        <Route path="/react">
          <Route index element={<ProjectReact />} />
          <Route path="/react/icr" element={<IcrWebsite />} />
          <Route path="/react/icrdash" element={<IcrDashboard />} />
        </Route>
        {/* <Route path="/pure-website" /> */}
        {/* <Route index element={<Purewebsite />} /> */}
        {/* <Route path="/pure-website/alamal" element={<Alamal />} /> */}
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        {/* <Route path="/Pricing" element={<Price />} /> */}
        {/* <Route path="contact-us">
                  <Route index element={<ContactUs />} />
                  <Route path="/contact-us/firststep" element={<FirstStep />} />
                  <Route path="/contact-us/towstep" element={<TowStep />} />
                  <Route path="/contact-us/treestep" element={<TreeStep />} />
                  <Route path="/contact-us/fourstep" element={<FourStep />} />



        </Route> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
