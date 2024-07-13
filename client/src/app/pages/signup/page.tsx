"use client";
import React from "react";
import Logo from "../../../../public/images/logo-devlinks-large.svg";
import Image from "next/image";
import LoginInput from "@/app/components/__molecules/LoginInput";
import Link from "next/link";
import { useFormik } from "formik";
import { RegisterValidationSchema } from "@/app/validation/RegisterValidationSchema";

const Page = () => {
  const initialValues = {
    email: "",
    password: "",
    repeatedPassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      window.location.href = "/";
      console.log(data);
      console.log("Submitting form with validated data...");
    },
  });

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className="md:flex md:items-center md:justify-center h-screen md:bg-[#FAFAFA]"
    >
      <main className="p-4 flex items-center justify-center flex-col md:w-[70%] md:gap-7 xl:w-[40%] xl:gap-12 2xl:w-[30%]">
        <div className="w-full md:flex md:items-center md:justify-center">
          <Image src={Logo} alt="image" />
        </div>
        <div className="md:bg-white w-full md:rounded-[12px] md:p-4">
          <div className="w-full mt-16 flex flex-col gap-2 md:mt-8">
            <h1 className="text-[#333333] font-bold text-[24px] md:text-[32px]">
              Create account
            </h1>
            <p className="text-[#737373] font-[400] text-[16px]">
              Let’s get you started sharing your links!
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center mt-8 gap-6">
            <LoginInput
              type="email"
              label="Email address"
              placeholder="e.g. alex@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              errorsEmail={errors.email}
              touchedEmail={touched.email}
            />
            {errors.email && touched.email && (
              <p className="text-[#FF3939] text-[16px] font-[400]">
                {errors.email}
              </p>
            )}
            <LoginInput
              type="password"
              label="Create password"
              placeholder="At least 8 characters"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              errorsEmail={errors.password}
              touchedEmail={touched.password}
            />
            {errors.password && touched.password && (
              <p className="text-[#FF3939] text-[16px] font-[400]">
                {errors.password}
              </p>
            )}
            <LoginInput
              type="password"
              label="Confirm password"
              placeholder="At least 8 characters"
              value={values.repeatedPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="repeatedPassword"
              errorsEmail={errors.repeatedPassword}
              touchedEmail={touched.repeatedPassword}
            />
            {errors.repeatedPassword && touched.repeatedPassword && (
              <p className="text-[#FF3939] text-[16px] font-[400]">
                {errors.repeatedPassword}
              </p>
            )}
            <div>
              <p className="text-[#737373] font-[400] text-[14px]">
                Password must contain at least 8 characters
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#633CFF] text-[#FFFFFF] font-semibold p-3 text-[16px] rounded-[8px] active:bg-[#BEADFF] "
            >
              Create new account
            </button>
            <div className="w-full flex flex-col items-center justify-center md:flex-row gap-2">
              <p className="text-[#737373] font-[400] text-[16px]">
                Already have an account?
              </p>
              <Link href="./login" className="text-[#633CFF] font-[400]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
};

export default Page;
