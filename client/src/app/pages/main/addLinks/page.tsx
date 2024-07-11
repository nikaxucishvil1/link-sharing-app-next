import MainHeader from "@/app/components/__molecules/MainHeader";
import Image from "next/image";
import React from "react";
import linkExample from "../../../../../public/images/illustration-empty.svg";

const page = () => {
  const BackidanMosuliArr = [];
  return (
    <div className="bg-[#FAFAFA] w-full h-screen flex flex-col gap-2">
      <MainHeader link={true} profile={false} />

      <div className="flex items-center justify-start flex-col bg-white m-4 rounded-[12px] p-4 gap-10">
        <div className="flex flex-col items-center justify-start gap-2">
          <h1 className="w-full text-[#333333] font-bold text-[24px]">
            Customize your links
          </h1>
          <p className="w-full font-[400] text-[#737373] text-[16px]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <button className="w-full border border-[#633CFF] rounded-[8px] text-[#633CFF] font-[600] text-[16px] p-2 active:bg-[#EFEBFF]">
          + Add new link
        </button>
        <div>
          <div className="flex items-center justify-center">
            <Image src={linkExample} alt="sum" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-[#333333] font-bold text-[24px]">Let’s get you started</h1>
            <p className="text-[#737373] font-[400] text-[16px] text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
