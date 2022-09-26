import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/_Header";
import Method from "./components/_Method";
import Services from "./components/_Services";
import Derniers from "./components/_Derniers";
import Title from "./components/_Title";
import Faq from "./components/Faq";
import Slider from "./components/Slider";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Method />
      <Slider />
      <Derniers />
      <Title />
      <Form />
      <Faq />
    </div>
  );
}
