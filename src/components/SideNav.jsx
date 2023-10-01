import HomeIcon from "@mui/icons-material/Home";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ArticleIcon from "@mui/icons-material/Article";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";

export default function SideNav() {
  const iconStyle = {
    fontSize: "2rem", // Adjust the size as needed
  };
  return (
    <div className="group absolute flex flex-col justify-center h-[97.5vh] w-[3rem] overflow-hidden transition-all hover:w-[20rem] m-[0.5rem] rounded-xl bg-white z-50 shadow-xl shadow-black border border-black">
      <Link to="/">
        <div className="flex items-center">
          <HomeIcon
            className=" my-[1.3rem] ml-[0.5rem] transition-all hover:scale-110 mr-[1rem] cursor-pointer"
            style={iconStyle}
          />
          <p className="text-center font-titillium w-full hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-black text-xl cursor-pointer">
            HOME
          </p>
        </div>
      </Link>

      <Link to="/projects">
        <div className="flex items-center">
          <WorkspacesIcon
            className="my-[1.3rem] ml-[0.5rem] transition-all hover:scale-110 mr-[1rem] cursor-pointer"
            style={iconStyle}
          />
          <p className="text-center font-titillium w-full hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-black text-xl cursor-pointer">
            MY PROJECTS
          </p>
        </div>
      </Link>

      <Link to="/resume">
        <div className="flex items-center">
          <ArticleIcon
            className="my-[1.3rem] ml-[0.5rem] transition-all hover:scale-110 mr-[1rem] cursor-pointer"
            style={iconStyle}
          />
          <p className="text-center font-titillium w-full hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-black text-xl cursor-pointer">
            MY RESUME
          </p>
        </div>
      </Link>

      <Link to="/contactme">
        <div className="flex items-center">
          <LocalPhoneIcon
            className="my-[1.3rem] ml-[0.5rem] transition-transform transform hover:scale-110 mr-[1rem] cursor-pointer"
            style={iconStyle}
          />
          <p className="text-center font-titillium w-full hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-black text-xl cursor-pointer">
            CONTACT ME
          </p>
        </div>
      </Link>
    </div>
  );
}
