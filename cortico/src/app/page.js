"use client"

import About from "@/components/About/About";
import Header from "@/components/ui/Header/Header";
import Shorter from "@/components/ui/Shorter/Shorter";

export default function Home() {
  
  return (
    <>
    <Header />
    <main className="block mt-0 mr-auto mb-0 ml-auto max-w-screen-lg md:pt-0 pr-5 pb-0 pl-5">
      <Shorter />
      <About />
    </main>
    </>
  );
}
