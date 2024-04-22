import AboutClub from "@/components/main/AboutClub";
import IntroAbout from "@/components/main/AboutIntro";
import NavigationBar from "@/components/main/Navbar";

function About() {
  return (
    <>
      <nav>
        <NavigationBar />
      </nav>
      <main className="bg-black py-16 space-y-44">
        <IntroAbout />
        <AboutClub />
      </main>
    </>
  );
}

export default About;
