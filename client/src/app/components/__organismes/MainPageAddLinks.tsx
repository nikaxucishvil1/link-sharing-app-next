"use client";
import { FormikProps } from "formik";
import {
  React,
  Field,
  FieldArray,
  Form,
  Formik,
  CreateLinkValidationSchema,
  linkExample,
  ReactSVG,
  MenuItem,
  Select,
  InputLabel,
  ListItemIcon,
  ListItemText,
  FormHelperText,
  LinksData,
  Image,
  CustomSelect,
  CustomTextField,
  axios,
} from "../../exports/exports";

const MainPageAddLinks = (props: Addlinks) => {
  const { width, LinksArr, reRenderFoo } = props;

  const initialValues = {
    linkArr: LinksArr?.ArrayOfLinks,
  };

  const BtnDisableFoo = (isSubmitting: boolean): boolean => {
    if (isSubmitting) return true;
    return false;
  };
  return (
    <div className="w-full flex items-center justify-start flex-col bg-white lg:bg-[#FAFAFA] rounded-[12px] lg:w-[70%] 2xl:w-[50%] gap-10 lg:mt-0 lg:pt-0 p-4 lg:p-0">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={CreateLinkValidationSchema}
        onSubmit={async (values) => {
          try {
            LinksArr.ArrayOfLinks = values.linkArr;
            const API_KEY = process.env.NEXT_PUBLIC_UPD_API as string;
            await axios.put(`${API_KEY}/${LinksArr?._id}`, LinksArr);
            reRenderFoo();
          } catch (error) {
            console.log("ERROR HAPPENED CONTACT xucishvilin90@gmail.com");
          }
        }}
      >
        {({
          values,
          errors,
          isSubmitting,
          touched,
          setFieldValue,
        }: FormikProps<any>) => (
          <Form className="w-full lg:bg-[#FAFAFA]" autoComplete="off">
            <div className="lg:bg-white lg:p-7 lg:flex lg:items-center lg:flex-col lg:justify-between lg:h-[716px] rounded-[12px]">
              <div className="w-full flex flex-col items-center justify-start gap-2 mb-5">
                <h1 className="bold w-full text-[#333333] font-bold text-[24px] md:text-[32px]">
                  Customize your links
                </h1>
                <p className="regular w-full font-[400] text-[#737373] text-[16px]">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>
              </div>
              <FieldArray name="linkArr">
                {({ push, remove }) => (
                  <div className="w-full flex flex-col gap-4">
                    <button
                      type="button"
                      className="bold w-full border border-[#633CFF] rounded-[8px] text-[#633CFF] font-[600] text-[16px] p-2 active:bg-[#EFEBFF]"
                      onClick={() =>
                        push({
                          url: "",
                          platform: "",
                          color: "",
                          textColor: "",
                          logo: "",
                        })
                      }
                    >
                      add link
                    </button>

                    {values.linkArr.length === 0 && (
                      <div className="w-full">
                        <div className="rounded-[12px] flex flex-col gap-7 w-full">
                          <div className="bg-[#FAFAFA] md:p-10 rounded-[12px]">
                            <div className="flex items-center justify-center">
                              <Image src={linkExample} alt="sum" />
                            </div>
                            <div className="flex items-center justify-center flex-col gap-6 pb-5">
                              <h1 className="bold text-[#333333] font-bold text-[24px] md:text-[32px]">
                                Let’s get you started
                              </h1>
                              <p className="regular text-[#737373] font-[400] text-[16px] text-center md:max-w-[500px]">
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
                    {values.linkArr.length !== 0 && (
                      <div className="flex flex-col gap-5 max-h-[300px] overflow-y-auto">
                        {values.linkArr.map((_item: any, index: number) => (
                          <div
                            key={index}
                            className="px-4 py-6 bg-[#FAFAFA] rounded-[12px] flex flex-col gap-4"
                          >
                            <div className="w-full flex items-center justify-between">
                              <h1 className="bold text-[#737373] font-bold text-[16px]">
                                Link #{index + 1}
                              </h1>
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="regular text-[#737373] font-[400] text-[16px]"
                              >
                                Remove
                              </button>
                            </div>
                            <div className="w-full flex items-center justify-start">
                              <CustomSelect
                                size="small"
                                className="bold m-0 p-0"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={Boolean(
                                  touched.linkArr &&
                                    Array.isArray(touched.linkArr) &&
                                    touched.linkArr[index]?.platform &&
                                    errors.linkArr &&
                                    Array.isArray(errors.linkArr) &&
                                    (errors.linkArr[index] as any)?.platform
                                )}
                              >
                                <InputLabel>Select Platform</InputLabel>
                                <Select
                                  name={`linkArr[${index}].platform`}
                                  value={values.linkArr[index].platform}
                                  onChange={(event) => {
                                    const getColors = LinksData.find(
                                      (item) => item.name === event.target.value
                                    );

                                    setFieldValue(
                                      `linkArr[${index}].platform`,
                                      event.target.value
                                    );
                                    setFieldValue(
                                      `linkArr[${index}].color`,
                                      getColors?.color
                                    );
                                    setFieldValue(
                                      `linkArr[${index}].logo`,
                                      getColors?.logo
                                    );
                                    setFieldValue(
                                      `linkArr[${index}].textColor`,
                                      getColors?.textColor
                                    );
                                  }}
                                  renderValue={(selected) => {
                                    const selectedItem = LinksData.find(
                                      (item) => item.name === selected
                                    );

                                    return (
                                      <div className="flex items-center justify-center">
                                        <ListItemIcon className="flex items-center justify-center">
                                          <ReactSVG
                                            src={selectedItem?.logo.src}
                                          />
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
                                  {touched.linkArr &&
                                    Array.isArray(touched.linkArr) &&
                                    touched.linkArr[index]?.platform &&
                                    errors.linkArr &&
                                    Array.isArray(errors.linkArr) &&
                                    (errors.linkArr[index] as any)?.platform}
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
                                  touched.linkArr &&
                                    Array.isArray(touched.linkArr) &&
                                    touched.linkArr[index]?.url &&
                                    errors.linkArr &&
                                    Array.isArray(errors.linkArr) &&
                                    (errors.linkArr[index] as any)?.url
                                )}
                                helperText={
                                  touched.linkArr &&
                                  Array.isArray(touched.linkArr) &&
                                  touched.linkArr[index]?.url &&
                                  errors.linkArr &&
                                  Array.isArray(errors.linkArr) &&
                                  (errors.linkArr[index] as any)?.url
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </FieldArray>
              <div className="w-full h-[1px] bg-[#D9D9D9] mt-6"></div>
              <div className="md:flex md:items-center md:justify-end lg:justify-between lg:w-full">
                {width > 1024 && (
                  <p className="regular mt-6 text-[#737373] font-[400] text-[16px]">
                    Save changes to see preview on the phone
                  </p>
                )}
                <button
                  disabled={BtnDisableFoo(isSubmitting)}
                  type="submit"
                  className="bold   w-full md:w-auto md:py-3 md:px-7 bg-[#633CFF] text-[#FFFFFF] font-semibold p-2 text-[16px] rounded-[8px] active:bg-[#BEADFF] disabled:bg-[#BEADFF] mt-6"
                >
                  {isSubmitting ? "Saving" : "Save"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MainPageAddLinks;
