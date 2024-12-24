import HeroSection from '@/app/components/HeroSection';
import BrandDifference from '@/app/components/BrandDifference';
import Navbar from './components/Navbar';
import ProductListingSection from '@/app/components/ProductListingSection';
import StyledSection from '@/app/components/StyledSection'; // Importing the new section
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandDifference />
      <ProductListingSection />
      <StyledSection /> {/* Added Styled Section at the end */}
      <EmailSignup />
      <Footer />
    </>
  );
}
