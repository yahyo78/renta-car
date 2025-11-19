import Image from "next/image";
import React from "react";

// images
import imageFooterLogo from "@/public/Logo (9).svg";
import imageCardLocation from "@/public/Icon+bg (2).svg";
import FooterCard from "@/components/myComponents/footer/footerCard";
import imageFaceBook from "@/public/Group (3).svg";
import imageAppStore from "@/public/App Store.svg";

const Footer = () => {
  return (
    <div className="py-[50px] xl:px-0 px-[20px]">
      <div className="flex  xl:flex-row flex-col items-center gap-[20px] justify-between">
        <Image src={imageFooterLogo} alt="" />
        <FooterCard
          img={imageCardLocation}
          text={"Address"}
          description={"Oxford Ave. Cary, NC 27511"}
        />
        <FooterCard
          img={imageCardLocation}
          text={"Address"}
          description={"Oxford Ave. Cary, NC 27511"}
        />
        <FooterCard
          img={imageCardLocation}
          text={"Address"}
          description={"Oxford Ave. Cary, NC 27511"}
        />
      </div>

      <div className="py-[40px] flex xl:flex-row flex-col gap-[30px] justify-between">
        <div className="flex flex-col gap-[30px]">
          <h1 className="xl:w-[280px] font-bold text-[20px]">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem tu
          </h1>
          <div className="flex gap-[15px]">
            <Image alt="" src={imageFaceBook} />
            <Image alt="" src={imageFaceBook} />
            <Image alt="" src={imageFaceBook} />
            <Image alt="" src={imageFaceBook} />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[20px] font-bold">Useful links</h1>
          <p>About us</p>
          <p>Contact us</p>
          <p>Gallery</p>
          <p>Blog</p>
          <p>F.A.Q</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[20px] font-bold">Vehicles</h1>
          <p>Sedan</p>
          <p>Cabriolet</p>
          <p>Pickup</p>
          <p>Minivan</p>
          <p>SUV</p>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h1 className="text-[20px] font-bold">Download App</h1>
          <Image src={imageAppStore} alt="" />
          <Image src={imageAppStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
