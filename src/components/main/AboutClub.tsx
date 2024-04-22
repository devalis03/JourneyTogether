import RainbowTrailVideo from "@/assets/RainbowTrail-Video.mp4";
import AboutClubContent from "../sub/AboutClubContent";

function AboutClub() {
  return (
    <>
      <div className="text-white text-center">
        <AboutClubContent />
        <div className="mt-[-550px] absolute">
          <video autoPlay muted loop id="EarthBackground" className="w-full">
            <source src={RainbowTrailVideo} />
          </video>
        </div>
      </div>
    </>
  );
}

export default AboutClub;
