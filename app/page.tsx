// import Link from "next/link";
import Search from "../components/Search";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Search />
      <Categories />
      <Explore />
      <Footer />
    </main>
  );
}
