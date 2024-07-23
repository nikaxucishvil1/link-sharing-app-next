import { generateUploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import Image from "next/image";
import uploadImage from "../../public/images/icon-upload-image.svg";
import { useState } from "react";

const UploadButton = generateUploadButton<OurFileRouter>();

const CustomUploadButton = (props: customUploadBtn) => {
  const { imageURL, setImageURL, setFieldValue, name } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative bg-[#EFEBFF] flex items-center justify-center flex-col py-16 px-7 rounded-[12px] w-[70%] border">
      <UploadButton
        endpoint="imageUploader"
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer border"
        onClientUploadComplete={(res) => {
          const url = res[0].url;
          setImageURL(url);
          setFieldValue(name, url);
          console.log(url);
          setLoading(false);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
          setLoading(false);
        }}
        onUploadBegin={() => setLoading(true)}
      />
      {loading ? (
        <div className="flex items-center justify-center flex-col mt-4">
          <p className="text-[#633CFF] font-semibold text-[16px]">
            Uploading...
          </p>
        </div>
      ) : imageURL === "" ? (
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
          src={imageURL}
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
