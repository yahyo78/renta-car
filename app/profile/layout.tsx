"use client";

import LayoutProfile from "../layouts/layoutProfile";



export default function ProfileLayout({ children }) {
  return (
    <div className="flex gap-[50px] w-full">
      <LayoutProfile />
      <div className="flex-1 p-[20px]">{children}</div>
    </div>
  );
}
