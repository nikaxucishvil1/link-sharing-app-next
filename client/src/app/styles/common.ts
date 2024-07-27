"use client";
import { FormControl, styled } from "@mui/material";
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
      boxShadow: "0 0 8px rgba(99, 60, 255, 0.5)",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "#633CFF",
    },
  },
  "& .MuiInputBase-input": {
    "&::placeholder": {
      color: "#737373",
      opacity: 1,
    },
    "&:focus::placeholder": {
      color: "transparent",
    },
  },
});

export const CustomSelect = styled(FormControl)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d9d9d9",
    },
    "&:hover fieldset": {
      borderColor: "#a0a0a0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#633CFF",
      boxShadow: "0 0 8px rgba(99, 60, 255, 0.5)",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "#633CFF",
    },
  },
});
