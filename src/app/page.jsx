import Home from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Technologies";
import CustWebDev from "../components/CustWebDev";
import TechStack from "../components/TechStack";
import Partners from "../components/Partners";
import Navsankalp from "../components/NavSankalp";
import Industries from "../components/Industries";
import DigitalServices from "../components/Digital-services";
import BrandJourney from "../components/BrandJourny";

export default function Page() {
  return (
    <>
      <Home />
      <AboutUs />
      <Navsankalp />
      <BrandJourney />
      <Services />
      <DigitalServices variant="home" />
      <CustWebDev />
      <TechStack />
      <Industries />
      <Partners />
    </>
  );
}
