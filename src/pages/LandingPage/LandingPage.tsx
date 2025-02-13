import Demo from "./_components/Demo";
import InputAndLink from "./_components/InputAndLink";
import Pricing from "./_components/Pricing";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <InputAndLink />
      <Pricing />
      <Demo />
      <Footer />
    </>
  );
};

export default page;
