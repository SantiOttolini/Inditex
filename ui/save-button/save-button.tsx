import { NextPage } from "next";

interface Props {
  onClick: () => void;
}

const SaveButton: NextPage<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="save-btn w-44">
      Save grill
    </button>
  );
};

export default SaveButton;
