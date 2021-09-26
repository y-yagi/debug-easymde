import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import SimpleMDE from "easymde";
const SimpleMdeReact = dynamic(import("react-simplemde-editor"), {
  ssr: false,
});


import "easymde/dist/easymde.min.css";

const simpleMDEOptions ={
    autofocus: true,
    spellChecker: false,
    inputStyle: "textarea"
} as SimpleMDE.Options

const Home: NextPage = () => {
  return (
    <SimpleMdeReact options={simpleMDEOptions}/>
  )
}

export default Home