import EarthPhone from "../../assets/EarthPhone-Video.mp4";
import HeroContent from "../sub/HeroContent";

function Hero() {
  return (
    <>
      <div className="w-full h-full flex items-center ps-24 space-x-10 my-44">
        <div className="basis-1/2">
          <HeroContent />
        </div>
        <div className="basis-1/2">
          <video
            autoPlay
            muted
            loop
            id="backgroundVideo"
            className="w-full h-[420px]"
          >
            <source src={EarthPhone} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Hero;
