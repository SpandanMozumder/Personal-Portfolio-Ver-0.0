import SideNav from "../components/SideNav";
import Profile from "../assets/Profile.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export default function Home() {
  const iconStyle = {
    fontSize: "2rem", // Adjust the size as needed
  };

  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* SideNav */}
      <SideNav />

      {/* Left Content */}
      <div className="bg-[#E6DACE] w-[33rem] h-screen rounded-r-3xl shadow-xl shadow-black"></div>

      {/* Middle Content */}
      <div className="bg-[#F4ECE6]  h-[30rem] mt-[5rem] ml-[-10rem] rounded-xl flex flex-col items-center justify-center text-center shadow-xl shadow-black">
        <img
          src={Profile}
          className="rounded-full w-[15rem] h-[15rem] mt-[1.5rem]"
          alt="Profile"
        />
        <h1 className="pt-[1.7rem] font-titillium text-3xl font-bold">
          Spandan
        </h1>
        <h1 className="font-titillium text-3xl font-bold">Mozumder</h1>
        <span className="font-black"> __________________________</span>
        <h2 className="font-titillium text-xl font-semibold">
          FULL STACK DEVELOPER
        </h2>
        <div className="bg-white w-[23rem] h-[3rem] rounded-b-3xl mt-[1rem] flex items-center justify-center gap-[2rem]">
          <a href="https://github.com/SpandanMozumder">
            <GitHubIcon
              style={iconStyle}
              className="transition-all hover:scale-110 cursor-pointer"
            />
          </a>
          <a href="spandan.mozumder.prof@gmail.com">
            <EmailIcon
              style={iconStyle}
              className="transition-all hover:scale-110 cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/spandan-mozumder-729386240/">
            <LinkedInIcon
              style={iconStyle}
              className="transition-all hover:scale-110 cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/spandy._.pvt/">
            <InstagramIcon
              style={iconStyle}
              className="transition-all hover:scale-110 cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="bg-transparent w-full md:w-[30rem] h-[30rem] mt-[5rem]">
        <h1 className="text-7xl font-titillium font-bold pl-[2.5rem] pt-[3rem]">
          Hello!
        </h1>
        <h2 className="pl-[2.5rem] pt-[1.5rem] font-titillium text-3xl">
          I am a developer, a designer, and a student
        </h2>
        <div className="flex flex-row pt-[1rem] pl-[2.5rem]">
          <Link to="/resume">
            <button className="py-[0.5rem] px-[1rem] text-xl rounded-full font-titillium font-bold mr-[2rem] bg-[#0050FF] text-white hover:bg-white hover:border hover:border-black hover:scale-110 hover:text-black shadow-md shadow-black transition-all cursor-pointer">
              Resume
            </button>
          </Link>
          <Link to="/projects">
            <button className="py-[0.5rem] px-[1rem] text-xl rounded-full font-titillium font-bold bg-white border border-black hover:bg-[#0050FF] hover:scale-110 hover:text-white shadow-md shadow-black transition-all cursor-pointer">
              Projects
            </button>
          </Link>
        </div>
        <p className="pt-[2rem] pl-[2.5rem] font-titillium font-semibold text-xl">
          "Making a life devoid of regret and an adventure to remember."
        </p>
      </div>
    </div>
  );
}
