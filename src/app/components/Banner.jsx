import Image from "next/image";
import banner from "./333.gif";

const Banner = () => {
  return (
    <Image className=""
      src={banner}
      alt="banner"
    />
  );
};

export default Banner;
