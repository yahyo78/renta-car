import Image from "next/image";
import React from "react";
import Link from "next/link";

// images
import imageLogo from "@/public/Logo (9).svg";
import imageCallCenter from "@/public/Icon+bg.svg";

// components imports
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex  justify-between px-[20px] items-center pt-[15px] py-[10px]">
        <Image src={imageLogo} alt="" />
        <ul className="xl:flex hidden  gap-[30px] items-center">
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Vehicles</Link>
          </li>
          <li>
            <Link href={""}>Details</Link>
          </li>
          <li>
            <Link href={""}>About Us</Link>
          </li>
          <li>
            <Link href={""}>Contact Us</Link>
          </li>
        </ul>

        <div className="xl:flex hidden gap-[10px] items-center">
          <Image src={imageCallCenter} alt="" />
          <div>
            <p>Need help?</p>
            <p className="font-black">+996 247-1680</p>
          </div>
        </div>

        <div className="xl:hidden block">
          <Drawer direction="right">
            <DrawerTrigger>
              <Menu size={30} />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <div className="flex justify-between">
                    <Image src={imageLogo} alt="" />
                    <DrawerClose>
                      <X />
                    </DrawerClose>
                  </div>
                </DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
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
    </>
  );
};

export default Navbar;
