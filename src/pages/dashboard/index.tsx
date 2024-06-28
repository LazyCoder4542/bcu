import Searchbox from "../../components/atoms/Searchbox";
function Dashboard() {
  return ( 
    <main className="flex flex-col relative overflow-y-scroll flex-1 h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col h-full bg-[#fafafa] p-6 gap-6">
          <h2>Welcome, Grace!</h2>
          <div className="flex flex-wrap justify-between gap-y-8 *:basis-[32%] *:shadow-sm">
            <div className="items-center flex p-8 pr-4 rounded-xl text-white bg-[linear-gradient(180deg,#009AF4_0%,#005A8E_100%)]">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center flex p-8 pr-4 rounded-xl bg-white text-primary">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center flex p-8 pr-4 rounded-xl bg-white text-primary">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center flex p-8 pr-4 rounded-xl bg-white text-primary">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center flex p-8 pr-4 rounded-xl bg-white text-primary">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center flex p-8 pr-4 rounded-xl bg-white text-primary">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div className="items-center flex p-8 pr-4 rounded-xl bg-white text-primary">
              <div className="flex-1 flex flex-col gap-6">
                <h4>TOTAL MEMBERS</h4>
                <p className="text-[2rem] font-bold">6,451</p>
              </div>
              <div>
                <span className="bg-[#2AABF6] block p-2 rounded-full">
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0804 12.2287C13.9679 12.2175 13.8329 12.2175 13.7091 12.2287C11.0316 12.1387 8.9054 9.945 8.9054 7.245C8.9054 4.48875 11.1329 2.25 13.9004 2.25C16.6566 2.25 18.8954 4.48875 18.8954 7.245C18.8841 9.945 16.7579 12.1387 14.0804 12.2287Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.45557 16.38C5.73307 18.2025 5.73307 21.1725 8.45557 22.9837C11.5493 25.0537 16.6231 25.0537 19.7168 22.9837C22.4393 21.1612 22.4393 18.1913 19.7168 16.38C16.6343 14.3213 11.5606 14.3213 8.45557 16.38Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-[400px] px-4 py-10">
          <div className="p-4 rounded-lg border border-[#80808088]">
            <header className="flex justify-between">
              <h3 className="font-semibold">Pending Approval</h3>
              <span className="px-6 py-2 rounded-lg border border-[#80808088]">See All</span>
            </header>
            <div className="flex min-h-16 justify-center items-center">
              <p>No pending approvals</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="bg-white sticky top-0 flex items-center justify-between p-6 border-b-2 border-[#D9D9D9]">
      <h1>Dashboard</h1>
      <div className="flex gap-8 items-center">
        <Searchbox />
        <div>
          <span>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.031 4.60736C13.7901 4.60736 9.53095 8.86653 9.53095 14.1074V18.6832C9.53095 19.649 9.11928 21.1215 8.62845 21.9449L6.80762 24.969C5.68345 26.8374 6.45928 28.9115 8.51762 29.6082C15.3418 31.8882 22.7043 31.8882 29.5284 29.6082C31.4443 28.9749 32.2834 26.7107 31.2384 24.969L29.4176 21.9449C28.9426 21.1215 28.531 19.649 28.531 18.6832V14.1074C28.531 8.88236 24.256 4.60736 19.031 4.60736Z" stroke="#808080" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
              <path d="M21.9609 5.06666C21.47 4.92416 20.9634 4.81332 20.4409 4.74999C18.9209 4.55999 17.4642 4.67082 16.1025 5.06666C16.5617 3.89499 17.7017 3.07166 19.0317 3.07166C20.3617 3.07166 21.5017 3.89499 21.9609 5.06666Z" stroke="#808080" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.781 30.1784C23.781 32.7909 21.6435 34.9284 19.031 34.9284C17.7327 34.9284 16.5293 34.3901 15.6743 33.5351C14.8193 32.6801 14.281 31.4768 14.281 30.1784" stroke="#808080" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="rounded-full overflow-hidden w-[50px] aspect-square">
            <img className="w-[120%] h-full object-cover object-center" src="/i/female.jpg" alt="" />
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