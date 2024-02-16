"use client";

import { NextPage } from "next";
import Home from "@/components/home/home";

interface Props {
  params: { id: string };
}

const Page: NextPage<Props> = ({ params }) => {
  return <Home params={params} />;
};

export default Page;
