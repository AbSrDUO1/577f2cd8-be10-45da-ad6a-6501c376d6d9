"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const navLinks = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Xeven"
          navItems={navLinks}
          leftButtonText=""
          rightButtonText="Start Free Trial"
          onRightButtonClick={() => { /* Handle click */ }}
          className="bg-transparent fixed w-full z-10"
        />
      </div>
      <div id="hero" data-section="hero">
        <BillboardHero title="Welcome to Xeven" subtitle="Your gateway to innovative SaaS solutions" />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="Xeven is designed for those looking to streamline their processes and amplify their productivity through cutting-edge technology." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy" steps={[
          { title: "Step 1", description: "Sign up for an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
          { title: "Step 2", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true },
          { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics title="Tokenomics Overview" description="Learn more about our token distribution and economic model." cardItems={[
          { id: 1, title: "Total Supply", description: "1,000,000 XEV" },
          { id: 2, title: "Market Cap", description: "$10,000,000" },
          { id: 3, title: "Liquidity", description: "3% Reward Distribution" }
        ]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg"
          logoAlt="Xeven"
          logoText="Xeven - Empowering Your Innovations"
          items={[
            { label: "Privacy Policy", onClick: () => { /* Handle click */ } },
            { label: "Terms of Service", onClick: () => { /* Handle click */ } },
            { label: "Contact Us", onClick: () => { /* Handle click */ } }
          ]} 
          className="bg-gray-800"
        />
      </div>
    </SiteThemeProvider>
  );
}
