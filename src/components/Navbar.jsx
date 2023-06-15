import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainlogo from './mainlogo.webp'
function Navbar() {
    return (
        <div className='main flex justify-around mt-8'>
            <div className="logo-section bg-gray-900 px-6 py-2 rounded-3xl">
                <Link href={'/'}>
                    <p className='text-3xl'> <span className='text-blue-600 '>blue</span>learn</p>
                </Link>
                {/* <Image className=' h-20 w-32 rounded-md' src={mainlogo} alt='merchdjv.com0'></Image> */}
            </div>
            <div className="flex justify-center items-center  navlinks-section bg-gray-900 h-12   rounded-3xl">
                <Link href={'/'}>
                <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Hire talent</li>
                </Link>
                <Link href={'/'}>
                <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Find work</li>
                </Link>
                <Link href={'/'}>
                <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Community</li>
                </Link>
                <Link href={'/'}>
                <li className='  font-bold list-none px-4 transition  hover:text-indigo-500 duration-200 '>Events</li>
                </Link>

            </div>
            <div className="nav-end">
                <button className='rounded-3xl bg-blue-500 px-4 py-3 mx-3 font-bold'>Download the App</button>
                <button className='rounded-lg bg-slate-700 px-6 py-3 mx-3 font-bold  transition  hover:text-indigo-500 duration-200 '>Login</button>
                <button className='rounded-lg bg-slate-700 px-6 py-3 mx-3 font-bold  transition  hover:text-indigo-500 duration-200 '>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar