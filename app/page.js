import Main from "@/app/home/page";
import Head from "next/head"; // Import Head dari next/head

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
