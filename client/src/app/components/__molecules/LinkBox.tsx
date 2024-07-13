"use client";
import React, { useState } from "react";
import CustomSelect from "./CutomSelect";
import { LinksData } from "./imageCommon";
import { useFormik } from "formik";
import { CreateLinkValidationSchema } from "@/app/validation/CreateLinkValidationSchema";

const LinkBox = (props: Linkbox) => {
  const { linkIndex } = props;
  const [selectedLink, setSelectedLink] = useState(null);
  const [initialValues] = useState({
    platform: "",
    link: "",
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CreateLinkValidationSchema,
    onSubmit: (values) => {
      const data = {
        platform: values.platform,
        link: values.link,
      };
    },
  });
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-[#737373] font-bold text-[16px]">
            Link #{linkIndex}
          </h1>
          <button
            className="text-[#737373] font-[400] text-[16px]"
            onClick={() => {}}
          >
            Remove
          </button>
        </header>
        <main>
          <div>
            <label className="text-[#333333] font-[400] text-xs">
              Platform
            </label>
            <CustomSelect
              links={LinksData}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
            <label className="text-[#333333] font-[400] text-xs">Link</label>
            <input
              className="w-full text-left px-4 py-2 border border-[#D9D9D9] rounded-[8px] bg-white flex items-center justify-between"
              type="text"
              placeholder="e.g. https://www.github.com/johnappleseed"
              value={values.link}
              name="link"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </main>
      </div>
    </form>
  );
};

export default LinkBox;
