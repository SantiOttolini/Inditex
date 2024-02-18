import { DndContext } from "@dnd-kit/core";
import React from "react";
import { ContainerGrillRow } from "@/components/home/ContainerGrillRow";

interface Props {
  containerPositions: Array<{
    position: number;
    alignment: string;
  }>;
  numProducts: number;
  handleAlignmentChange: (value: string, index: number) => void;
  handleDragEnd: (event: any) => void;
}

const DragAndDrop: React.FC<Props> = ({
  containerPositions,
  numProducts,
  handleAlignmentChange,
  handleDragEnd,
}) => {
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col justify-center ">
        {containerPositions.map((container, index) => (
          <div
            key={index}
            className="flex items-start justify-between mt-20 w-full"
          >
            <div className="w-full">
              <ContainerGrillRow
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
  );
};

export default DragAndDrop;
