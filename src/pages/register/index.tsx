import { useState } from "react";
import Checkbox from "../../components/atoms/Checkbox";

function Register() {
  const [isChecked, setIsChecked] = useState(false)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return (
    <div className="h-screen flex p-12 items-center">
      <div className="flex-1 flex flex-col gap-y-6">
        <header className="flex flex-col gap-y-3">
          <h1>Create Account</h1>
          <p className="text-sm font-light">Already have an account? <span className="font-bold text-primary">Log In</span></p>
        </header>
        <form action="">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-[0.62rem]">
              <label htmlFor="email" className="text-[#282828] font-semibold">Email Address</label>
              <input className="border-#D0D0D0 outline-none border p-5 rounded-lg focus:border-[#009AF4] text-[#282828]" type="email" id="email" placeholder="Enter email" />
            </div>
            <div className="flex flex-col gap-y-[0.62rem]">
              <label htmlFor="password" className="text-[#282828] font-semibold">Password</label>
              <div className="flex items-center relative">
                <input className="w-full border-#D0D0D0 outline-none border p-5 rounded-lg focus:border-[#009AF4] text-[#282828]" type={isPasswordShown ? "text" : "password"} id="password" placeholder="Enter password" />
                <span className="absolute right-5 cursor-pointer" onClick={() => setIsPasswordShown(!isPasswordShown)} role="button" aria-label={isPasswordShown ? "Hide password" : "Show password"}>
                  {isPasswordShown ? (
                    <img src="i/eye-slash.svg" alt="hidden" />
                  ) : (
                    <img src="i/eye.svg" alt="shown" />
                  )
                  }
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-[0.62rem]">
              <label htmlFor="password" className="text-[#282828] font-semibold">Confirm Password</label>
              <input className="border-#D0D0D0 outline-none border p-5 rounded-lg focus:border-[#009AF4] text-[#282828]" type="password" id="confirm_password" placeholder="Confirm password" />
            </div>
            <div className="flex justify-between">
              <Checkbox label="Remember Me" checked={isChecked} onChange={() => {
                setIsChecked(!isChecked)
              }} />
              <span className="text-sm text-primary font-semibold">Forgot Password?</span>
            </div>
          </div>
          <div className="button">Sign Up</div>
        </form>
      </div>
      <div className="flex-1 max-w-[650px] flex items-center justify-center">
        <img className="w-[21.25rem]" src="i/logo.png" alt="logo" />
      </div>
    </div>
  );
}

export default Register;