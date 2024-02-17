import { useState } from "react";
import mock from "@/public/mocks/product.json";
import Products from "@/components/products/Products";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Checkbox from "../checkbox/checkbox";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  const numProducts = Number(params.id);
  const numContainers = Math.ceil(numProducts / 3);
  const [containerPositions, setContainerPositions] = useState(
    Array.from({ length: numContainers }, (_, index) => ({
      position: index + 1,
      alignment: "",
    }))
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    const sourceIndex = Number(active.id);
    const destinationIndex = Number(over.id);

    if (sourceIndex === destinationIndex) return;

    const newPosition = [...containerPositions];
    const movedContainer = newPosition.splice(sourceIndex, 1)[0];
    newPosition.splice(destinationIndex, 0, movedContainer);

    setContainerPositions(newPosition);
  };

  const handleAlignmentChange = (value: string, index: number) => {
    setContainerPositions((prevPositions) =>
      prevPositions.map((container, idx) =>
        idx === index ? { ...container, alignment: value } : container
      )
    );
  };

  return (
    <div className="flex flex-col  justify-between">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col justify-center">
          {containerPositions.map((container, index) => (
            <div key={index} className="flex items-start justify-between">
              {/* Contenedor de fila */}
              <div className="mb-10">
                <div className="mb-4 flex">
                  <span className="bg-[#EEEEEE] p-3 rounded-lg">
                    Fila {index + 1}
                  </span>
                </div>
                <Checkbox
                  onChange={(value) => handleAlignmentChange(value, index)}
                />
              </div>
              {/* Contenedor de contenedor */}
              <div>
                <Container
                  index={index}
                  position={container.position}
                  alignment={container.alignment}
                  numProducts={numProducts}
                />
              </div>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

const Container: React.FC<{
  index: number;
  position: number;
  numProducts: number;
  alignment: string;
}> = ({ index, position, numProducts, alignment }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: index.toString(),
    });

  const { isOver, setNodeRef: setDropNodeRef } = useDroppable({
    id: index.toString(),
  });

  const startProductIndex = (position - 1) * 3 + 1;
  const endProductIndex = Math.min(position * 3, numProducts);

  return (
    <div className="w-[50rem]">
      <div
        key={position}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={`relative  bg-[#EEEEEE] p-4 m-4 cursor-grab rounded-lg w-full${
          isOver ? "bg-gray-200" : ""
        } ${isDragging ? "opacity-50" : ""} transition-opacity duration-300`}
      >
        <div
          ref={setDropNodeRef}
          className={`flex flex-row justify-${alignment} items-center h-44 p-2`}
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
  );
};

export default Home;
