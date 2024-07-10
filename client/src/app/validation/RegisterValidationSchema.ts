import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Can’t be empty"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters")
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .required("Can’t be empty"),
  repeatedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Please repeat your password")
    .required("Please repeat your password"),
});
