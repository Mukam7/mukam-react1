import React from "react";

import {
  Header,
  Home,
  About,
  Services,
  Articles,
  Contact,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
