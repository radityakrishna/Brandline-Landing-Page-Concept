import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Footer from "@/src/components/Footer";
import FreeCall from "@/src/components/FreeCall";
import Brands from "@/src/components/Brands";
import Pitch1 from "@/src/components/Pitch1";
import Pitch2 from "@/src/components/Pitch2";
import Features from "@/src/components/Features";
import Head from "next/head";





export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Brandline - Home</title>
        </Head>
        <Navbar />
        <Hero />
        <Brands />
        <Features />
        <Pitch1 />
        <Pitch2 />
        <FreeCall />
        <Footer />

      </div>
    </>
  )
}
