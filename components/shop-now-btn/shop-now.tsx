import { NextPage } from "next";

interface Props {
  onClick: () => void;
}

const ShopNow: NextPage<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn-shop">
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">Shop now</span>
    </button>
  );
};

export default ShopNow;
