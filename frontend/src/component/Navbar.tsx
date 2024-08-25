import { IoMdNotificationsOutline } from "react-icons/io";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reducer";
const Navbar = () => {
  const useData = useAppSelector(state=>state.user)
  console.log(useData);
  
  return (
    <div>
      <div className="navbar flex items-center bg-[#6E00FF] rounded-lg px-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 ml-8">
            <img
              className="w-10 rounded-full shadow-md shadow-cyan-300"
              src="/public/istockphoto-1362703367-612x612.jpg"
              alt=""
            />
            <p className="text-2xl font-bold">WeChat</p>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <IoMdNotificationsOutline className="w-6 h-6"></IoMdNotificationsOutline>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/editprofile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Logout></Logout>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
