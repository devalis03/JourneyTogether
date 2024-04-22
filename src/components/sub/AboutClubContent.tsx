import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function AboutClubContent() {
  return (
    <>
      <div className="relative z-30 space-y-28">
        <h3 className="text-6xl">Send us your feedback</h3>
        <span className="text-5xl">
          Any suggestion or recommendation will be received
        </span>
        <div className="grid w-full gap-5 justify-center">
          <Input type="text" placeholder="Name" className="w-[500px]" />
          <Textarea
            placeholder="Type your message here."
            className="resize-none text-black"
          />
          <Button className="bg-[#3498DB] hover:outline hover:shadow-xl hover:shadow-[#3498DB] duration-1000">
            SEND
          </Button>
        </div>
      </div>
    </>
  );
}

export default AboutClubContent;
