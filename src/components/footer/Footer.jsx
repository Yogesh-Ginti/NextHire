import Logo from "../logo/Logo";
import Connect from "./Connect";
import FooterEndSection from "./FooterEndSection";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div className="px-12 pt-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div>
          <Logo />
          <Connect />
        </div>
        <FooterLinks />
      </div>
      <hr className="my-4" />
      <FooterEndSection />
    </div>
  );
}

export default Footer;
