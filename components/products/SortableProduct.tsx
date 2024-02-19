"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Product } from "@/app/types/product";

interface Props {
  id: string;
  product: Product;
}

export const SortableProduct: React.FC<Props> = ({ id, product }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        className="flex flex-col justify-center items-center"
        key={product.id}
      >
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
    </div>
  );
};
