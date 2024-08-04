import MainHeader from "@/app/components/__molecules/MainHeader";
import React, { useEffect, useState, Suspense } from "react";
import { Field, FieldArray, Form, Formik, FormikErrors } from "formik";
import { CreateLinkValidationSchema } from "@/app/validation/CreateLinkValidationSchema";
import linkExample from "../../../public/images/illustration-empty.svg";
import uploadImage from "../../../public/images/icon-upload-image.svg";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import {
  MenuItem,
  Select,
  InputLabel,
  ListItemIcon,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import { LinksData } from "@/app/components/__molecules/imageCommon";
import Image from "next/image";
import { CustomSelect, CustomTextField } from "@/app/styles/common";
import phoneLogo from "../../../public/images/illustration-phone-mockup.svg";
import useWidth from "@/hooks/useWidth";
import ArrowImage from "../../../public/images/icon-arrow-right.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { ProfileInfoValidationSchema } from "@/app/validation/ProfileInfoValidationSchema";
import imageExampleMan from "../../../public/images/man-example.svg";
import copyToClipboard from "../utils/copyToClipboard";
import MainPageInfo from "@/app/components/__organismes/MainPageInfo";
import MainPageAddLinks from "@/app/components/__organismes/MainPageAddLinks";
import ProfileView from "@/app/components/__molecules/ProfileView";
import Loader from "../components/__molecules/Loader"

export {
  Loader,
  MainPageInfo,
  MainPageAddLinks,
  ProfileView,
  Suspense,
  copyToClipboard,
  Link,
  imageExampleMan,
  uploadImage,
  ProfileInfoValidationSchema,
  useState,
  Cookies,
  axios,
  useEffect,
  ArrowImage,
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
};
export type { FormikErrors };
