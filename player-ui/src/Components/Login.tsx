import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center bg-blue-800 h-160'>
    <div className='login-container bg-black text-white font-sans h-120 w-120 flex justify-center items-center'>
        <div className="boxes bg-amber-900 p-10">
          {/* icon */}
          <div className="icon font-5xl font-bold text-[25px] bg-blue-800 flex justify-center items-center p-5">
         <i className="fa-brands fa-spotify fa-2xl"></i>
          </div>
          <div className="context font-bold text-[30px] text-white font-sans">
            Login in to Spotify
          </div>
            {/* One */}
            <div className="boxone">
              
                


            </div>
            {/*  */}
        </div>
    </div>
    </div>
  )
}

export default Login