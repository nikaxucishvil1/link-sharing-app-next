import React from "react";
import MainHeader from "../__molecules/MainHeader";

const MainPageLayout = (props: MainPageLayout) => {
  const { children, link, profile, className } = props;
  return (
    <div>
      <div className={className}>
        <MainHeader link={link} profile={profile} />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default MainPageLayout;
