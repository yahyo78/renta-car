"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import imageLogo from "@/public/Logo (9).svg";
import { useRegUserMutation } from "@/api/logAndRegApi";

export default function RegisterPage() {
  const [registerUser] = useRegUserMutation();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    if (data.password !== data.confirmPassword ) {
      alert("Паролҳо мувофиқ нестанд!");
      return;
    }
    if (data.password.length < 6 || data.confirmPassword.length < 6 ) {
      alert("Парол бояд на кам каз 6 то бошад !");
      return;
    }

    try {
      setIsLoading(true);
     const result = await registerUser(data).unwrap();
     
      
      if(result)
      {
        router.push("login")
      }
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          
        </div>

        {/* Register Box */}
        <div className="border rounded-lg shadow-lg bg-card p-6 flex flex-col gap-6">
          
          

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="bg-input h-10"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="h-10 pr-10 bg-input"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="h-10 pr-10 bg-input"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 text-white font-medium"
              style={{ backgroundColor: "#5937e0" }}
            >
              {isLoading ? "Creating account..." : "Register"}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Already have an account?</span>
              </div>
            </div>

            <Link
              href="/login"
              className="block text-center text-primary hover:underline"
            >
              Sign In
            </Link>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Secure account creation • Enterprise protection
        </p>
      </div>
    </div>
  );
}
