import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title:
    "Mahir Dzirlo - Software Developer & IT Consultant in Sarajevo | Remote & Local Services",
  description:
    "Experienced software developer and IT consultant based in Sarajevo, Bosnia, providing high-quality services for local businesses and remote clients worldwide. Specializing in web development, mobile applications, IT consulting, and custom software solutions. Open to collaborations and freelance projects.",
  robots: "all",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Software Developer Sarajevo",
    "IT Consultant Bosnia",
    "Web Developer",
    "Mobile App Development",
    "IT Consulting Sarajevo",
    "Remote Software Developer",
    "Custom Software Solutions",
    "Bosnia IT Services",
    "Freelance Developer",
    "Sarajevo Developer for Hire",
    "Remote IT Projects",
    "Eastern Europe IT Consultant",
    "Razvoj Softvera Sarajevo",
    "IT Consultant Bosnia",
    "Izrada stranica",
    "Razvoj Mobilnih Aplikacija",
    "IT Konsalting Sarajevo",
    "Programer",
    "Prilagođena Softverska Rješenja",
    "IT Usluge Bosna",
    "Freelance Programer",
    "Programer Sarajevo za Najam",
    "IT Projekti",
    "IT Konsultant",
  ],
  og: {
    title:
      "Software Developer & IT Consultant in Sarajevo | Remote & Local Services",
    description:
      "Sarajevo-based software developer and IT consultant, providing local and worldwide remote services. Specializing in web and mobile applications, IT consulting, and more.",
    image:
      "https://md-portfolio-coral.vercel.app/_next/image?url=%2Fprofile.png&w=640&q=75",
    url: "https://md-portfolio-coral.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Software Developer & IT Consultant in Sarajevo | Remote & Local Services",
    description:
      "Offering professional software development and IT consulting services in Sarajevo, Bosnia, and remotely worldwide. Available for freelance and project-based collaborations.",
    image:
      "https://md-portfolio-coral.vercel.app/_next/image?url=%2Fprofile.png&w=640&q=75",
  },
};

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
