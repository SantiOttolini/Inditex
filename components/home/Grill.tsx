import React from "react";

interface Props {
  grillName: string;
  onGrillLoad: (grillName: string) => void;
  onGrillDelete: (grillName: string) => void;
}

export const Grill: React.FC<Props> = ({
  grillName,
  onGrillLoad,
  onGrillDelete,
}) => {
  return (
    <div className="flex mt-2 ml-1">
      <button
        className="bg-gray-200 rounded-xl w-32 py-0.5"
        onClick={() => onGrillLoad(grillName)}
      >
        {grillName}
      </button>
      <button
        className="rounded-full bg-red-600 p-1.5 ml-2 flex items-center justify-center text-white"
        onClick={() => onGrillDelete(grillName)}
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
  );
};
