"use client";
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
  imageExampleMan,
  MainPageInfo,
  MainPageAddLinks,
  ProfileView,
  React,
  Loader,
} from "@/app/exports/exports";

const Main = () => {
  const [links, setLinks] = useState(true);
  const [infos, setInfos] = useState(false);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(true);

  const width = useWidth();

  const [LinksArr, setLinksArr] = useState<any>({
    sharedInfo: {},
    ArrayOfLinks: [],
  });

  const getData = async () => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/pages/login";
      return;
    }
    const AuthStr = `Bearer ${token}`;
    const API_KEY = process.env.NEXT_PUBLIC_CHECK_LOGIN_API as string;

    try {
      setLoading(true);
      const response = await axios.get(API_KEY, {
        headers: { Authorization: AuthStr },
      });
      setLinksArr(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Text ${text} copied to clipboard`);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return preview ? (
    <ProfileView
      setInfos={setInfos}
      setLinks={setLinks}
      setPreview={setPreview}
      LinksArr={LinksArr}
    />
  ) : (
    <div className="flex items-center justify-start flex-col md:gap-4 bg-[#FAFAFA] md:p-4 h-screen">
      <MainHeader
        infos={infos}
        setInfos={setInfos}
        setPreview={setPreview}
        links={links}
        setLinks={setLinks}
      />
      <div className="w-full flex items-center justify-center gap-4 p-4">
        {width >= 1024 && (
          <div className="lg:w-[30%] 2xl:[50%] lg:bg-white lg:h-[716px] lg:flex lg:items-center lg:justify-center lg:z-0 lg:relative flex items-center justify-around flex-col rounded-[12px]">
            <Image src={phoneLogo} alt="sum" className="previewBg absolute" />
            <div className="w-[308px] h-[608px] flex items-center justify-center flex-col gap-2">
              <div className="h-[35%] flex flex-col items-center justify-center gap-3">
                <div className="">
                  <Image
                    className="rounded-full"
                    src={LinksArr.sharedInfo?.url || imageExampleMan}
                    width={104}
                    height={104}
                    alt="sum"
                    style={{ width: "104px", height: "104px" }}
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-[#333333] text-[18px] font-semibold">
                    {LinksArr?.sharedInfo?.firstName &&
                    LinksArr?.sharedInfo?.lastName
                      ? LinksArr?.sharedInfo?.firstName +
                        " " +
                        LinksArr?.sharedInfo?.lastName
                      : "Ben Wright"}
                  </p>
                  <p className="text-[#737373] text-[14px] font-[400]">
                    {LinksArr?.sharedInfo?.email
                      ? LinksArr.sharedInfo.email
                      : "ben@example.com"}
                  </p>
                </div>
              </div>
              <div className="scrollBar h-[65%] max-h-[336px] w-full px-7 flex flex-col items-center justify-start overflow-y-auto gap-3">
                {LinksArr.ArrayOfLinks &&
                  LinksArr.ArrayOfLinks.length > 0 &&
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

        {links && (
          <MainPageAddLinks
            reRenderFoo={getData}
            width={width}
            LinksArr={LinksArr}
          />
        )}
        {infos && (
          <MainPageInfo
            reRenderFoo={getData}
            width={width}
            LinksArr={LinksArr}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
