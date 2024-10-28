import React from 'react'


function Hero() {
  return (
    <div className=' md:h-[100vh] h-[70vh] w-auto flex bg-cover bg-opacity-5 ' 
    style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1620739884719-de8c625b8094?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >

<div className='absolute md:h-[100vh] h-[70vh]  md:mt-0 inset-0 bg-opacity-60 bg-black'></div>

        <header className='mt-44 md:ml-20 ml-5 z-0'>
            
            <h1 className=' md:text-6xl text-2xl text-white font-bold mt-4 tracking-tight'>Effortless Booking, Anytime.</h1>
            <h1 className=' md:text-6xl text-2xl text-white font-bold tracking-wider mt-3'>Your Schedule, Your Way!</h1>
            <p className='text-white/80 font-semibold text-lg mt-5'>"Making Scheduling Simple, One Click at a Time"</p>

            

            <button className='bg-indigo-600 px-10 py-3 mt-7 rounded-full'>
                <span className='text-white font-semibold text-sm'>Book A Space</span>
            </button>

           
        </header>
        
    </div>
  )
}

export default Hero