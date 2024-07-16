import * as Yup from "yup";

export const CreateLinkValidationSchema = Yup.object().shape({
  linkArr: Yup.array().of(
    Yup.object().shape({
      url: Yup.string().required("Link is required").url("Invalid URL format"),
      platform: Yup.string().required("Platform is required"),
    })
  ),
});
