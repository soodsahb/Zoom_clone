import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className=' flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image src='/icons/logo.svg' height={32} width={32} alt='zoom' className='max-sm:size-10'/>
        <p className='text-white text-[26px] font-extrabold max-sm:hidden'>YOOM</p>
      </Link>
      <div className=' flex flex-between gap-5'>
        {/* clerk user management */}
        <SignedIn>
          <UserButton/>
        </SignedIn>

        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar