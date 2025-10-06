"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Xeven"
          leftButtonText=""
          rightButtonText="Start Free Trial"
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to Xeven"
          subtitle="A futuristic platform for better SaaS experiences"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="Xeven is an innovative platform providing state-of-the-art solutions for SaaS businesses. Our focus is on empowering users with flexible and powerful tools that streamline your workflow."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Verify your identity", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start trading", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Discover the breakdown of our token model and how it benefits you."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000" },
            { id: 2, title: "Circulating Supply", description: "500,000,000" },
            { id: 3, title: "Market Cap", description: "$50,000,000" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Xeven"
          logoText="Xeven"
          className=""
          svgClassName=""
        />
      </div>
    </SiteThemeProvider>
  );
}
