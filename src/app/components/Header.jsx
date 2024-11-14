'use client'
import { Button } from '@/components/ui/button';
import { Info, Moon, Sun, Video } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
    const {theme,setTheme} = useTheme();
    const {data:session,status} = useSession()
    const [open,setOpen] = useState(false)

    const formatTimeDate =()=>{
        const now = new Date();
        return now.toLocaleString("en-US",{
            hour:'numeric',
            minute:'numeric',
            hour12:false,
            weekday:'short',
            month:'short',
            day:'numeric'
        })
    }
  return (
    <div className='flex items-center justify-between p-6 bg-white dark:bg-gray-900 border-b dark:border-gray-700 '>
    <div className='flex items-center space-x-4'>
        <Link href='/' className='flex items-center space-x-2'>
        <Video className='w-8 h-8 text-blue-500'/>
        <span className='hidden md:block text-xl font-semibold text-gray-800 dark:text-white'>
          Collab Meet
        </span>
        </Link>
    </div>
    <div className='flex items-center space-x-4'>
        <span className='text-md text-gray-500 dark:text-gray-200'>
             {formatTimeDate()}
        </span>
        <Button variant="ghost" size='icon' onClick={() => setTheme(theme === 'dark'? "light" : "dark")}>
                {theme === 'dark ' ?(
                  <Sun className='w-5 h-5 text-orange-500'/>
                ):(
                  <Moon className='w-5 h-5 text-blue-500'/>
                )}
               
                
            </Button>
            <Button variant="ghost" size='icon' className="hidden md:block">
                <Info className='w-5 h-5 ml-2'/>
            </Button>
        </div>
    </div>
  )
}

export default Header