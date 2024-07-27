"use client";
import {
  useWidth,
  phoneLogo,
  MainHeader,
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
  ArrowImage,
} from "./exports";

const AddLinks = () => {
  const width = useWidth();
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

      <div className="flex items-center justify-start flex-col bg-white lg:bg-[#FAFAFA] m-4 rounded-[12px] p-4 gap-10 lg:mt-0 lg:pt-0">
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
            <Form
              className="w-full lg:flex lg:items-center lg:justify-center lg:bg-[#FAFAFA] lg:gap-5 min-h-[716px]"
              autoComplete="off"
            >
              {width >= 1024 && (
                <div className="lg:w-[40%] lg:bg-white h-[100%] lg:flex lg:items-center lg:justify-center lg:p-5 lg:z-0 lg:relative">
                  <Image src={phoneLogo} alt="sum" className="previewBg absolute" />
                </div>
              )}
              <div className="lg:w-[60%] lg:bg-white lg:p-7 lg:h-[100%] lg:flex lg:items-center lg:flex-col lg:justify-between">
                <div className="w-full flex flex-col items-center justify-start gap-2 mb-5">
                  <h1 className="w-full text-[#333333] font-bold text-[24px] md:text-[32px]">
                    Customize your links
                  </h1>
                  <p className="w-full font-[400] text-[#737373] text-[16px]">
                    Add/edit/remove links below and then share all your profiles
                    with the world!
                  </p>
                </div>
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
                            <div className="bg-[#FAFAFA] md:p-10 rounded-[12px]">
                              <div className="flex items-center justify-center ">
                                <Image src={linkExample} alt="sum" />
                              </div>
                              <div className="flex items-center justify-center flex-col gap-6 pb-5">
                                <h1 className="text-[#333333] font-bold text-[24px] md:text-[32px]">
                                  Let’s get you started
                                </h1>
                                <p className="text-[#737373] font-[400] text-[16px] text-center md:max-w-[500px]">
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
                    </div>
                  )}
                </FieldArray>
                <div className="w-full h-[1px] bg-[#D9D9D9] mt-6"></div>
                <div className="md:flex md:items-center md:justify-end lg:justify-end lg:w-full">
                  <button
                    disabled={BtnDisableFoo(
                      isSubmitting,
                      values.linkArr.length
                    )}
                    type="submit"
                    className="w-full md:w-auto md:py-3 md:px-7 bg-[#633CFF] text-[#FFFFFF] font-semibold p-2 text-[16px] rounded-[8px] active:bg-[#BEADFF] disabled:bg-[#BEADFF] mt-6"
                  >
                    {isSubmitting ? "Saving" : "Save"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddLinks;
