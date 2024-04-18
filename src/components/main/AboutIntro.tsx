import Earth from "@/assets/Asteroids-Video.mp4";
import IntroContent from "../sub/IntroContent";

function IntroAbout() {
  return (
    <>
      <div className="text-white text-center space-y-20">
        <div className="">
          <video
            autoPlay
            muted
            loop
            id="EarthBackground"
            className="w-auto min-w-full h-[600px] absolute rotate-90"
          >
            <source src={Earth} />
          </video>
        </div>
        <IntroContent />
      </div>
    </>
  );
}

export default IntroAbout;
