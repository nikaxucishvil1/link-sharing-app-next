"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/images/logo-devlinks-large.svg";
import Image from "next/image";
import LoginInput from "@/app/components/__molecules/LoginInput";
import Link from "next/link";
import { useFormik } from "formik";
import { LoginValidationSchema } from "@/app/validation/LoginValidationSchema";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [initialValues] = useState({
    email: "",
    password: "",
  });

  const checkLogin = async () => {
    const token = Cookies.get("token");
    const AuthStr = `Bearer ${token}`;
    const API_KEY = process.env.NEXT_PUBLIC_CHECK_LOGIN_API as string;
    try {
      const response = await axios.get(API_KEY, {
        headers: { Authorization: AuthStr },
      });
      if (response.status === 200) {
        window.location.href = "/pages/main"
      }
    } catch (error) {
      console.log("ERROR HAPPENED CONTACT xucisvhilin90@gmail.com");
    }
  };
  useEffect(() => {
    checkLogin()
  },[])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_LOGIN_API as string;
        const data = {
          email: values.email,
          password: values.password,
        };
        const response = await axios.post(API_KEY, data);
        const token = response.data.token;
        const expiresIn = response.data.expireDay;
        Cookies.set("token", token, { expires: expiresIn, path: "" });
        window.location.href = "/pages/main";
      } catch (error: any) {
        if (error.response.data.message === "User not found") {
          alert("USER NOT FOUND");
          resetForm();
        }else if(error.response.data.message === "password not correct") {
          alert("INCORRECT PASSWORD")
        }else {
          console.log("ERROR HAPPENED CONTACT xucishvilin90@gmail.com");
        }
      }
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
