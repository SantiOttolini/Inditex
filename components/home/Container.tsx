"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import React from "react";
import mock from "@/public/mocks/product.json";
import Products from "@/components/products/Products";
import Checkbox from "@/ui/checkbox/checkbox";

export const Container: React.FC<{
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

  const handleCheckboxChange = (value: string) => {
    setSelectedAlignment(value);
    handleAlignmentChange(value, index);
  };

  return (
    Number(url) < mock.length && (
      <>
        <div className="mb-2 flex">
          <div className="mr-2">
            <Checkbox
              value="center"
              isChecked={selectedAlignment === "center"}
              name="Center"
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="mr-2">
            <Checkbox
              value="end"
              isChecked={selectedAlignment === "end"}
              name="Right"
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="mr-2">
            <Checkbox
              value="start"
              isChecked={selectedAlignment === "start"}
              name="Left"
              onChange={handleCheckboxChange}
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
              {mock
                .slice(startProductIndex - 1, endProductIndex)
                .map((product, index) => (
                  <div key={index} className="m-1 md:m-10">
                    <Products id={Number(product.id)} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    )
  );
};
