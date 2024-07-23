import * as Yup from "yup";

export const ProfileInfoValidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Please enter valid first name")
    .required("please enter first name"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Please enter valid last name")
    .required("Please enter last name"),
    email:Yup.string().email("Please enter valid email").required("Please enter email"),
    imageURL:Yup.string().url("Please upload correct image").required("Please upload image")
});
