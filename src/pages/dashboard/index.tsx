import SideBar from "../../components/side-bar";
import Searchbox from "../../components/atoms/Searchbox";
function Dashboard() {
  return (
    <div className="flex">
      <aside>
        <SideBar />
      </aside>
      <main className="flex-1">
        <Header />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between p-8 border-b-2 border-[#D9D9D9]">
      <h1>Dashboard</h1>
      <div>
        <Searchbox />
      </div>
    </header>
  );
}

export default Dashboard;