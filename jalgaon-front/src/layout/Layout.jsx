import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { LanguageToggle } from "../components/LanguageToggle/LanguageToggle";
import { LanguageProvider } from "../contexts/LanguageContext";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Layout() {
  return (
    <>
      <LanguageProvider>
        <ScrollToTop />
        <Navbar />
        <LanguageToggle />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default Layout;
