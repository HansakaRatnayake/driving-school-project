import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import ContactUs from './components/ContactUs/ContactUs';
import StorePage from './components/Store/StorePage';
import Cart from './components/Store/Cart';
import About1 from './components/About/About1';
import Information from './components/Information/Information';
import Booking from './components/Booking/Booking';
import NewLicence from './components/Information/NewLicence/NewLicence'; 
import DrivingRules from './components/Information/DrivingRules/DrivingRules';
import DrivingInfo from './components/Information/DrivingInfo/DrivingInfo';
import SpecialLicenseInfo from './components/Information/SpecialLicenseInfo/SpecialLicenseInfo';
import RevenuLicence from './components/Information/RevenuLicence/RevenuLicence';
import HighwayOffenses from './components/Information/HighwayOffenses/HighwayOffenses';
import Expressway from './components/Information/Expressway/Expressway';
import ForeignLicence from './components/Information/ForeignLicence/ForeignLicence';
import OldLicence from './components/Information/OldLicence/OldLicence';
import Landing from './components/Landing/Landing';
import Assesment from './components/Information/Assesment/Assesment';
import Navbar from './components/Navbar/Navbar'; 
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const element = document.documentElement;

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Theme Management
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path="/home"
          element={
            <>
              <Hero theme={theme} setTheme={setTheme} />
              <About />
              <Services />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/information" element={<Information />} />
        <Route path="/storepage" element={<StorePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about1" element={<About1 />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/newlicence" element={<NewLicence />} />
        <Route path="/drivingrules" element={<DrivingRules />} />
        <Route path="/drivinginfo" element={<DrivingInfo />} />
        <Route path="/speciallicenseinfo" element={<SpecialLicenseInfo />} />
        <Route path="/revenulicence" element={<RevenuLicence />} />
        <Route path="/highwayoffenses" element={<HighwayOffenses />} />
        <Route path="/expressway" element={<Expressway />} />
        <Route path="/foreignlicence" element={<ForeignLicence />} />
        <Route path="/oldlicence" element={<OldLicence />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/assesment" element={<Assesment />} />
      </Routes>
    </Router>
  );
};

export default App;
