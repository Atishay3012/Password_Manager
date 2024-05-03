import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'> &lt;</span>
                    {/* <span>Pass</span><span className='text-green-500'>OP/&gt;</span> */}
                    <span>Password </span><span className='text-green-500'>Manager/&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/Home'>Home</a>
                        <a className='hover:font-bold' href='/'>Sign Out</a>
                        <a className='hover:font-bold' href='/about'>about</a>
                        <a className='hover:font-bold' href='/contact'>Contact Us</a>
                        {/* <a className='hover:font-bold' href='/passwordlist'>Password List</a> */}



                        
                    </li>
                </ul>
                <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
                <a href="https://github.com/Atishay3012/Password_Manager" target="_blank">
                     <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                     </a>
                    <span className='font-bold px-2'>GitHub</span>

                </button>
            </div>
        </nav>
    )
}

export default Navbar
