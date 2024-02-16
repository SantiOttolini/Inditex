"use client";

import { useState } from "react";
import mock from "@/public/mocks/product.json";
import Products from "@/components/products/Products";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  const numInstances = Number(params.id);
  const [selectPositions, setSelectPositions] = useState<string[]>([]);

  const handleSelectChange = (index: number, value: string) => {
    setSelectPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = value;
      return newPositions;
    });
  };

  if (numInstances > mock.length) {
    alert("No hay suficiente stock disponible.");
    return null;
  }

  const numContainers = Math.ceil(numInstances / 3);

  const getProductsForContainer = (containerIndex: number) => {
    const startIndex = containerIndex * 3;
    const endIndex = Math.min(startIndex + 3, numInstances);
    return Array.from(
      { length: endIndex - startIndex },
      (_, index) => startIndex + index + 1
    );
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-full justify-center">
        {Array.from({ length: numContainers }, (_, containerIndex) => {
          const productPosition = () => {
            if (selectPositions[containerIndex] === "right") {
              return "end";
            }
            if (selectPositions[containerIndex] === "left") {
              return "start";
            }
            return "center";
          };

          return (
            <div
              key={containerIndex}
              className={`relative flex w-full m-auto justify-${productPosition()} my-10 border p-10 border-red-500 `}
            >
              {getProductsForContainer(containerIndex).map((productId) => (
                <div key={productId} className="ml-10">
                  <Products id={productId} />
                </div>
              ))}
              <div className="absolute right-0 mr-2 -top-10">
                <select
                  onChange={(e) =>
                    handleSelectChange(containerIndex, e.target.value)
                  }
                >
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                  <option value="left">Left</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
