import * as Yup from "yup";



export const ProfileInfoValidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Please enter a valid first name")
    .required("Please enter first name"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Please enter a valid last name")
    .required("Please enter last name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
});
