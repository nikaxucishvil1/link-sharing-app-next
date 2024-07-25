"use client";
import React, { useState } from "react";
import { LinksData } from "@/app/components/__molecules/imageCommon";
import Image from "next/image";
import ArrowImage from "../../../../public/images/icon-arrow-right.svg";
import Link from "next/link";

const page = () => {
  const [linksDatas] = useState(LinksData);
  const [copySuccess, setCopySuccess] = useState("");

  const data = {
    image: "https://utfs.io/f/21f5ba47-7878-4c77-8359-a9c71b3bad42-sfast1.png",
    name: "Ben Wright",
    email: "Ben@gmail.com",
  };

  const copyToClipboard = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied!");
      alert(`copied ${text}`);
    } catch (err) {
      setCopySuccess("Failed to copy!");
      console.error("Error copying to clipboard:", err);
    }
  };

  return (
    <main className="p-4">
      <header className="flex items-center justify-center gap-5">
        <Link href={"/pages/main/profileDetails"} className="border border-[#633CFF] px-7 py-3 text-[#633CFF] font-semibold text-[16px] rounded-[8px]">
          Back to Editor
        </Link>
        <button className="bg-[#633CFF] px-9 py-3 text-white font-semibold text-[16px] rounded-[8px]">
          Share Link
        </button>
      </header>
      <main>
        <div className="flex items-center justify-center flex-col mt-7 gap-3">
          <div className="border-[#633CFF] border-[0.25rem] rounded-full overflow-hidden w-[7rem] h-[7rem] flex items-center justify-center flex-col mt-10 gap-3">
            <Image
              src={data.image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[100%]"
            />
          </div>
          <h1 className="text-[#333333] font-bold text-[32px]">{data.name}</h1>
          <p className="text-[#737373] font-[400] text-[16px]">{data.email}</p>
        </div>
        <div className="flex items-center justify-center gap-5 flex-col mt-5">
          {linksDatas.map((item, index) => (
            <button
              className="w-[70%] flex items-center justify-between p-4 rounded-lg"
              style={{ backgroundColor: item.color }}
              onClick={() => {copyToClipboard(item.name)}}
            >
              <div className="flex items-center justify-center gap-2">
                <Image className="imageLogo" src={item.logo} alt="image" />
                <p className="" style={{ color: item.textColor }}>
                  {item.name}
                </p>
              </div>
              <div>
                <Image src={ArrowImage} alt="sum" />
              </div>
            </button>
          ))}
        </div>
      </main>
    </main>
  );
};

export default page;
