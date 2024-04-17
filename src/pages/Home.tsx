import GalleryCarousel from "@/components/main/Gallery";
import NavigationBar from "../components/main/Navbar";
import SocialCommunity from "@/components/main/Community";
import Hero from "@/components/main/Hero";

function Home() {
  return (
    <>
      <nav className="">
        <NavigationBar />
      </nav>
      <main className="bg-black py-16 space-y-72">
        <Hero />
        <GalleryCarousel />
        <SocialCommunity />
      </main>
    </>
  );
}

export default Home;
