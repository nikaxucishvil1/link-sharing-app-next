"use client";
import Image from "next/image";
import React from "react";
import smallLogo from "../../../../public/images/logo-devlinks-small.svg";
import eyeLogo from "../../../../public/images/icon-preview-header.svg";
import detailsLogo from "../../../../public/images/icon-profile-details-header.svg";
import linkLogo from "../../../../public/images/icon-links-header.svg";

const MainHeader = (props: MainHeader) => {
  const { link, profile } = props;

  return (
    <div className="grid grid-cols-3 p-4 bg-white">
      <div className="w-full flex items-center justify-start">
        <Image src={smallLogo} alt="sum" />
      </div>
      <div className="flex items-center justify-center w-full gap-1">
        <div
          className={
            link
              ? "w-full flex items-center justify-center bg-[#EFEBFF] rounded-[8px] p-3"
              : "w-full flex items-center justify-center  rounded-[8px] p-3"
          }
        >
          <Image src={linkLogo} alt="sum" />
        </div>
        <div
          className={
            profile
              ? "w-full flex items-center justify-center bg-[#EFEBFF] rounded-[8px] p-3"
              : "w-full flex items-center justify-center  rounded-[8px] p-3"
          }
        >
          <Image src={detailsLogo} alt="sum" />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="w-[30px] h-[30px] border border-[#633CFF] rounded-[8px] flex items-center justify-center">
          <Image src={eyeLogo} alt="sum" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
