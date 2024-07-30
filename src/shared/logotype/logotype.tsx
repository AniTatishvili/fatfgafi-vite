import React from "react";

import logo from "../../../public/images/logo.png";

export const Logotype = () => {
  return (
    <div className="lg:max-w-[80px] w-[50px]">
      <a href="/">
        <img
          src={logo}
          className="lg:max-w-[80px] w-[50px] object-contain"
          alt="logotype"
        />
      </a>
    </div>
  );
};
