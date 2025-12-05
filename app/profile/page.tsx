"use client";

import { useGetMeQuery } from "@/api/userApi";
import Image from "next/image";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";

export default function ProfilePage() {
  const { data: UserData, refetch } = useGetMeQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div
      className="max-w-xl mx-auto p-6 py-[100px]
 space-y-6"
    >
      {/* Avatar */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
          {/* <Image
            src={UserData?.image || "/default-avatar.png"}
            alt="User Avatar"
            width={128}
            height={128}
            className="object-cover"
          /> */}
          <CircleUserRound className="text-[#5937e0]" size={128} />
        </div>

        <h1 className="text-2xl font-bold mt-4">
          {UserData?.name || "User Profile"}
        </h1>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" defaultValue={UserData?.email} className="h-11" />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="********" className="h-11" />

        <button className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </button>
      </div>

      {/* Save Button */}
      <Button className="w-full h-11 bg-[#5937e0] text-white hover:bg-[#7c65da]">
        Save changes
      </Button>
    </div>
  );
}
