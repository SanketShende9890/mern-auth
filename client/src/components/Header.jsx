import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <h1 className="font-bold">
          <Link to="/">Mern Auth App</Link>
        </h1>
        <ul className="flex items-center gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
