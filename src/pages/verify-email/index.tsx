import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

function VerifyEmail() {
  const [otp, setOtp] = useState('');
  useEffect(() => {
    console.log(otp)
  }, [otp])
  return (
    <div className="min-h-screen px-24 md:px-6 py-12 md:py-6 flex bg-[linear-gradient(180deg,#009AF4_0%,#005A8E_100%)]">
      <div className="relative w-full p-12 md:px-6 md:py-16 xl:gap-8 md:gap-16 flex flex-col md:justify-normal xl:justify-center items-center rounded-xl bg-white">
        <div className="absolute xl:static top-12 left-12 self-start xl:self-center w-[100px] flex items-center justify-center">
          <img className="w-[21.25rem] h-auto" src="i/logo.png" alt="logo" />
        </div>
        <div className="flex  h-full xl:h-auto justify-center flex-col gap-y-8 w-full max-w-[600px]">
          <header className="flex text-center flex-col gap-2 mb-4">
            <h2>Verify Your Email</h2>
            <p className="text-sm">Enter code we sent to famayegrace@gmail.com</p>
          </header>
          <form action="">
            <OtpInput
              value={otp}
              onChange={(str) => setOtp(str.toUpperCase())}
              numInputs={6}
              inputStyle="text-[2rem] md:text-[1rem] py-8 md:py-4 flex-1 w-[100%_!important] rounded-lg border border-[#808080]-500 outline-primary"
              containerStyle="justify-between w-full gap-4 md:gap-2"
              // renderSeparator={<span>-</span>}
              renderInput={(props) => {
                return <input {...props} className={props.className + ` ${props.value !== "" && "border-primary"}`} />
                }
              }
            />
            <div className='flex flex-col gap-4 items-center'>
              <div className="button mt-12">Verify Code</div>
              <span>Resend code</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;