import React, { useState } from "react";

interface Props {
  onChange: (value: string) => void;
}

const Checkbox: React.FC<Props> = ({ onChange }) => {
  const [_, setSelectedValue] = useState<string>("");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex">
      <div className="radio-inputs">
        <label className="radio">
          <input
            className="mr-2"
            defaultChecked
            type="radio"
            id="centro"
            name="alineacion"
            value="center"
            onChange={handleCheckboxChange}
          />
          <span className="name">Center</span>
        </label>
        <label className="radio">
          <input
            className="mr-2"
            type="radio"
            id="derecha"
            name="alineacion"
            value="end"
            onChange={handleCheckboxChange}
          />
          <span className="name">Right</span>
        </label>

        <label className="radio">
          <input
            className="mr-2"
            type="radio"
            id="izquierda"
            name="alineacion"
            value="start"
            onChange={handleCheckboxChange}
          />
          <span className="name">Left</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
