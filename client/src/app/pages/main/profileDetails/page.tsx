import MainPageLayout from "@/app/components/__organismes/MainPageLayout";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <MainPageLayout link={false} profile={true}>
    </MainPageLayout>
  );
};

export default page;
