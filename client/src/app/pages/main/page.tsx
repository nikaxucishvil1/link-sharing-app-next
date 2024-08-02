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
  const adress =
    "data:image/jpeg;base64,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";
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
      <div className="w-full flex items-center justify-center gap-4">
        {width >= 1024 && (
          <div className="lg:w-[30%] 2xl:[50%] lg:bg-white lg:h-[716px] lg:flex lg:items-center lg:justify-center lg:z-0 lg:relative flex items-center justify-around flex-col">
            <Image src={phoneLogo} alt="sum" className="previewBg absolute" />
            <div className="w-full flex items-center justify-between mb-28 flex-col h-full gap-10">
              <div className="h-full flex flex-col items-center justify-end gap-7">
                <div className="">
                  <Image
                    className="rounded-full"
                    src={adress}
                    width={100}
                    height={100}
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
