import Image from "next/image";
import Navbar from "@/components/NavBar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Navbar/>
      <Header/>
      <Services/>
      <Projects/>
      <Footer/>
    </main>
  );
}
