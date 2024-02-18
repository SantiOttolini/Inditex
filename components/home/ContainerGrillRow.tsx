"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import React from "react";
import mockedProducts from "@/public/mocks/product.json";
import Products from "@/components/products/Products";
import Tab from "@/ui/tab/Tab";

export const ContainerGrillRow: React.FC<{
  index: number;
  position: number;
  numProducts: number;
  alignment: string;
  handleAlignmentChange: (value: string, index: number) => void;
}> = ({ index, position, numProducts, alignment, handleAlignmentChange }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: index.toString(),
    });
  const url = window.location.pathname.replace("/", "");
  const { isOver, setNodeRef: setDropNodeRef } = useDroppable({
    id: index.toString(),
  });

  const startProductIndex = (position - 1) * 3 + 1;
  const endProductIndex = Math.min(position * 3, numProducts);

  const [selectedAlignment, setSelectedAlignment] = React.useState(alignment);

  const handleTabChange = (value: string) => {
    setSelectedAlignment(value);
    handleAlignmentChange(value, index);
  };

  return (
    Number(url) < mockedProducts.length && (
      <>
        <div className="mb-2 flex">
          <div className="mr-2">
            <Tab
              value="center"
              isChecked={selectedAlignment === "center"}
              name="Center"
              onChange={handleTabChange}
            />
          </div>
          <div className="mr-2">
            <Tab
              value="end"
              isChecked={selectedAlignment === "end"}
              name="Right"
              onChange={handleTabChange}
            />
          </div>
          <div className="mr-2">
            <Tab
              value="start"
              isChecked={selectedAlignment === "start"}
              name="Left"
              onChange={handleTabChange}
            />
          </div>
        </div>

        <div className="w-full">
          <div
            key={position}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className={`relative  bg-[#EEEEEE] p-4 cursor-grab rounded-lg w-full ${
              isOver ? " opacity-75" : ""
            } ${
              isDragging ? "opacity-10" : ""
            } transition-opacity duration-300`}
          >
            <div
              ref={setDropNodeRef}
              className={`flex flex-row justify-${alignment} items-center h-44`}
              style={{ minHeight: "200px" }}
            >
              {mockedProducts
                .slice(startProductIndex - 1, endProductIndex)
                .map((product, index) => (
                  <div key={index} className="m-1 md:m-10">
                    <DraggableProduct productId={product.id}>
                      <Products id={Number(product.id)} />
                    </DraggableProduct>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    )
  );
};

const DraggableProduct = ({ productId, children }: any) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: productId.toString(),
  });

  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
