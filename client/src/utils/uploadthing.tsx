import Image from "next/image";
import uploadImage from "../../public/images/icon-upload-image.svg";
import { useState } from "react";


const CustomUploadButton = (props: customUploadBtn) => {
  let { url, setFieldValue, name } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-[#EFEBFF] flex items-center justify-center flex-col py-16 px-7 rounded-[12px] w-[70%] border md:w-full lg:py-10 xl:py-8 2xl:py-7">
      {loading ? (
        <div className="flex items-center justify-center flex-col mt-4">
          <p className="text-[#633CFF] font-semibold text-[16px]">
            Uploading...
          </p>
        </div>
      ) : url === "" ? (
        <div className="flex items-center justify-center flex-col mt-4 pointer-events-none">
          <Image
            src={uploadImage}
            alt="Upload Placeholder"
            width={64}
            height={64}
          />
          <p className="text-[#633CFF] font-semibold text-[16px]">
            + Upload Image
          </p>
        </div>
      ) : (
        <Image
          src={url}
          alt="Uploaded"
          layout="fill"
          objectFit="cover"
          className="rounded-[12px]"
        />
      )}
    </div>
  );
};

export default CustomUploadButton;
