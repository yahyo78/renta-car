"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import imageLogo from "@/public/Logo (9).svg";
import { useLoginAdminMutation } from "@/api/logAndRegApi";
import { useGetMeQuery } from "@/api/userApi";

export default function LoginPage() {
  const [loginAdmin] = useLoginAdminMutation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(getMeData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const adminData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      setIsLoading(true);
      const result: any = await loginAdmin(adminData).unwrap();
      localStorage.setItem("accsess_token", result.accessToken);
      
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center py-[20px]">
            <Image src={imageLogo} alt="logo" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          
        </div>

        {/* Login Box (replaced Card) */}
        <div className="border rounded-lg shadow-lg bg-card p-6 flex flex-col gap-6">
          

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="h-10 bg-input"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="h-10 bg-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link
                href="/admin/logAndReg/forgotPassWord"
                className="text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-[#5937e0]  hover:bg-[#7c62e2] text-primary-foreground font-medium"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative pt-[10px] flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  New to our platform?
                </span>
              </div>
            </div>
              <div>
                <Link
                  href="/register"
                  className="block cursor-pointer py-0 text-center text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Protected by enterprise-grade security
        </p>
      </div>
    </div>
  );
}
