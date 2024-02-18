import { useState, useEffect } from "react";
import mock from "@/public/mocks/product.json";
import { DndContext } from "@dnd-kit/core";
import SaveButton from "@/ui/save-button/save-button";
import { toast } from "react-toastify";
import Loader from "@/ui/loader/loader";
import { Grill } from "./Grill";
import DragAndDrop from "./DragAndDrop";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  const numProducts = Number(params.id);
  const numContainers = Math.ceil(numProducts / 3);
  const url = window.location.pathname.replace("/", "");
  const queryString = window.location.href.split("?")[1];
  const grillName = queryString?.replace(/grill(\d+)/, "Grill $1");
  const [containerPositions, setContainerPositions] = useState<Array<any>>(
    Array.from({ length: numContainers }, (_, index) => ({
      position: index + 1,
      alignment: "center",
    }))
  );

  useEffect(() => {
    if (Number(url) > mock.length) {
      toast.error("There aren't stock available");
      setTimeout(() => {
        window.location.href = "/1";
      }, 4000);
    }
  }, [url]);

  useEffect(() => {
    if (Number(url) > mock.length) {
      toast.error("There aren't stock available");
      setTimeout(() => {
        window.location.href = "/1";
      }, 4000);
    }
  }, [url]);

  const [savedTemplates, setSavedTemplates] = useState<string[]>([]);
  const [_, setTemplateCounter] = useState<number>(0);

  useEffect(() => {
    const savedTemplateKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("Grill")
    );
    setSavedTemplates(savedTemplateKeys);
    setTemplateCounter(savedTemplateKeys.length);
  }, []);

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
    const templateName = `Grill ${templateCounter}`;
    localStorage.setItem(
      templateName,
      JSON.stringify({ url: url, positions: containerPositions })
    );
    setSavedTemplates([...savedTemplates, templateName]);
  };

  const handleLoadTemplate = (templateName: string) => {
    const savedTemplate = JSON.parse(localStorage.getItem(templateName) || "");
    const loadedPositions = savedTemplate.positions;
    setContainerPositions(loadedPositions);
    loadedPositions.forEach((container: any, index: number) => {
      handleAlignmentChange(container.alignment, index);
    });
    window.open(`${savedTemplate.url}?grill${savedTemplates.length}`, "_blank");
  };

  const handleDeleteTemplate = (templateName: string) => {
    localStorage.removeItem(templateName);
    setSavedTemplates(savedTemplates.filter((name) => name !== templateName));
  };

  const renderLoader = () => {
    return (
      Number(url) > mock.length && (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )
    );
  };

  const renderSaveButton = () => {
    return (
      !grillName &&
      Number(url) < mock.length && <SaveButton onClick={handleSaveTemplate} />
    );
  };

  const renderGrills = () => {
    return (
      !grillName && (
        <div className="mt-2 grid grid-cols-1 md:grid-cols-4">
          {savedTemplates.map((templateName, index) => (
            <Grill
              key={index}
              templateName={templateName}
              onTemplateLoad={handleLoadTemplate}
              onTemplateDelete={handleDeleteTemplate}
            />
          ))}
        </div>
      )
    );
  };

  const renderGrillName = () => {
    return (
      grillName && (
        <div className="text-center text-lg flex justify-center m-auto bg-gray-200 p-2 rounded-lg w-1/2">
          {grillName}
        </div>
      )
    );
  };

  return (
    <div>
      {renderLoader()}
      {renderSaveButton()}
      {renderGrills()}
      {renderGrillName()}

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col justify-center">
          <DragAndDrop
            containerPositions={containerPositions}
            numProducts={numProducts}
            handleAlignmentChange={handleAlignmentChange}
            handleDragEnd={handleDragEnd}
          />
        </div>
      </DndContext>
    </div>
  );
};

export default Home;
