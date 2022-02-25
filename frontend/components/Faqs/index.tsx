import React from "react";
import Accordion from "./Accordion";
import { Parallax } from "react-scroll-parallax";

export default function FAQWrapper() {
  return (
    <Parallax speed={30}>
      <div>
        <div className="faq-heading-container">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="accordion-container">
          <Accordion />
        </div>
      </div>
    </Parallax>
  );
}
