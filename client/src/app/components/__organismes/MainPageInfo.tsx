"use client";
import {
  React,
  CustomTextField,
  ProfileInfoValidationSchema,
  FormikErrors,
  Formik,
  Form,
  Field,
  axios,
  Image,
  uploadImage,
} from "../../exports/exports";

const MainPageInfo = (props: MainPageInfo) => {
  const { LinksArr, width, reRenderFoo } = props;

  const initialValues = LinksArr.sharedInfo;

  const BtnDisableFoo = (
    isSubmitting: Boolean,
    errors: FormikErrors<BtnDisableFormikErrors>
  ) => {
    if (isSubmitting) return true;
    if (errors.firstName || errors.lastName || errors.email || errors.url) {
      return true;
    }
    return false;
  };

  return (
    <div className="bg-white w-full lg:w-[70%] 2xl:w-[50%] lg:h-[716px] h-auto  gap-2 flex items-center justify-start flex-col rounded-[12px] p-4 lg:gap-10 overflow-x-hidden">
      <div className="w-full flex flex-col items-center justify-start gap-2 md:w-full md:justify-start">
        <h1 className="bold w-full text-[#333333] font-bold text-[24px]">
          Profile Details
        </h1>
        <p className="regular w-full font-[400] text-[#737373] text-[16px]">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={ProfileInfoValidationSchema}
        onSubmit={async (values) => {
          try {
            LinksArr.sharedInfo = values;
            const API_KEY = process.env.NEXT_PUBLIC_UPD_API as string;
            await axios.put(`${API_KEY}/${LinksArr._id}`, LinksArr);
            reRenderFoo();
          } catch (error) {
            console.log("ERROR HAPPENED CONTACT xucishvilin90@gmail.com");
          }
        }}
      >
        {({ errors, isSubmitting, touched, setFieldValue, setFieldError }) => (
          <Form className="md:w-full flex flex-col items-center justify-center gap-6 w-full">
            <div className="bg-[#FAFAFA] p-4 w-full rounded-[12px] flex flex-col gap-5 md:flex md:flex-row md:items-center md:justify-between ">
              <h1 className="regular text-[#737373] font-[400] text-[16px]">
                Profile picture
              </h1>
              <div className="flex flex-col gap-2 md:items-center md:justify-end md:flex-row md:gap-10">
                <label
                  htmlFor="upload"
                  className="bg-[#EFEBFF] flex flex-col px-3 py-16 items-center justify-center rounded-[12px] w-[70%] relative halfMD:w-[35%] lg:min-w-[121px]"
                >
                  <input
                    name="url"
                    type="file"
                    className="hidden"
                    id="upload"
                    onChange={(event) => {
                      const file = event.currentTarget?.files?.[0];
                      console.log(errors);
                      const validFileExtensions = [
                        "jpg",
                        "gif",
                        "png",
                        "jpeg",
                        "svg",
                        "webp",
                      ];

                      const isValidFileType = (
                        fileName: string | undefined
                      ): boolean => {
                        const fileExtension =
                          fileName && fileName.split(".").pop()?.toLowerCase();
                        return validFileExtensions.includes(
                          fileExtension || ""
                        );
                      };
                      if (
                        isValidFileType(file?.name) &&
                        !errors.email &&
                        !errors.firstName &&
                        !errors.lastName
                      ) {
                        errors = {};
                      } else {
                        errors.url = "errors";
                      }
                      if (file) {
                        if (file.size > 5 * 1024 * 1024) {
                          setFieldError(
                            "url",
                            "File is too large. Please upload a file below 1MB."
                          );
                          return;
                        }
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setFieldValue("url", reader.result as string);
                          setFieldError("url", "");
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {LinksArr.sharedInfo.url !== "" ? (
                    <Image
                      src={LinksArr?.sharedInfo.url}
                      alt="sum"
                      layout="fill"
                      className="rounded-[12px]"
                    />
                  ) : (
                    <div className="flex items-center justify-center flex-col gap-3">
                      <Image src={uploadImage} alt="sum" />
                      <span className="bold font-semibold text-[16px] text-[#633CFF] md:min-w-[122px]">
                        + Upload Image
                      </span>
                    </div>
                  )}
                </label>
                <p className="regular text-[#737373] font-[400] text-[16px] md:max-w-[180px]">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
                <p className="regular text-[#737373] font-[400] text-[16px]">
                  Save changes to see preview on the box or click on image to
                  upload new one
                </p>
                {errors.url && touched.url && (
                  <p>
                    {typeof errors.url === "string"
                      ? errors.url
                      : "An error occurred"}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-center justify-center gap-5 bg-[#FAFAFA] rounded-[12px] md:gap-3 lg:gap-0 lg:justify-start lg:pt-0">
              <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
                {width >= 768 ? (
                  <label className="regular w-full text-[#737373]">First name*</label>
                ) : null}
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
              </div>
              <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
                {width >= 768 ? (
                  <label className="regular w-full text-[#737373]">Last name</label>
                ) : null}
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
              </div>
              <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
                {width >= 768 ? <label className="regular w-full text-[#737373]">Email</label> : null}
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
              </div>
            </div>
            <div className="w-full h-[3px] bg-[#FAFAFA]"></div>
            <div className="w-full flex items-center justify-center md:justify-between">
              {width > 1024 && (
                <p className="regular text-[#737373] font-[400] text-[16px]">
                  Save changes to see preview on the phone
                </p>
              )}
              <button
                disabled={BtnDisableFoo(isSubmitting, errors)}
                type="submit"
                className="w-full md:w-auto md:py-3 md:px-7 bg-[#633CFF] text-[#FFFFFF] font-semibold p-2 text-[16px] rounded-[8px] active:bg-[#BEADFF] disabled:bg-[#BEADFF]"
              >
                {isSubmitting ? "Saving" : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MainPageInfo;
