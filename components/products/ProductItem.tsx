import { getProducts } from "@/api/card";
import React from "react";
import Image from "next/image";
import { Product } from "@/app/types/product";

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
  <div className="flex justify-center items-center" key={product.id}>
    <Image src={product.image} width={60} height={60} alt={product.name} />
  </div>
);
