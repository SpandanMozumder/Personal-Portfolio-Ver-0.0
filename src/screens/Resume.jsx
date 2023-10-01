import SideNav from "../components/SideNav";
import MyResume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div className="absolute w-screen bg-[#E6DACE] ">
      <div className="fixed">
        <SideNav />
      </div>
      <h1 className=" text-5xl font-bold font-titillium text-center text-[#0050FF] my-[2rem] w-screen">
        My Resume
      </h1>
      <div className=" flex items-center justify-center pb-[10rem]">
        <iframe src={MyResume} width="80%" className="h-screen"></iframe>
      </div>
    </div>
  );
}
