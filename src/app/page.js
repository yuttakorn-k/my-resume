import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py">
      <HeroSection id="home"/>
      <AchievementSection/>
      <AboutSection id="about"/>
      <EducationSection id='education' />
      <ExperienceSection id='experience'/>
      <EmailSection id="contact"/>
      </div>
      <Footer/>
    </main>
  );
}
