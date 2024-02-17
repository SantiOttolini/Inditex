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
    <div className="flex flex-col">
      <div className="flex flex-col justify-start">
        {containerPositions.map((item, index) => (
          <div className="mb-10" key={index}>
            <span>Fila {index + 1}</span>
            <Checkbox
              onChange={(value) => handleAlignmentChange(value, index)}
            />
          </div>
        ))}
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col justify-center">
          {containerPositions.map((container, index) => (
            <Container
              key={index}
              index={index}
              position={container.position}
              alignment={container.alignment}
              numProducts={numProducts}
            />
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
    <div>
      <div
        key={position}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={`relative  bg-[#EEEEEE] p-4 m-4 cursor-grab rounded-lg ${
          isOver ? "bg-gray-200" : ""
        } ${isDragging ? "opacity-50" : ""} transition-opacity duration-300`}
        style={{ minWidth: "200px" }}
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
