"use client";
import Image from "next/image";
import React from "react";

// images
import imageFooterLogo from "@/public/Logo (9).svg";
import imageCardLocation from "@/public/Icon+bg (2).svg";
import imageCardPhone from "@/public/Icon+bg (20).svg";
import FooterCard from "@/components/myComponents/footer/footerCard";
import imageFaceBook from "@/public/Group (3).svg";
import imageAppStore from "@/public/App Store.svg";
import imageMarket from "@/public/Google Play.png";
import imageEmail from "@/public/Icon+bg (10).svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

import imageInstagram from '@/public/Group.svg'
import imageTwitter from '@/public/Group (1).svg'
import imageYouTube from '@/public/Group (30).svg'

const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("login")) {
    return null;
  }
  return (
    <div className="py-[50px] xl:px-0 px-[20px]">
      <div className="flex xl:flex-row flex-col items-center gap-[20px] justify-between">
        <Image src={imageFooterLogo} alt="" />
        <FooterCard
          img={imageCardLocation}
          text="Адрес"
          description="Oxford Ave. Cary, NC 27511"
        />
        <FooterCard
          img={imageEmail}
          text="Email "
          description="nwiger@yahoo.com"
        />
        <FooterCard
          img={imageCardPhone}
          text="Телефон"
          description="+537 547-6401"
        />
      </div>

      <div className="py-[40px] flex xl:flex-row flex-col gap-[30px] justify-between">
        <div className="flex flex-col gap-[30px]">
          <h1 className="xl:w-[280px] font-bold text-[20px]">
            Арендуйте автомобиль быстро и удобно. Мы создаём сервис, который
            экономит ваше время и делает каждую поездку комфортной.
          </h1>
          <div className="flex gap-[15px]">
            <Image alt="" src={imageFaceBook} />
            <Image alt="" src={imageInstagram} />
            <Image alt="" src={imageTwitter} />
            <Image alt="" src={imageYouTube} />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[20px] font-bold">Полезные ссылки</h1>
          <Link href={"about"}>О нас</Link>
          <Link href={"/contact"}>Контакты</Link>
          <p>Галерея</p>
          <p>Блог</p>
          <p>Вопросы и ответы</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[20px] font-bold">Автомобили</h1>
          <p>Седан</p>
          <p>Кабриолет</p>
          <p>Пикап</p>
          <p>Минивэн</p>
          <p>Внедорожник</p>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h1 className="text-[20px] font-bold">Скачать приложение</h1>
          <Image src={imageAppStore} alt="" />
          <Image src={imageMarket} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
