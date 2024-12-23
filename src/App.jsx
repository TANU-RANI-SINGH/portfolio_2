import React from "react";
import Header from "./component/Header.jsx";
import Home from "./component/Home.jsx";
import Project from "./component/Project.jsx";
import Resume from "./component/Resume.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <div className="scroll-smooth overflow-auto">
      <Header />
      <Home />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
