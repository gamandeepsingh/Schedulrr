import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs'
import UserMenu from './user-menu'
import { checkUser } from '../lib/checkUser'

const Header =async () => {
  await checkUser();
  return (
    <nav className='mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2'>
      <Link href={"/"} className='flex items-center'>
        <Image src={"/logo.jpg"} alt='Schedulrr logo' width={150} height={60} className='h-16 w-auto ml-10' />
      </Link>

      <div className='flex gap-4 items-center'>
        <Link href={"/events?create=true"}>
          <Button className='flex items-center gap-2'>
            <PenBox size={18} />
            Create Event
          </Button>
        </Link>
        <SignedOut>
          <SignUpButton forceRedirectUrl={"/dashboard"}>
            <Button variant={'outline'} >Login</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Header