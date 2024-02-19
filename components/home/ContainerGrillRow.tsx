"use client";
import {
  useDraggable,
  useDroppable,
  DndContext,
  DragEndEvent,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React, { useState } from "react";
import mockedProducts from "@/public/mocks/product.json";
import { SortableProduct } from "../products/SortableProduct";
import { Draggable } from "../products/DrageablProduct";
import { Droppable } from "../products/DroppableProduct";
import Tab from "@/ui/tab/Tab";
import { Product } from "@/app/types/product";

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

  const [activeId, setActiveId] = useState(null);
  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd() {
    setActiveId(null);
  }
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
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              <SortableContext
                items={mockedProducts.slice(
                  startProductIndex - 1,
                  endProductIndex
                )}
              >
                <div
                  ref={setDropNodeRef}
                  className={`flex flex-row justify-${alignment} items-center h-44`}
                  style={{ minHeight: "200px" }}
                >
                  {mockedProducts
                    .slice(startProductIndex - 1, endProductIndex)
                    .map((product: Product, index: number) => (
                      <div key={index} className="m-1 md:m-10">
                        <Draggable key={product.id} id={product.id}>
                          <Droppable key={product.id} id={product.id}>
                            <SortableProduct
                              key={product.id}
                              id={product.id}
                              product={product}
                            />
                          </Droppable>
                        </Draggable>
                      </div>
                    ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </>
    )
  );
};
