import React from "react";
import Topbar from "../components/topbar/Topbar";
import Contact from "../components/contact/Contact";
export default function ContactPage() {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="section">
        <Contact></Contact>
      </div>
    </div>
  );
}
