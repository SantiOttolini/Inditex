import React from "react";

interface Props {
  value: string;
  name: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<Props> = ({ value, isChecked, onChange, name }) => {
  const [checked, setChecked] = React.useState(isChecked);

  React.useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(value);
  };

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          className="mr-2"
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="name">{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
