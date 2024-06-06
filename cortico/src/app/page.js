"use client"

import About from "@/components/About/About";
import Header from "@/components/ui/Header/Header";
import Shorter from "@/components/ui/Shorter/Shorter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [shorten, setShorten] = useState(false);

  const handleShorten = () => {
    setShorten(true)
  }

  return (
    <>
    <Header />
    <main className="block mt-0 mr-auto mb-0 ml-auto max-w-screen-lg md:pt-0 pr-5 pb-0 pl-5">
      <Shorter shorten={shorten} handleShorten={handleShorten} />
      <About />
    </main>
    </>
  );
}