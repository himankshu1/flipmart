import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between px-8 py-4 items-center">
      <h1 className="font-semibold text-2xl">FlipMart.</h1>

      <div className="flex justify-between items-center gap-4">
        {isLoggedIn ? <Link>Profile</Link> : ""}
        <Link
          className="border border-sm rounded-sm border-slate-600 border-1 px-3 py-2 font-medium hover:bg-green-700 duration-200 hover:text-white text-sm"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login with google"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
