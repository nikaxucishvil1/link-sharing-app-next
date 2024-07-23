"use client";
import MainHeader from "@/app/components/__molecules/MainHeader";
import React, { useState } from "react";
import { Field, Form, Formik, FormikErrors } from "formik";
import { ProfileInfoValidationSchema } from "@/app/validation/ProfileInfoValidationSchema";
import { CustomTextField } from "@/app/styles/common";
import CustomUploadButton from "@/utils/uploadthing";

const ProfileDetails = () => {
  const [imageURL, setImageURL] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    imageURL: imageURL,
  };

  const BtnDisableFoo = (
    isSubmitting: Boolean,
    errors: FormikErrors<BtnDisableFormikErrors>
  ) => {
    if (isSubmitting) return true;
    if (
      errors.firstName ||
      errors.lastName ||
      errors.email ||
      errors.imageURL
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="bg-[#FAFAFA] w-full h-auto flex flex-col gap-2">
      <MainHeader link={false} profile={true} />
      <div className="flex items-center justify-start flex-col bg-white m-4 rounded-[12px] p-4 gap-10">
        <div className="flex flex-col items-center justify-start gap-2">
          <h1 className="w-full text-[#333333] font-bold text-[24px]">
            Profile Details
          </h1>
          <p className="w-full font-[400] text-[#737373] text-[16px]">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={ProfileInfoValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log("Submitted data:", values);
            setImageURL("");
            resetForm({
              values: initialValues,
            });
          }}
        >
          {({ errors, isSubmitting, touched, setFieldValue }) => (
            <Form className="flex flex-col items-center justify-center gap-6">
              <div className="bg-[#FAFAFA] p-4 w-full rounded-[12px] flex flex-col gap-5">
                <h1 className="text-[#737373] font-[400] text-[16px]">
                  Profile picture
                </h1>
                <CustomUploadButton
                  imageURL={imageURL}
                  setImageURL={setImageURL}
                  setFieldValue={setFieldValue}
                  name="imageURL"
                />
                {errors.imageURL ? (
                  <p className="text-[#FF3939]">{errors.imageURL}</p>
                ) : null}
                <p className="text-[#737373] font-[400] text-[16px]">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>

              <div className="w-full p-4 flex flex-col items-center justify-center gap-5 bg-[#FAFAFA] rounded-[12px]">
                <Field
                  size="small"
                  color="secondary"
                  name="firstName"
                  className="m-0"
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
                  name="lastName"
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
                  name="email"
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
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProfileDetails;
