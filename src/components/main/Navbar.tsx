import { Button } from "@/components/ui/button";

function NavigationBar() {
  return (
    <>
      <div className="flex bg-[#0984E3] py-5 justify-between">
        <div>
          <h2>JOURNEY TOGETHER</h2>
        </div>
        <div className="me-3">
          <ul className="flex gap-x-14">
            <li className="mt-2">HOME</li>
            <li className="mt-2">GLOBE</li>
            <li className="mt-2">DESTINATIONS</li>
            <Button className="bg-[#87CEEB] px-6">MORE</Button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
