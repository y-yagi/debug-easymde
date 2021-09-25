import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import React from "react";
const SimpleMdeReact = dynamic(import("react-simplemde-editor"), {
  ssr: false,
});

import "easymde/dist/easymde.min.css";

const Home: NextPage = () => {
  return (
    <SimpleMdeReact />
  )
}

export default Home
