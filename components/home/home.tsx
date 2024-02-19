import mock from "@/public/mocks/product.json";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import SaveButton from "@/ui/save-button/SaveButton";
import { toast } from "react-toastify";
import Loader from "@/ui/loader/loader";
import { Grill } from "./Grill";
import DragAndDrop from "./DragAndDrop";
import React from "react";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  const numProducts = Number(params.id);
  const numContainers = Math.ceil(numProducts / 3);

  const url = window.location.pathname.replace("/", "");
  const queryString = window.location.href.split("?")[1];
  const grillName = queryString?.replace(/grill(\d+)/, "Grill $1");

  const [containerPositions, setContainerPositions] = React.useState<
    Array<any>
  >(
    Array.from({ length: numContainers }, (_, index) => ({
      position: index + 1,
      alignment: "center",
    }))
  );

  const [savedGrills, setSavedGrills] = React.useState<string[]>([]);
  const [_, setGrillCounter] = React.useState<number>(0);

  React.useEffect(() => {
    if (Number(url) > mock.length) {
      toast.error("There aren't stock available");
      setTimeout(() => {
        window.location.href = "/1";
      }, 4000);
    }
  }, [url]);

  React.useEffect(() => {
    const savedGrillKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("Grill")
    );
    setSavedGrills(savedGrillKeys);
    setGrillCounter(savedGrillKeys.length);
  }, []);

  React.useEffect(() => {
    const url = window.location.pathname;
    if (/\d+/.test(url)) {
      const hasVisited = localStorage.getItem("visited");
      if (!hasVisited) {
        toast.info(
          "Position products and rows using drag and drop and save your grills !",
          {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        localStorage.setItem("visited", "true");
      }
    }
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
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

  const handleSaveGrill = () => {
    const grillCounter = savedGrills.length + 1;
    const grillName = `Grill ${grillCounter}`;
    localStorage.setItem(
      grillName,
      JSON.stringify({ url: url, positions: containerPositions })
    );
    setSavedGrills([...savedGrills, grillName]);
  };

  const handleLoadGrill = (grillName: string) => {
    const savedGrill = JSON.parse(localStorage.getItem(grillName) || "");
    const loadedPositions = savedGrill.positions;
    setContainerPositions(loadedPositions);
    loadedPositions.forEach((container: any, index: number) => {
      handleAlignmentChange(container.alignment, index);
    });
    window.open(`${savedGrill.url}?grill${savedGrills.length}`, "_blank");
  };

  const handleDeleteGrill = (grillName: string) => {
    localStorage.removeItem(grillName);
    setSavedGrills(savedGrills.filter((name) => name !== grillName));
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
      Number(url) < mock.length && <SaveButton onClick={handleSaveGrill} />
    );
  };

  const renderGrills = () => {
    return (
      !grillName && (
        <div className="mt-2 grid grid-cols-1 md:grid-cols-4">
          {savedGrills.map((grillName, index) => (
            <Grill
              key={index}
              grillName={grillName}
              onGrillLoad={handleLoadGrill}
              onGrillDelete={handleDeleteGrill}
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
