/** @jsxRuntime classic /
/**@jsx jsx */
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../src/components/navbar";
import { jsx } from "theme-ui";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Hello My Name Is <span sx={{ color: "highlight" }}>Shreyansh</span>.
      </h1>
      <h4 sx={{ color: "primary" }}>
        I'm A Full Stack Web Devloper.<br></br>
      </h4>
    </div>
  );
}
