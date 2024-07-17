import React from "react";
import Logo from "../../../public/static/img/brand.svg";
import Image from "next/image";

const Brand = () => {
  return <Image width={100} src={Logo} alt="" />;
};

export default Brand;
