import React from "react";
import Logo from "../../../../public/images/logo-devlinks-large.svg";
import Image from "next/image";
import LoginInput from "@/app/components/__molecules/LoginInput";
import Link from "next/link";

const page = () => {
  return (
    <main className="p-4 flex items-center justify-center flex-col">
      <div className="w-full ">
        <Image src={Logo} alt="image" />
      </div>
      <div className="mt-16 flex flex-col gap-2">
        <h1 className="text-[#333333] font-bold text-[24px]">Login</h1>
        <p className="text-[#737373] font-[400] text-[16px]">
          Add your details below to get back into the app
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-4 mt-8">
        <LoginInput
          type={"email"}
          label={"Email address"}
          placeholder={"e.g. alex@email.com"}
        />
        <LoginInput
          type={"password"}
          label={"Password"}
          placeholder={"Enter your password"}
        />
        <button className="w-full bg-[#633CFF] text-[#FFFFFF] font-semibold p-3 text-[16px] rounded-[8px]">
          Login
        </button>
        <div className="w-full felx flex-col items-center justify-center">
          <p className="flex items-center justify-center text-[#737373] font-[400] text-[16px]">
            Don’t have an account?
          </p>
          <Link
            className="flex items-center justify-center text-[#633CFF] font-[400] text-[16px]"
            href={"signup"}
          >
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
