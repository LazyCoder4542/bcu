import { useState } from "react";
import Searchbox from "../../components/atoms/Searchbox";
interface memberT {
  id: string
  name: string
  gender: "male" | "female"
  band: string
  unit: string
}
function Member() {
  const [members, setMembers] = useState<memberT[]>([])
  return (
    <main className="flex flex-col relative overflow-y-scroll flex-1 h-screen">
      <Header />
      <div className="flex flex-1 bg-[#fafafa] h-full w-full">
          {members.length > 0 ?  (
            <>
              <header className="flex justify-between items-center">
                <h2>Members Listing</h2>
                <div></div>
              </header>
              <div className="flex flex-1">
                
              </div>
            </>
          ) : (
            <div className="place-self-center flex flex-col items-center w-full">
              <h2>No members registered yet</h2>
              <div className="button mt-4">
                <span className="w-[30px] h-[30px]">
                  <svg className="w-full h-full block" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 24.5H36.75" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.5 36.75V12.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Add Members</span>
              </div>
            </div>
          )}
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="bg-white sticky top-0 flex items-center justify-between p-6 border-b-2 border-[#D9D9D9]">
      <h1>Members</h1>
      <div className="flex gap-8 items-center">
        <div className="button">
          <span className="w-[30px] h-[30px]">
            <svg className="w-full h-full block" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 24.5H36.75" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.5 36.75V12.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>Add Members</span>
        </div>
      </div>
    </header>
  );
}

export default Member;