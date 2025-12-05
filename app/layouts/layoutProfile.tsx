"use client";

import { CircleUserRound, Wallet, Settings, LogOut, Heart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LayoutProfile = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      label: "Мой профиль",
      icon: <CircleUserRound />,
      href: "/profile",
      activeColor: "bg-[#5937E0] text-white border-[#7C62E2]",
    },

    {
      label: "Мои бронирования",
      icon: <Wallet />,
      href: "/profile/reservation",
      activeColor: "bg-[#4C3BCF] text-white border-[#6D5BE8]",
    },

    {
      label: "Избранное",
      icon: <Heart />,
      href: "/profile/favorite",
      activeColor: "bg-[#4C3BCF] text-white border-[#5050F0]",
    },
  ];

  return (
    <div
      className=" mt-[50px]
        w-[300px]
        flex flex-col items-center 
        pt-[30px] gap-[15px] 
        rounded-[20px] p-[20px]
        bg-[#5937E0]/10
        border h-full
        shadow shadow-black/40
        backdrop-blur-md
      "
    >
      {menuItems.map((item, i) => {
        const isActive = pathname === item.href;

        return (
          <button
            key={i}
            onClick={() => router.push(item.href)}
            className={`
        p-[15px] w-[240px]
        flex items-center gap-[10px]
        rounded-[12px] 
        font-semibold
        transition-all duration-300
        border

        ${
          isActive
            ? item.activeColor
            : "bg-[#27272A] text-[#D4D4D4] hover:bg-[#7C62E2]/40 hover:text-white"
        }
      `}
          >
            {item.icon} {item.label}
          </button>
        );
      })}

      <button
        onClick={() => {
          localStorage.removeItem("accsess_token");
          router.push("/login");
        }}
        className="
          p-[15px] w-[240px]
          flex items-center gap-[10px]
          rounded-[12px]
          font-semibold
          text-red-400
          transition-all duration-300
          hover:bg-red-600 hover:text-white
        "
      >
        <LogOut /> Выйти
      </button>
    </div>
  );
};

export default LayoutProfile;
