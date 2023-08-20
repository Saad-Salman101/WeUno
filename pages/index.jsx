import Carousal from "@/components/Carousal/Carousal";
import CarousalHeader from "@/components/Carousal/CarousalHeader";
import Header from "@/components/Header";
import Section from "@/components/Section1/Section";
import Section3 from "@/components/Section3/Section3";
import PopularCategories from "@/components/Section2/PopularCategories";
import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import HealthConcern from "@/components/Section4/HealthConcern";
import TopBrands from "@/components/Section5/TopBrands";
import Section6 from "@/components/Section6/Section6";
import Section7 from "@/components/Section7/Section7";
import Section8 from "@/components/Section8/Section8";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <Header/>
      <Carousal/>
      <Section/>
      <PopularCategories/>
      <Section3/>
      <HealthConcern/>
      <TopBrands/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
      <main>

      </main>
    </>
  );
}
