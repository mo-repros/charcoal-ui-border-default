import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-background1">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
        className="text-text1"
        onClick={() => {
          const isDark = document.documentElement.dataset["theme"] === "dark";
          if (isDark) {
            delete document.documentElement.dataset["theme"];
          } else {
            document.documentElement.dataset["theme"] = "dark";
          }
        }}
      >
        テーマを切り替える
      </button>

      <div
        className="border border-solid border-default text-text2"
      >
        class="border border-solid border-default"
      </div>

    </div>
  );
};

export default Home;
