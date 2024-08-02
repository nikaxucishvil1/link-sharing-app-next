"use client";
import MainPageAddLinks from "@/app/components/__organismes/MainPageAddLinks";
import MainPageInfo from "@/app/components/__organismes/MainPageInfo";
import {
  Image,
  MainHeader,
  phoneLogo,
  useState,
  useWidth,
  Cookies,
  useEffect,
  axios,
  ArrowImage,
} from "@/app/exports/exports";
import React from "react";

const Main = () => {
  const [links, setLinks] = useState(true);
  const [infos, setInfos] = useState(false);

  const width = useWidth();

  const [LinksArr, setLinksArr] = useState<any>();

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Text ${text} copied to clipboard`);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const token = Cookies.get("token");
      if (!token) {
        window.location.href = "/pages/login";
        return;
      }
      const AuthStr = `Bearer ${token}`;
      const API_KEY = process.env.NEXT_PUBLIC_CHECK_LOGIN_API as string;

      try {
        const response = await axios.get(API_KEY, {
          headers: { Authorization: AuthStr },
        });
        setLinksArr(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex items-center justify-start flex-col md:gap-4 bg-[#FAFAFA] md:p-4 h-screen">
      <MainHeader
        infos={infos}
        setInfos={setInfos}
        links={links}
        setLinks={setLinks}
      />
      <div className="w-full flex items-center justify-center gap-4 p-4">
        {width >= 1024 && (
          <div className="lg:w-[30%] 2xl:[50%] lg:bg-white lg:h-[716px] lg:flex lg:items-center lg:justify-center lg:z-0 lg:relative flex items-center justify-around flex-col">
            <Image src={phoneLogo} alt="sum" className="previewBg absolute" />
            <div className="w-full flex items-center justify-between lg:mb-0 mb-28 flex-col h-full gap-10">
              <div className="h-full flex flex-col items-center justify-end gap-7">
                <div className="">
                  <Image
                    className="rounded-full"
                    src={LinksArr?.sharedInfo?.url}
                    width={120}
                    height={120}
                    alt="sum"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-[#333333] text-[18px] font-semibold">
                    Ben Wright
                  </p>
                  <p className="text-[#737373] text-[14px] font-[400]">
                    ben@example.com
                  </p>
                </div>
              </div>
              <div className="h-full flex flex-col items-center justify-center lg:w-[40%] overflow-y-auto 3xl:w-[30%] 4xl:w-[25%] gap-3">
                {LinksArr?.ArrayOfLinks &&
                  LinksArr.ArrayOfLinks.map((item: any, index: number) => {
                    return (
                      <button
                        onClick={() => handleCopyClick(item.url)}
                        className={`flex items-center justify-between w-full p-4 rounded-[12px]`}
                        style={{
                          backgroundColor: item.color,
                          color: item.textColor,
                        }}
                        key={index}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Image src={item.logo} alt="sum" />
                          {item.platform}
                        </div>
                        <div className="flex items-center justify-center">
                          <Image src={ArrowImage} alt="sum" />
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {links && <MainPageAddLinks width={width} LinksArr={LinksArr} />}
        {infos && <MainPageInfo width={width} LinksArr={LinksArr} />}
      </div>
    </div>
  );
};

export default Main;
