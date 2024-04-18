import IntroAbout from "@/components/main/AboutIntro";
import NavigationBar from "@/components/main/Navbar";

function About() {
  return (
    <>
      <nav>
        <NavigationBar />
      </nav>
      <main className="bg-black py-16 space-y-72">
        <IntroAbout />
      </main>
    </>
  );
}

export default About;
