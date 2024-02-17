import { useState } from "react";
import mock from "@/public/mocks/product.json";
import Products from "@/components/products/Products";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  const numProducts = Number(params.id);
  const numContainers = Math.ceil(numProducts / 3);
  const [containerPositions, setContainerPositions] = useState(
    Array.from({ length: numContainers }, (_, index) => index + 1)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return; // Si no hay un contenedor de destino, salir

    const sourceIndex = Number(active.id);
    const destinationIndex = Number(over.id);

    if (sourceIndex === destinationIndex) return; // Si el elemento se soltó en su posición original, salir

    const newPosition = [...containerPositions];
    const movedContainer = newPosition.splice(sourceIndex, 1)[0];
    newPosition.splice(destinationIndex, 0, movedContainer);

    setContainerPositions(newPosition);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        <div className="flex flex-col w-full justify-center">
          {containerPositions.map((position, index) => (
            <Container
              key={index}
              index={index}
              position={position}
              numProducts={numProducts}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

const Container: React.FC<{
  index: number;
  position: number;
  numProducts: number;
}> = ({ index, position, numProducts }) => {
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
    <div
      key={position}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`transform ${
        transform ? `translate-x-${transform.x} translate-y-${transform.y}` : ""
      } border-2 border-red-500 p-4 m-4 cursor-grab rounded-lg ${
        isOver ? "bg-gray-200" : ""
      } ${isDragging ? "opacity-50" : ""} transition-opacity duration-300`}
    >
      <div ref={setDropNodeRef} className="flex h-full p-8">
        {mock
          .slice(startProductIndex - 1, endProductIndex)
          .map((product, index) => (
            <div key={index} className="ml-4">
              <Products id={Number(product.id)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
