import { Outlet } from "react-router-dom";
import NavBar from "@/components/navbar";

export default function Layout() {
  return (
    <div className="max-w-5xl mx-auto text-stone-800 font-geist">
      <NavBar />
      <Outlet />
    </div>
  );
}
