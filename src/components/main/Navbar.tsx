import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/web-logo.png";

function NavigationBar() {
  const location = useLocation();

  const checkActive = (path: string) => {
    return location.pathname === path
      ? "rounded-full bg-[#2980B9] py-2 px-4"
      : "";
  };

  return (
    <>
      <div className="flex bg-black py-5 justify-between items-center fixed w-full text-white">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-60 ms-10" />
          </Link>
        </div>
        <div className="me-3">
          <ul className="flex gap-x-14">
            <li className="mt-2">
              <Link className={`${checkActive("/")}`} to="/">
                HOME
              </Link>
            </li>
            <li className="mt-2">
              <Link className={`${checkActive("/about")}`} to="/about">
                ABOUT US
              </Link>
            </li>
            <Button className="bg-[#3498DB] px-6 hover:outline hover:shadow-xl hover:shadow-[#3498DB]">
              MORE
            </Button>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavigationBar;
