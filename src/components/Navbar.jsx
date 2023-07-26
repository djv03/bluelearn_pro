import React, { useState } from 'react'
import Link from 'next/link'
function Navbar({ logout, user }) {

   
    // console.log(user)
    return (
        <div className=' flex flex-col content-center items-center md:mt-4   md:flex-row md: justify-between md:w-[80vw] md:m-auto  ' >
            <div className="logo-section bg-gray-900 px-6 py-2 rounded-3xl my-4">
                <Link href={'/'}>
                    <p className='text-3xl'> <span className='text-blue-600 '>blue</span>learn</p>
                </Link>
                {/* <Image className=' h-20 w-32 rounded-md' src={mainlogo} alt='merchdjv.com0'></Image> */}
            </div>
            <div className="flex justify-center items-center  navlinks-section bg-gray-900  p-4 rounded-3xl">
                <Link href={'/'}>
                    <li className='   font-bold list-none px-4 transition  hover:text-indigo-500 duration-200'>Hire </li>
                </Link>
                <Link href={'/'}>
                    <li className='font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Find work</li>
                </Link>
                <Link href={'/'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Community</li>
                </Link>
                <Link href={'/'}>
                    <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Events</li>
                </Link>

            </div>
            <div className="nav-end flex flex-col md:flex-row md:justify-center md:items-center ">
                <div className="download-btn my-4 md:m-0">

                <Link href={'/'} >
                    <button className='rounded-3xl bg-blue-500 px-4 py-3 mx-24 md:mx-3 font-bold'>Download the App</button>
                </Link>
                </div>
                <div className="end-btns flex justify-center items-center md:flex-none">

                {user.value && <button className='rounded m-4 p-2 h-10 ease-in duration-100 font-bold cursor-default '> Hello, {user.value}   </button>
                }
                {user.value && <Link href={'/'}>
                    <button onClick={logout} className='rounded-lg bg-slate-700 px-6 py-3 mx-3 font-bold  transition  hover:text-indigo-500 duration-200 '>logout </button>
                </Link>}
                {!user.value &&
                    <Link href={'/login'}>
                        <button className='rounded bg-slate-400 text-emerald-300  m-4 p-2 w-24 h-10 ease-in duration-100 font-bold hover:bg-slate-600 '>login </button>
                    </Link>
                }
                {!user.value &&
                    <Link href={'/signup'}>
                        <button className='rounded-lg bg-slate-700 px-6 py-3 mx-3 font-bold  transition  hover:text-indigo-500 duration-200 '>Sign up</button>
                    </Link>
                }
                </div>
            </div>
        </div>
    )
}

export default Navbar