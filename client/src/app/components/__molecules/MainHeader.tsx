"use client";
import Image from "next/image";
import React, { useState } from "react";
import smallLogo from "../../../../public/images/logo-devlinks-small.svg";
import eyeLogo from "../../../../public/images/icon-preview-header.svg";
import detailsLogo from "../../../../public/images/icon-profile-details-header.svg";
import linkLogo from "../../../../public/images/icon-links-header.svg";
import largeLogo from "../../../../public/images/logo-devlinks-large.svg";
import useWidth from "@/hooks/useWidth";

const MainHeader = (props: MainHeader) => {
  const { links, setLinks, infos, setInfos, setPreview } = props;

  const width = useWidth();
  const getLogo = (width: number) => {
    return width >= 768 ? largeLogo : smallLogo;
  };

  return (
    <div className="w-full flex items-center justify-between p-4 bg-white md:rounded-lg lg:mb-2">
      <div className="w-full flex items-center justify-start">
        <Image src={getLogo(width)} alt="logo" />
      </div>
      <div className="flex items-center justify-center w-full gap-1">
        <button
          onClick={() => {
            setInfos(false);
            setLinks(true);
            setPreview(false);
          }}
          className={
            links
              ? "w-full flex items-center justify-center bg-[#EFEBFF] rounded-[8px] p-3 gap-2"
              : "w-full flex items-center justify-center  rounded-[8px] p-3 gap-2"
          }
        >
          <Image
            className={links ? "LinkDetailsLogo" : ""}
            src={linkLogo}
            alt="link"
          />
          {width >= 768 && (
            <p
              className={
                links
                  ? "bold text-[#633CFF] font-semibold text-[16px]"
                  : "bold text-[#737373] font-semibold text-[16px]"
              }
            >
              Links
            </p>
          )}
        </button>
        <button
          onClick={() => {
            setInfos(true);
            setLinks(false);
            setPreview(false);
          }}
          className={
            infos
              ? "w-full flex items-center justify-center bg-[#EFEBFF] rounded-[8px] p-3 gap-2"
              : "w-full flex items-center justify-center  rounded-[8px] p-3 gap-2"
          }
        >
          <Image
            src={detailsLogo}
            alt="profile"
            className={infos ? "LinkDetailsLogo" : ""}
          />
          {width >= 768 && (
            <p
              className={
                infos
                  ? " bold text-[#633CFF] font-semibold text-[16px] min-w-[107.33px] text-center"
                  : "bold text-[#737373] font-semibold text-[16px] min-w-[107.33px] text-center"
              }
            >
              Profile Details
            </p>
          )}
        </button>
      </div>
      <div className="w-full flex items-center justify-end">
        <button
          onClick={() => {
            setPreview(true);
            setInfos(false);
            setLinks(false);
          }}
          className={`w-[${width >= 768 ? "100%" : "30px"}] h-[${
            width >= 768 ? "100%" : "30px"
          }] border border-[#633CFF] rounded-[8px] flex items-center justify-center ${
            width >= 768 ? "py-3 px-7" : ""
          }`}
        >
          {width >= 768 ? (
            <p className="bold text-[#633CFF] font-semibold text-[16px]">Preview</p>
          ) : (
            <Image src={eyeLogo} alt="preview" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
