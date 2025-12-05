"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import imageLogo from "@/public/Logo (9).svg";
import imageCallCenter from "@/public/Icon+bg.svg";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";

import { CircleUserRound, Heart, LogOut, Menu, Wallet, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useGetMeQuery } from "@/api/userApi";


const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();

  const token = typeof window !== "undefined"
    ? localStorage.getItem("accsess_token")
    : null;

  // 🚀 API only runs when token exists
  const { data: getMeData, refetch } = useGetMeQuery(undefined, {
    skip: !token,
  });

  const [JwtToken, setJwtToken] = useState<boolean>(!!token);

  useEffect(() => {
    if (token) {
      setJwtToken(true);
      refetch();
    } else {
      setJwtToken(false);
    }
  }, [token, refetch]);


  // Pages without navbar
  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center pt-[15px] py-[10px]">
      <Link href={"/"}><Image src={imageLogo} alt="logo" /></Link>

      {!JwtToken && (
        <div className="flex gap-[10px]">
          <Link
            href="/register"
            className="p-[10px] border-2 border-[#5937e0] bg-[#5937e0] text-white rounded-[10px] px-[20px] hover:bg-white hover:text-[#5937e0]"
          >
            Зарегистрироваться
          </Link>

          <Link
            href="/login"
            className="p-[10px] border-2 border-[#5937e0] text-[#5937e0] font-bold rounded-[10px] px-[20px] hover:bg-[#5937e0] hover:text-white"
          >
            Войти
          </Link>
        </div>
      )}

      {JwtToken && (
        <Popover>
          <PopoverTrigger>
            <div className="flex gap-[10px] text-white rounded-[10px] bg-[#5937e0] p-[15px] hover:bg-[#7c65da] items-center">
              <CircleUserRound />
              <h1>{getMeData?.email}</h1>
            </div>
          </PopoverTrigger>

          <PopoverContent className="w-[254px] flex flex-col gap-[10px]">
            <Link
              href="/profile"
              className="flex gap-[10px] text-[#7618f8] w-full p-[10px] transition-all duration-400 rounded-[10px] hover:bg-[#5937e0] hover:text-white"
            >
              <CircleUserRound /> Мой профиль
            </Link>
            <Link
              href="/profile"
              className="flex gap-[10px] text-[#7618f8] w-full p-[10px] transition-all duration-400  rounded-[10px] hover:bg-[#5937e0] hover:text-white"
            >
              <Wallet /> Мои бронирования
            </Link>
            <Link
              href="/profile"
              className="flex gap-[10px] text-[#7618f8] w-full p-[10px] transition-all duration-400  rounded-[10px] hover:bg-[#5937e0] hover:text-white"
            >
              <Heart /> Мой Избранное
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("accsess_token");
                setJwtToken(false);
              }}
              className="flex gap-[10px] text-red-500 w-full p-[10px] rounded-[10px] hover:bg-red-500 hover:text-white"
            >
              <LogOut /> Выйти
            </button>
          </PopoverContent>
        </Popover>
      )}

      {/* Drawer for mobile */}
      <div className="xl:hidden block">
        <Drawer direction="right">
          <DrawerTrigger><Menu size={30} /></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                <div className="flex justify-between">
                  <Image src={imageLogo} alt="" />
                  <DrawerClose><X /></DrawerClose>
                </div>
              </DrawerTitle>
            </DrawerHeader>

            <ul className="flex flex-col gap-[30px] px-[20px]">
              <li><Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link></li>
              <li><Link href="/Vehicles" className={pathname === "/Vehicles" ? "font-bold" : ""}>Vehicles</Link></li>
              <li><Link href="/Details" className={pathname === "/Details" ? "font-bold" : ""}>Details</Link></li>
              <li><Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>About Us</Link></li>
              <li><Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>Contact Us</Link></li>
            </ul>

            <DrawerFooter>
              <div className="flex gap-[10px] items-center">
                <Image src={imageCallCenter} alt="" />
                <div>
                  <p>Need help?</p>
                  <p className="font-black">+996 247-1680</p>
                </div>
              </div>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
