import EarthRotating from "../../assets/EarthRotating-Video.mp4";
import GalleryContent from "../sub/GalleryComments";

function GalleryCarousel() {
  return (
    <>
      <div className="my-44 text-6xl font-bold text-center text-white space-y-72 h-screen">
        <h2 className="">
          Explora el mundo a traves de los ojos de otros viajeros
        </h2>
        <div className="w-full flex justify-center items-center relative">
          <video autoPlay muted loop id="backgroundVideo" className="w-[900px]">
            <source src={EarthRotating} />
          </video>
        </div>
        <div>
          <GalleryContent />
        </div>
      </div>
    </>
  );
}

export default GalleryCarousel;
