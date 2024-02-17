"use client";

import ShopNow from "@/components/shop-now-btn/shop-now";
import Textbox from "@/components/textbox/textbox";
import Title from "@/components/title/title";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [quantity, setQuantity] = React.useState("");

  const handleInputChange = (value: string) => {
    setQuantity(value);
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto">
      <div className="mb-20">
        <Title />
      </div>
      <Textbox onInputChange={handleInputChange} />
      <div className="mt-20">
        <Link href={`/${quantity}`}>
          <ShopNow onClick={() => console.log("hola")} />
        </Link>
      </div>
    </div>
  );
};

export default Page;
