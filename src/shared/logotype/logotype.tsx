import { NavLink } from "react-router-dom";
import logo from "../../../public/images/logo.png";

export const Logotype = () => {
  return (
    <div className="lg:w-[80px] w-[50px]">
      <NavLink to="/">
        <img
          src={logo}
          className="lg:w-[80px] w-[50px] object-contain"
          alt="logotype"
        />
      </NavLink>
    </div>
  );
};
