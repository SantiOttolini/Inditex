import { NextPage } from "next";

interface Props {}

const Title: NextPage<Props> = ({}) => {
  return (
    <button className="button" data-text="Awesome">
      <span className="actual-text">&nbsp;inditex&nbsp;</span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;inditex&nbsp;
      </span>
    </button>
  );
};

export default Title;
