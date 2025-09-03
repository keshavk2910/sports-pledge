import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeaturedFundraisers from '../components/FeaturedFundraisers';
import HowItWorks from '../components/HowItWorks';
import TeamFinder from '../components/TeamFinder';
import SuccessStories from '../components/SuccessStories';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedFundraisers />
      <HowItWorks />
      <TeamFinder />
      <SuccessStories />
      <CallToAction />

    </Layout>
  );
}
