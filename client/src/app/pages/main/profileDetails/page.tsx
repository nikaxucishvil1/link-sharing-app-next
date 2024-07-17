"use client";
import MainHeader from "@/app/components/__molecules/MainHeader";
import React, { useState } from "react";
import uploadImage from "../../../../../public/images/icon-upload-image.svg";
import Image from "next/image";
import { Field, Form, Formik, FormikErrors } from "formik";
import { TextField as MuiTextField } from "@mui/material";
import { ProfileInfoValidationSchema } from "@/app/validation/ProfileInfoValidationSchema";
import { styled } from '@mui/system';

export const CustomTextField = styled(MuiTextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#d9d9d9',
    },
    '&:hover fieldset': {
      borderColor: '#a0a0a0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#633CFF',
      boxShadow: '0 0 8px rgba(99, 60, 255, 0.5)', // Focus shadow
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: '#633CFF', // Ensure label color matches the focus color
    },
  },
  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: '#737373', // Placeholder color
      opacity: 1, // Make sure the placeholder is fully opaque
    },
    '&:focus::placeholder': {
      color: 'transparent', // Make placeholder transparent on focus
    },
  },
});
const page = () => {
  const [initialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const BtnDisableFoo = (
    isSubmitting: Boolean,
    errors: FormikErrors<{ firstName: string; lastName: string; email: string }>
  ) => {
    if (isSubmitting) return true;

    if (errors.firstName || errors.lastName || errors.email) {
      return true;
    }

    return false;
  };

  return (
    <div className="bg-[#FAFAFA] w-full h-screen flex flex-col gap-2">
      <MainHeader link={true} profile={false} />
      <div className="flex items-center justify-start flex-col bg-white m-4 rounded-[12px] p-4 gap-10">
        <div className="flex flex-col items-center justify-start gap-2">
          <h1 className="w-full text-[#333333] font-bold text-[24px]">
            Profile Details
          </h1>
          <p className="w-full font-[400] text-[#737373] text-[16px]">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="bg-[#FAFAFA] p-4 w-full rounded-[12px] flex flex-col gap-5">
            <h1 className="text-[#737373] font-[400] text-[16px]">
              Profile picture
            </h1>
            <button className="bg-[#EFEBFF] flex items-center justify-center flex-col py-16 px-7 rounded-[12px] w-[70%]">
              <Image src={uploadImage} alt="sum" />
              <p className="text-[#633CFF] font-semibold text-[16px]">
                + Upload Image
              </p>
            </button>
            <p className="text-[#737373] font-[400] text-[16px]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
          <Formik
            className="bg-[#FAFAFA] p-4"
            initialValues={initialValues}
            validationSchema={ProfileInfoValidationSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log("data gaigzavna", values);
              resetForm({
                values: initialValues,
              });
            }}
          >
            {({ errors, isSubmitting, touched }) => (
              <Form className="w-full p-4 flex flex-col items-center justify-center gap-7 bg-[#FAFAFA] rounded-[12px]">
                <Field
                  size="small"
                  name={`firstName`}
                  label="First name*"
                  as={CustomTextField}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.firstName && errors.firstName}
                  helperText={errors.firstName}
                />
                <Field
                  size="small"
                  color="secondary"
                  className="m-0"
                  name={`lastName`}
                  label="Last name*"
                  as={CustomTextField}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.lastName && errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
                <Field
                  size="small"
                  className="m-0"
                  name={`email`}
                  label="Email"
                  as={CustomTextField}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />

                <button
                  disabled={BtnDisableFoo(isSubmitting, errors)}
                  type="submit"
                  className="w-full bg-[#633CFF] text-[#FFFFFF] font-semibold p-2 text-[16px] rounded-[8px] active:bg-[#BEADFF] disabled:bg-[#BEADFF]"
                >
                  {isSubmitting ? "Saving" : "Save"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default page;
