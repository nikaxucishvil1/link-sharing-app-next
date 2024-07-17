"use client";
import MainHeader from "@/app/components/__molecules/MainHeader";
import React from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import { CreateLinkValidationSchema } from "@/app/validation/CreateLinkValidationSchema";
import linkExample from "../../../../../public/images/illustration-empty.svg";
import { ReactSVG } from "react-svg";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  ListItemIcon,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import { LinksData } from "@/app/components/__molecules/imageCommon";
import Image from "next/image";
import { CustomTextField } from "../profileDetails/page";
import { styled } from "@mui/system";


const page = () => {
  const CustomSelect = styled(FormControl)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#d9d9d9",
      },
      "&:hover fieldset": {
        borderColor: "#a0a0a0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#633CFF",
        boxShadow: "0 0 8px rgba(99, 60, 255, 0.5)", // Focus shadow
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#633CFF", // Ensure label color matches the focus color
      },
    },
  });

  const initialValues: LinkBoxFormikInitialValuesARR = {
    linkArr: [],
  };

  const BtnDisableFoo = (isSubmitting: Boolean, length: number) => {
    if (isSubmitting) return true;

    if (length === 0) return true;

    return false;
  };

  return (
    <div className="bg-[#FAFAFA] w-full h-screen flex flex-col gap-2">
      <MainHeader link={true} profile={false} />

      <div className="flex items-center justify-start flex-col bg-white m-4 rounded-[12px] p-4 gap-10">
        <div className="flex flex-col items-center justify-start gap-2">
          <h1 className="w-full text-[#333333] font-bold text-[24px]">
            Customize your links
          </h1>
          <p className="w-full font-[400] text-[#737373] text-[16px]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={CreateLinkValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log("data gaigzavna", values.linkArr);
            resetForm({
              values: {
                linkArr: [],
              },
            });
          }}
        >
          {({ values, errors, isSubmitting, touched, setFieldValue }) => (
            <Form className="w-full" autoComplete="off">
              <FieldArray name="linkArr">
                {({ push, remove }) => (
                  <div className="w-full flex flex-col gap-4">
                    <button
                      type="button"
                      className="w-full border border-[#633CFF] rounded-[8px] text-[#633CFF] font-[600] text-[16px] p-2 active:bg-[#EFEBFF]"
                      onClick={() => push({ url: "", platform: "" })}
                    >
                      add link
                    </button>

                    {values.linkArr.length === 0 && (
                      <div className="w-full">
                        <div className="rounded-[12px] flex flex-col gap-7 w-full">
                          <div>
                            <div className="flex items-center justify-center ">
                              <Image src={linkExample} alt="sum" />
                            </div>
                            <div className="flex items-center justify-center flex-col gap-6">
                              <h1 className="text-[#333333] font-bold text-[24px]">
                                Let’s get you started
                              </h1>
                              <p className="text-[#737373] font-[400] text-[16px] text-center">
                                Use the “Add new link” button to get started.
                                Once you have more than one link, you can
                                reorder and edit them. We’re here to help you
                                share your profiles with everyone!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {values.linkArr.map((_item, index) => (
                      <div
                        key={index}
                        className="px-4 py-6 bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4"
                      >
                        <div className="w-full flex items-center justify-between">
                          <h1 className="text-[#737373] font-bold text-[16px]">
                            Link #{index + 1}
                          </h1>
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-[#737373] font-[400] text-[16px]"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="w-full flex items-center justify-start">
                          <CustomSelect
                            size="small"
                            className="m-0 p-0"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={Boolean(
                              touched.linkArr?.[index]?.platform &&
                                (
                                  errors.linkArr?.[
                                    index
                                  ] as LinkBoxFormikInitialValuesOBJ
                                )?.platform
                            )}
                          >
                            <InputLabel>Select Platform</InputLabel>
                            <Select
                              name={`linkArr[${index}].platform`}
                              value={values.linkArr[index].platform}
                              onChange={(event) =>
                                setFieldValue(
                                  `linkArr[${index}].platform`,
                                  event.target.value
                                )
                              }
                              renderValue={(selected) => {
                                const selectedItem = LinksData.find(
                                  (item) => item.name === selected
                                );

                                return (
                                  <div className="flex items-center justify-center">
                                    <ListItemIcon className="flex items-center justify-center">
                                      <ReactSVG src={selectedItem?.logo.src} />
                                    </ListItemIcon>
                                    <ListItemText>
                                      {selectedItem?.name}
                                    </ListItemText>
                                  </div>
                                );
                              }}
                              label="Select Platform"
                            >
                              {LinksData.map((item, i) => (
                                <MenuItem key={i} value={item.name}>
                                  <ListItemIcon>
                                    <ReactSVG src={item.logo.src} />
                                  </ListItemIcon>
                                  <ListItemText>{item.name}</ListItemText>
                                </MenuItem>
                              ))}
                            </Select>

                            <FormHelperText>
                              {touched.linkArr?.[index]?.platform &&
                                (
                                  errors.linkArr?.[
                                    index
                                  ] as LinkBoxFormikInitialValuesOBJ
                                )?.platform}
                            </FormHelperText>
                          </CustomSelect>
                        </div>
                        <div>
                          <Field
                            size="small"
                            className="m-0"
                            name={`linkArr[${index}].url`}
                            label="Link"
                            as={CustomTextField}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={Boolean(
                              touched.linkArr?.[index]?.url &&
                                (
                                  errors.linkArr?.[
                                    index
                                  ] as LinkBoxFormikInitialValuesOBJ
                                )?.url
                            )}
                            helperText={
                              touched.linkArr?.[index]?.url &&
                              (
                                errors.linkArr?.[
                                  index
                                ] as LinkBoxFormikInitialValuesOBJ
                              )?.url
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>
              <div className="w-full h-[1px] bg-[#D9D9D9] mt-6"></div>
              <button
                disabled={BtnDisableFoo(isSubmitting, values.linkArr.length)}
                type="submit"
                className="w-full bg-[#633CFF] text-[#FFFFFF] font-semibold p-2 text-[16px] rounded-[8px] active:bg-[#BEADFF] disabled:bg-[#BEADFF] mt-6"
              >
                {isSubmitting ? "Saving" : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default page;
