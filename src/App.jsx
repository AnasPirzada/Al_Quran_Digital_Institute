import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/AboutUs';
import Home from './pages/Home';
import Courses from './Pages/Courses'
import Pricing from "./Pages/Pricing/Pricing"
import ContactUs from './Pages/ContactUs/ContactUs';
import FAQs from './Pages/FAQs/FAQs';

function App() {
  return (
    <Router>
      {/* Navbar will be present on all pages */}
      <Navbar />

      {/* Define routes for each page */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/faqs' element={<FAQs />} /> 
         {/* <Route path='/blogs' element={<Blogs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
