import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import SearchBar from "./SearchBar";

function Header() {
  const { watchlist } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <NavLink to="/home" className="text-2xl font-bold text-orange-600">
          Movie Explorer
        </NavLink>

        <div className="flex gap-4 items-center">
          <NavLink to="/watchlist" className="text-blue-600 font-semibold">
            Watchlist ({watchlist.length})
          </NavLink>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <SearchBar />
    </div>
  );
}

export default Header;
