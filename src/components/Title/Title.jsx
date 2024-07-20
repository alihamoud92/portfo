import { Link } from "react-router-dom";

function Title({ name, link }) {
  return (
    <Link to={link || ""}>
      <div className="text-4xl text-center mx-auto font-bold underline decoration-Secondary decoration-4 my-9">
        {name}
      </div>
    </Link>
  );
}
export default Title;
