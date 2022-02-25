import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <Image
        alt="hero image"
        src={"/boy-bg.jpg"}
        height={"1300"}
        width={"2000"}
        layout="responsive"
      />
    </div>
  );
}
