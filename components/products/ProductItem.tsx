import { Product } from "@/app/types/product";
import React from "react";

export const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
  <div className="flex flex-col justify-center items-center" key={product.id}>
    <div>
      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span
            style={{ "--i": 0 } as React.CSSProperties}
            className="cube-span"
          ></span>
          <span
            style={{ "--i": 1 } as React.CSSProperties}
            className="cube-span"
          ></span>
          <span
            style={{ "--i": 2 } as React.CSSProperties}
            className="cube-span"
          ></span>
          <span
            style={{ "--i": 3 } as React.CSSProperties}
            className="cube-span"
          ></span>
        </div>
      </div>
    </div>
    <span className="text-sm pt-10">{product.name}</span>
    <span className="text-sm">{product.price}</span>
  </div>
);
