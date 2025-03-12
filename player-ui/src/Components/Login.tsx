import React from 'react'

function Login() {
  return (
    <>
    <div className='flex items-center justify-center m-10 m-t-0'>
    <div className='login-container bg-[#191919] text-white font-sans w-140 flex justify-center items-center'>
        <div className="boxes bg-black-900 p-10">
          {/* icon */}
          <div className="icon font-5xl font-bold text-[25px] flex justify-center items-center m-10">
         <i className="fa-brands fa-spotify fa-2xl"></i>
          </div>
          <div className="context font-bold text-[30px] text-white font-sans m-5 flex items-center justify-center">
           <p>Log in to Spotify</p>
          </div>
            {/* One */}
            <div className="boxone text-[17px] font-sans font-bold flex justify-around items-center border-2 border-white  p-3 rounded-3xl m-5 w-100">
              <div className="fronticon">
              <i className="fa-brands fa-google fa-xl hover:cursor-pointer"></i>
              </div>
              <div className="box-content">
                Login via Google
              </div>
            </div>
            {/* Two */}

            <div className="boxone text-[17px] font-sans font-bold flex justify-around items-center border-2 border-white  p-3 rounded-3xl m-5 w-100 max-w-full">
              <div className="fronticon">
              <i className="fa-brands fa-facebook fa-xl hover:cursor-pointer"></i>
              </div>
              <div className="box-content">
                Login via Facebook
              </div>
            </div>


            {/* Three */}

            <div className="boxone text-[17px] font-sans font-bold flex justify-around items-center border-2 border-white  p-3 rounded-3xl m-5 w-100 max-w-full">
              <div className="fronticon">
              <i className="fa-brands fa-apple fa-xl hover:cursor-pointer"></i>
              </div>
              <div className="box-content">
                Login via Apple
              </div>
            </div>

            {/* Four */}

            <hr  className='m-10 text-gray-800'/>

            <div className="textinfo mt-15 flex items-center justify-start ml-20">
              <p className='font-sans font-bold text-[14px] mb-2'>Email or Username</p>
            </div>
         <div className="inputlogin flex items-center justify-center">
        <input type="text" className='font-sans border-gray-600 border-[0.5px] w-80 h-12 text-white placeholder-white-700 p-3 rounded-md' placeholder='Email or Username'/>
         </div>

         {/* Button */}
         <div className='flex items-center justify-center m-5 m-b-8'>
         <button className='bg-green-400 text-black h-12 w-80 font-bold text-[18px] rounded-4xl hover:cursor-pointer hover:bg-green-500'>Continue</button>
         </div>

         {/* Sign in */}

         <div className="signintext flex items-center justify-center gap-5">
          <p className='text-emerald-700'>Don't have an account?</p>
          <a href="/" className='hover:text-green-600'>Sign_up_for_free</a>
         </div>
        </div>
    </div>
    </div>

    {/* Part-2 Footer */}

    <div className="footerlogin bg-black relative bottom-0 h-15 flex items-center justify-center">
      <p className='text-emerald-800 text-[14px]'>
        <span>This site is protected by reCAPTCHA and the Google <a href='/'>Privacy Policy</a> and Terms of Service apply.</span>
      </p>

    </div>


    </>
  )
}

export default Login