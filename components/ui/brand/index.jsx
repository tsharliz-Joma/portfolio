import React from "react";
import Logo from "../../../public/og-boxer.jpg";
import Image from "next/image";

const Brand = ({onClick}) => {
  return (
    <div onClick={() => onClick()} className="cursor-pointer">
      <Image
        className="rounded-xl"
        width={50}
        height={"auto"}
        src={Logo}
        alt="Logo"
      />
    </div>
  );
};

export default Brand;
