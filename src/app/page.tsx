"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal logoSrc="/images/logo.svg" logoAlt="Xeven Logo" buttonText="Start Free Trial" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Xeven" subtitle="Your gateway to a futuristic SaaS experience!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="Xeven is your all-in-one platform for innovative solutions." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step 1", description: "Register on the platform", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Our Tokenomics" description="Explore our transparent ecosystem." tokenData={[{value: "100M", description: "Total Supply"}, {value: "10M", description: "Circulating Supply"}, {value: "500K", description: "Liquidity"}]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="Xeven Logo" logoText="Xeven" items={[{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms and Conditions", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }]} />
      </div>
    </SiteThemeProvider>
  );
}
