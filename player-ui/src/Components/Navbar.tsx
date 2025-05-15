import { useState,useRef } from 'react'


function Navbar() {



  const inputRef = useRef(null);


  const [tooltip, settooltip] = useState<boolean>(false);
  const [ssearchtooltip, setssearchtooltip] = useState<boolean>(false);

  
  

  const handleFocusInput = () => {
        inputRef.current?.focus();
  }



  return (
    <div className='m-0 p-0'>
        <div className='nav-real bg-[rgba(0,0,0,0)] flex items-center justify-start'>

          <div className="logomain-container flex items-center justify-between p-0.5 ml-1">

          {/* Logo */}
            
            <div className="logospo text-white text-[22px] cursor-pointer m-4">
            <i className="fa-brands fa-spotify fa-xl"></i>
            </div>

            {/* Home logo */}

            <div className="homeicon m-2 text-white text-[20px] bg-[rgba(31,31,31)] rounded-full flex items-center justify-center w-12 h-12 cursor-pointer relative"
            onMouseEnter={() => settooltip(true)}
            onMouseLeave={() => settooltip(false)}
            
            >
               <svg 
                data-encore-id="icon" 
                role="img" 
                aria-hidden="true" 
                className="h-7 w-7 fill-white" 
                viewBox="0 0 24 24"
              >
                <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
               </svg>
               {/* Tooltip */}

              { tooltip && (<div className='bg-[#2e2e2e] text-white absolute top-12 w-auto h-auto p-1 m-1 font-bold'>
                <p className='text-[14px]'>Home</p>
               </div>)}
               
               
      </div>
          </div>



           {/* Input */}

<div className="inputmain text-white m-1 px-3 transition ease-in flex items-center justify-between w-120 rounded-l-4xl rounded-r-4xl bg-[rgba(31,31,31)] border border-transparent focus-within:border-[2px] focus-within:border-white hover:bg-[rgba(43,43,43)] focus: transform duration-100">
  
  {/* Input icon search */}

  <button className="iconone cursor-pointer m-1 p-0.5 relative" onClick={handleFocusInput}
  onMouseEnter={() => setssearchtooltip(true)}
  onMouseLeave={()=> setssearchtooltip(false)}
  >
    {/* <i className="fa-solid fa-magnifying-glass fa-xl"></i> */}
    <div>
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="25"
  height="25"
  role="img"
  aria-hidden="true"
  className="icon-search text-white fill-[#d6d6d6] font-bold hover:fill-[#ffff]"
>
  <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"/>
</svg>
    </div>
    {/* SearchTooltip */}

   { ssearchtooltip&& (<div className="searchtip bg-[rgba(31,31,31)] mt-1 h-auto w-autotop-full p-1 m-1 absolute top-10 right-0.2">
      <p className='text-[14px] font-bold'>Search</p>
    </div>)}


  </button>


  {/* Input text */}
  <div className="inputtext">
    <input type="text" ref={inputRef} className="text-white p-3 w-90 border-none outline-none ring-0" placeholder="What do you want to play?" />
  </div>

  {/* icon cart */}
  <button className="icontwo cursor-pointer m-1">
  <svg
  data-encore-id="icon"
  role="img"
  aria-hidden="true"
  aria-label="bag-icon"
  className="w-7 h-7 text-white"
  viewBox="0 0 24 24"
  fill="currentColor"
  onClick={handleFocusInput}
>
  <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
  <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
</svg>
  </button>



</div>

          
          
            
        </div>
    </div>
  )
}

export default Navbar