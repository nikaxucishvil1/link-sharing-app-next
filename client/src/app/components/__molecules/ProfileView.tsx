"use client";

import {
  React,
  Image,
  useWidth,
  ArrowImage,
  imageExampleMan,
  copyToClipboard,
} from "@/app/exports/exports";

const ProfileView = (props: ProfileView) => {
  const { LinksArr, setLinks, setInfos, setPreview } = props;
  const width = useWidth();

  return (
    <main className="p-4 md:flex md:flex-col md:items-center md:justify-center md:gap-24 md:relative">
      {width >= 768 && (
        <div
          className={`absolute ${
            width >= 768 ? "previewBg" : ""
          } bg-[#633CFF] h-[40vh] w-full top-0 z-0 rounded-b-[32px]`}
        ></div>
      )}
      <header className="flex items-center justify-center gap-5 bg-white md:w-full md:justify-between md:p-4 rounded-xl">
        <button
          onClick={() => {
            setLinks(true);
            setPreview(false);
          }}
          className="border border-[#633CFF] px-7 py-3 text-[#633CFF] font-semibold text-[16px] rounded-[8px]"
        >
          Back to Editor
        </button>
        <button onClick={() => {copyToClipboard(`http://localhost:3001/pages/shared?id=${LinksArr?._id}`)}} className="bg-[#633CFF] px-9 py-3 text-white font-semibold text-[16px] rounded-[8px]">
          Share Link
        </button>
      </header>
      <main
        className={`${
          width >= 768 ? "previewCard" : ""
        } md:rounded-3xl md:w-2/3 bg-white`}
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
          <h1 className="text-[#333333] font-bold text-[32px]">
            {LinksArr?.sharedInfo?.firstName && LinksArr?.sharedInfo?.lastName
              ? LinksArr?.sharedInfo?.firstName +
                " " +
                LinksArr?.sharedInfo?.lastName
              : "Ben Wright"}
          </h1>
          <p className="text-[#737373] font-[400] text-[16px]">
            {LinksArr?.sharedInfo?.email
              ? LinksArr.sharedInfo.email
              : "ben@example.com"}
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 flex-col mt-5 pb-5">
          {LinksArr?.ArrayOfLinks.map((item, index) => (
            <button
              key={index}
              className="w-[70%] flex items-center justify-between p-4 rounded-lg"
              style={{ backgroundColor: item.color }}
              onClick={() => {
                copyToClipboard(item.url);
              }}
            >
              <div className="flex items-center justify-center gap-2">
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
    </main>
  );
};

export default ProfileView;