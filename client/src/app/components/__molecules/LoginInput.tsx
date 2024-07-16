"use client";
import React from "react";

const loginInput = (props: LoginInput) => {
  const {
    type,
    label,
    placeholder,
    value,
    onChange,
    name,
    onBlur,
    errorsEmail,
    touchedEmail,
  } = props;
  return (
    <div className="w-full flex flex-col items-start justify-center gap-1">
      <label className="text-[#333333] font-[400] text-[16px]">{label}</label>
      <input
        name={name}
        value={value}
        className={
          errorsEmail && touchedEmail
            ? "w-full border border-[#FF3939] rounded-[8px] p-2 focus:outline-none focus:ring-1 focus:ring-[#633CFF] focus:shadow-inputFocus hover:shadow-inputFocus transition-shadow duration-200 ease-in-out"
            : "w-full border border-[#D9D9D9] rounded-[8px] p-2 focus:outline-none focus:ring-1 focus:ring-[#633CFF] focus:shadow-inputFocus hover:shadow-inputFocus transition-shadow duration-200 ease-in-out"
        }
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default loginInput;
