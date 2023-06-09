import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/logo";
import MailIcon from "@/icons/mail";
import LockIcon from "@/icons/lock";
import EyeClosedIcon from "@/icons/eye-closed";
import Link from "next/link";
import PersonIcon from "@/icons/person";

export default function SignUp() {
  return (
    <main className="min-h-screen w-full">
      <div className="max-w-sm w-full mx-auto p-8 pt-12">
        <div className="flex flex-col items-center gap-y-4">
          <Logo />
          <h5 className="text-lg text-gray-600">Sign In to continue</h5>
          <div className="h-8"></div>
          <div className="border focus-within:border-2 rounded-lg w-full focus-within:border-primary-dark border-primary-light h-12 flex items-center px-4">
            <PersonIcon className="stroke-gray-400" strokeWidth={1} />
            <input
              className="rounded-lg h-full w-full focus:outline-none  px-1 pb-1 placeholder-[#9999A7] placeholder:font-light placeholder:text-sm "
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="border focus-within:border-2 rounded-lg w-full focus-within:border-primary-dark border-primary-light h-12 flex items-center px-4">
            <MailIcon />
            <input
              className="rounded-lg h-full w-full focus:outline-none  px-1 pb-1 placeholder-[#9999A7] placeholder:font-light placeholder:text-sm "
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="border focus-within:border-2 rounded-lg w-full focus-within:border-primary-dark border-primary-light h-12 flex items-center px-4">
            <LockIcon />
            <input
              className="rounded-lg h-full w-full focus:outline-none  px-1 pb-1 placeholder-[#9999A7] placeholder:font-light placeholder:text-sm "
              type="password"
              placeholder="Your Password"
            />
            <EyeClosedIcon />
          </div>
          <div className="border focus-within:border-2 rounded-lg w-full focus-within:border-primary-dark border-primary-light h-12 flex items-center px-4">
            <LockIcon />
            <input
              className="rounded-lg h-full w-full focus:outline-none  px-1 pb-1 placeholder-[#9999A7] placeholder:font-light placeholder:text-sm "
              type="password"
              placeholder="Confirm Password"
            />
            <EyeClosedIcon />
          </div>
          <div className="flex items-center gap-x-4 w-full">
            <input type="checkbox" className="h-8 w-8  accent-primary-dark" />
            <span className="text-sm  text-gray-400">
              By creating an account you agree to the{" "}
              <Link href="#" className="text-primary-dark font-medium">
                terms of use
              </Link>{" "}
              and our{" "}
              <Link href="#" className="text-primary-dark font-medium">
                privacy policy
              </Link>
              .
            </span>
          </div>
          <Link
            href="/home"
            className="text-lg text-center text-white w-full rounded-lg py-3 bg-gradient-to-r from-primary-light to-primary-dark"
          >
            Sign Up
          </Link>
          <div className="text-gray-700 text-sm">
            Already have any account?{" "}
            <Link href="/sign-in" className="text-primary-dark font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
