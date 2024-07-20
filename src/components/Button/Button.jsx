import { Link } from "react-router-dom";

function Button({ link, name, className, onClick }) {
  return (
    <Link to={link || ""}>
      <div
        className={`border-2 border-Main text-Main text-center py-3 px-5 mt-6 rounded-lg hover:bg-blue-400 hover:text-white transition-all w-full ${className}`}
        onClick={onClick}
      >
        {name}
      </div>
    </Link>
  );
}
export default Button;
