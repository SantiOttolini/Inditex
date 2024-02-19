interface Props {
  onClick?: () => void;
}

const ShopNow: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn-31">
      <span className="text-container">
        <span className="text">Shop Now</span>
      </span>
    </button>
  );
};

export default ShopNow;
