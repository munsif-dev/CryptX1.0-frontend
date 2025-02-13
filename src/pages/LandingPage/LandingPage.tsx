import Demo from "./_components/Demo";
import InputAndLink from "./_components/InputAndLink";
import Pricing from "./_components/Pricing";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <div className="bg-green-50">
      <Header />
      {/* <Hero />
      
      <InputAndLink />
      <Pricing />
      <Demo /> */}
      <Features />
      <Footer />
    </div>
  );
};

export default page;
