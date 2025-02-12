import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SignInPage />
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default App;
