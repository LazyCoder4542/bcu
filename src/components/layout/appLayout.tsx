import { Outlet } from "react-router-dom";
import SideBar from "../side-bar";

function AppLayout() {
  return (
    <div className="flex">
      <aside>
        <SideBar />
      </aside>
      <Outlet />
    </div>
  );
}

export default AppLayout;