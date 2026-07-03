import SideBar from "@/components/SideBar";
import TaskBoard from "@/components/TaskBoard";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className=" flex flex-1 flex-col">
        <TopBar />
        <TaskBoard />
      </div>
    </div>
  );
}
