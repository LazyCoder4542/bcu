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
    <header className="flex items-center justify-between p-6 border-b-2 border-[#D9D9D9]">
      <h1>Dashboard</h1>
      <div className="flex gap-8 items-center">
        <Searchbox />
        <div>
          <span>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.031 4.60736C13.7901 4.60736 9.53095 8.86653 9.53095 14.1074V18.6832C9.53095 19.649 9.11928 21.1215 8.62845 21.9449L6.80762 24.969C5.68345 26.8374 6.45928 28.9115 8.51762 29.6082C15.3418 31.8882 22.7043 31.8882 29.5284 29.6082C31.4443 28.9749 32.2834 26.7107 31.2384 24.969L29.4176 21.9449C28.9426 21.1215 28.531 19.649 28.531 18.6832V14.1074C28.531 8.88236 24.256 4.60736 19.031 4.60736Z" stroke="#808080" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M21.9609 5.06666C21.47 4.92416 20.9634 4.81332 20.4409 4.74999C18.9209 4.55999 17.4642 4.67082 16.1025 5.06666C16.5617 3.89499 17.7017 3.07166 19.0317 3.07166C20.3617 3.07166 21.5017 3.89499 21.9609 5.06666Z" stroke="#808080" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.781 30.1784C23.781 32.7909 21.6435 34.9284 19.031 34.9284C17.7327 34.9284 16.5293 34.3901 15.6743 33.5351C14.8193 32.6801 14.281 31.4768 14.281 30.1784" stroke="#808080" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="rounded-full overflow-hidden w-[50px] aspect-square">
            <img className="w-[120%] h-full object-cover object-center" src="i/female.jpg" alt="" />
          </span>
          <span className="flex flex-col">
            <h3>Famaye Grace</h3>
            <p>Admin</p>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Dashboard;