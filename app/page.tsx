// import Link from "next/link";
import Search from "../components/Search";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Search />
      <Categories />
    </main>
  );
}
