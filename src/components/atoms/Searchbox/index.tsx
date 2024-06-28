function Searchbox() {
  return (
    <div className="rounded-xl gap-2 items-center p-3 flex bg-[#F5F5F5]">
      <span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#2A2A2E" strokeWidth="1.5"/>
          <path d="M16.5303 15.4697L16 14.9393L14.9393 16L15.4697 16.5303L16.5303 15.4697ZM18.9697 20.0303C19.2626 20.3232 19.7374 20.3232 20.0303 20.0303C20.3232 19.7374 20.3232 19.2626 20.0303 18.9697L18.9697 20.0303ZM15.4697 16.5303L18.9697 20.0303L20.0303 18.9697L16.5303 15.4697L15.4697 16.5303Z" fill="#2A2A2E"/>
        </svg>
      </span>
      <input className="outline-none border-none bg-transparent" type="text" placeholder="Search..." />
    </div>
  );
}

export default Searchbox;