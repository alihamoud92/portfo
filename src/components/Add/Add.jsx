import { Link } from "react-router-dom";

const Add = ({ link }) => {
  return (
    <>
      <Link to={link}>
        <div
          className={`flex z-10 justify-center fixed bottom-10 left-5 font-bold text-5xl text-white cursor-pointer w-14 h-14 rounded-full bg-Main`}
        >
          +
        </div>
      </Link>
    </>
  );
};

export default Add;
