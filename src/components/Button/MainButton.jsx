import { Link } from "react-router-dom";

const MainButton = ({ name, link, onClick, className }) => {
  return (
    <Link to={`${link || ""}`}>
      <button
        className={`bg-Main rounded-xl w-full hover:bg-opacity-70 text-center text-lg font-bold text-white cursor-pointer px-5 py-3 flex justify-center ${className}`}
        onClick={onClick}
      >
        {name}
      </button>
    </Link>
  );
};

export default MainButton;
