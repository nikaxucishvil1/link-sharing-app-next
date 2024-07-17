"use client";
import React, { useState } from "react";
import Logo from "../../../../public/images/logo-devlinks-large.svg";
import Image from "next/image";
import LoginInput from "@/app/components/__molecules/LoginInput";
import Link from "next/link";
import { useFormik } from "formik";
import { LoginValidationSchema } from "@/app/validation/LoginValidationSchema";

const Login = () => {
  const [initialValues] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidationSchema,
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
              Login
            </h1>
            <p className="text-[#737373] font-[400] text-[16px]">
              Add your details below to get back into the app
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4 mt-8 2xl:gap-8">
            <LoginInput
              type={"email"}
              label={"Email address"}
              placeholder={"e.g. alex@email.com"}
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
              type={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
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
            <button
              type="submit"
              className="w-full bg-[#633CFF] text-[#FFFFFF] font-semibold p-3 text-[16px] rounded-[8px] active:bg-[#BEADFF]"
            >
              Login
            </button>
            <div className="w-full flex flex-col items-center justify-center md:flex-row gap-2">
              <p className="flex items-center justify-center text-[#737373] font-[400] text-[16px]">
                Don’t have an account?
              </p>
              <Link
                className="flex items-center justify-center text-[#633CFF] font-[400] text-[16px]"
                href={"signup"}
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
};

export default Login;
