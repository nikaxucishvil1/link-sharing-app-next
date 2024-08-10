"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import {
  Image,
  useWidth,
  imageExampleMan,
  ArrowImage,
  copyToClipboard,
  Loader,
} from "@/app/exports/exports";

const SharedPageContent = () => {
  const width = useWidth();
  const [LinksArr, setLinksArr] = useState<any>();
  const [loader, setLoader] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const getData = async (id: string | null) => {
    if (!id) return;
    try {
      setLoader(true);
      const API_KEY = process.env.NEXT_PUBLIC_SHARED_API;
      const response = await axios.get(`${API_KEY}?id=${id}`);

      setLinksArr(response.data);
    } catch (error: any) {
      if (error.response.status === 404) {
        setNotFound(true);
        setLoader(false);
      }
      console.log("ERROR HAPPENED CONTACT xucishvilin90@gmail.com");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  if (loader) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="bold text-[32px]">404 | PAGE NOT FOUND</h1>
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {width >= 768 && (
        <div
          className={`absolute ${
            width >= 768 ? "previewBg" : ""
          } bg-[#633CFF] h-[40vh] w-full top-0 z-0 rounded-b-[32px]`}
        ></div>
      )}
      <main
        className={`${
          width >= 768 ? "previewCard" : ""
        } md:rounded-3xl md:w-2/3 bg-white pb-16`}
      >
        <div className="flex items-center justify-center flex-col gap-3">
          <div className="border-[#633CFF] border-[0.25rem] rounded-full overflow-hidden w-[7rem] h-[7rem] flex items-center justify-center flex-col mt-10 gap-3">
            <Image
              className="rounded-full"
              src={
                LinksArr?.sharedInfo?.url
                  ? LinksArr.sharedInfo.url
                  : imageExampleMan
              }
              width={104}
              height={104}
              alt="sum"
              style={{ width: "104px", height: "104px" }}
            />
          </div>
          <h1 className="bold text-[#333333] font-bold text-[32px]">
            {LinksArr?.sharedInfo?.firstName && LinksArr?.sharedInfo?.lastName
              ? LinksArr?.sharedInfo?.firstName +
                " " +
                LinksArr?.sharedInfo?.lastName
              : "Ben Wrigh"}
          </h1>
          <p className="regular text-[#737373] font-[400] text-[16px]">
            {LinksArr?.sharedInfo?.email
              ? LinksArr.sharedInfo.email
              : "ben@example.com"}
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 flex-col mt-5 pb-5">
          {LinksArr?.ArrayOfLinks.map((item: any, index: number) => (
            <button
              onClick={() => {
                copyToClipboard(item.url);
              }}
              key={index}
              className="w-[70%] flex items-center justify-between p-4 rounded-lg"
              style={{ backgroundColor: item.color }}
            >
              <div className="bold flex items-center justify-center gap-2">
                <Image className="imageLogo" src={item.logo} alt="image" />
                <p className="" style={{ color: item.textColor }}>
                  {item.platform}
                </p>
              </div>
              <div>
                <Image src={ArrowImage} alt="sum" />
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

const SharedPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <SharedPageContent />
    </Suspense>
  );
};

export default SharedPage;
