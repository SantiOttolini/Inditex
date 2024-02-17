import { useState, useEffect } from "react";
import mock from "@/public/mocks/product.json";
import Products from "@/components/products/Products";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Checkbox from "../checkbox/checkbox";
import SaveButton from "../save-button/save-button";
import { toast } from "react-toastify";
import Loader from "../loader/loader";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  const numProducts = Number(params.id);
  const numContainers = Math.ceil(numProducts / 3);
  const url = window.location.pathname.replace("/", "");
  const [containerPositions, setContainerPositions] = useState(
    Array.from({ length: numContainers }, (_, index) => ({
      position: index + 1,
      alignment: "",
    }))
  );

  useEffect(() => {
    if (Number(url) > mock.length) {
      toast.error("There aren't stock available");
      setTimeout(() => {
        window.location.href = "/1";
      }, 4000);
    }
  }, []);

  const [savedTemplates, setSavedTemplates] = useState<string[]>([]);
  const [_, setTemplateCounter] = useState(1);

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

  const handleSaveTemplate = () => {
    const templateCounter = savedTemplates.length + 1;
    const templateName = `Parrilla ${templateCounter}`;
    localStorage.setItem(
      templateName,
      JSON.stringify({ url: url, positions: containerPositions })
    );
    setSavedTemplates([...savedTemplates, templateName]);
  };

  const handleLoadTemplate = (templateName: string) => {
    const savedTemplate = JSON.parse(localStorage.getItem(templateName) || "");
    setContainerPositions(savedTemplate.positions);
    savedTemplate.positions.forEach((container, index: number) => {
      handleAlignmentChange(container.alignment, index);
    });
    window.open(savedTemplate.url, "_blank");
  };

  const handleDeleteTemplate = (templateName: string) => {
    localStorage.removeItem(templateName);
    setSavedTemplates(savedTemplates.filter((name) => name !== templateName));
  };

  useEffect(() => {
    const savedTemplateKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("Parrilla")
    );
    setSavedTemplates(savedTemplateKeys);

    const totalSavedTemplates = savedTemplateKeys.length;

    setTemplateCounter(totalSavedTemplates);
  }, []);

  return (
    <div>
      <>
        {Number(url) > mock.length && (
          <div className="h-screen flex justify-center items-center">
            <Loader />
          </div>
        )}
        {Number(url) < mock.length && (
          <SaveButton onClick={handleSaveTemplate} />
        )}
        <div className="mt-2 grid grid-cols-4">
          {savedTemplates.map((templateName, index) => (
            <div key={index} className="flex mt-2 ml-1">
              <button
                className="bg-gray-200 rounded-xl w-32 py-0.5"
                onClick={() => handleLoadTemplate(templateName)}
              >
                {templateName}
              </button>
              <button
                className="rounded-full bg-red-600 p-1.5 ml-2 flex items-center justify-center text-white"
                onClick={() => handleDeleteTemplate(templateName)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex flex-col justify-center">
            {containerPositions.map((container, index) => (
              <div
                key={index}
                className="flex items-start justify-between mt-20 w-full"
              >
                <div className="w-full">
                  <Container
                    index={index}
                    position={container.position}
                    alignment={container.alignment}
                    numProducts={numProducts}
                    handleAlignmentChange={(value) =>
                      handleAlignmentChange(value, index)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </DndContext>
      </>
    </div>
  );
};

const Container: React.FC<{
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

  return (
    Number(url) < mock.length && (
      <>
        <div className="mb-1">
          <Checkbox onChange={(value) => handleAlignmentChange(value, index)} />
        </div>

        <div className="w-full">
          <div
            key={position}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className={`relative  bg-[#EEEEEE] p-4 cursor-grab rounded-lg w-full ${
              isOver ? "bg-gray-200" : ""
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

export default Home;
