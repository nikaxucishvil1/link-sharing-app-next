"use client"
import { styled } from "@mui/material";
import { TextField as MuiTextField } from "@mui/material";


export const CustomTextField = styled(MuiTextField)({
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
  "& .MuiInputBase-input": {
    "&::placeholder": {
      color: "#737373", // Placeholder color
      opacity: 1, // Make sure the placeholder is fully opaque
    },
    "&:focus::placeholder": {
      color: "transparent", // Make placeholder transparent on focus
    },
  },
});
