import * as Yup from "yup";

export const CreateLinkValidationSchema = Yup.object({
    platform:Yup.string().required("Please select platform"),
    link: Yup.string().url("Enter valid URL").required("Please enter URL")
})