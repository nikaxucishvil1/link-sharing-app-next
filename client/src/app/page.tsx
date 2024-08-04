"use client"
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.location.pathname = "/pages/login"
  }, []);

  return null;
};

export default Home;
