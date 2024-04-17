import KeyboardVideo from "@/assets/KeyboardTyping-Video.mp4";

function SocialCommunity() {
  return (
    <>
      <div className="text-white text-center text-6xl space-y-48">
        <div className="w-full flex justify-center">
          <video autoPlay muted loop id="keyboardTyping" className="w-[950px]">
            <source src={KeyboardVideo} />
          </video>
        </div>
        {/* text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-purple-950 */}
        <h2 className="">
          Share your experiences and connect with the travelers community
        </h2>
      </div>
    </>
  );
}

export default SocialCommunity;
