"use client";

import ShopNow from "@/ui/shop-now-btn/ShopNow";
import Textbox from "@/ui/textbox/Textbox";
import Title from "@/ui/title/Title";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import mockedProducts from "@/public/mocks/product.json";

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
        {Number(quantity) < mockedProducts.length ? (
          <Link href={`/${quantity}`}>
            <ShopNow />
          </Link>
        ) : (
          <div className="text-red-500">There aren't stock available</div>
        )}
      </div>
    </div>
  );
};

export default Page;
