"use client"
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.location.pathname = "/pages/main/addLinks"
  }, []);

  return null;
};

export default Home;
