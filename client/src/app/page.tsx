"use client"
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.location.pathname = "/pages/main"
  }, []);

  return null;
};

export default Home;
