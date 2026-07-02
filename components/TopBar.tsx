'use client'
import React, { useState } from 'react'

const TopBar = () => {
    const [open ,setOpen]=useState(false)
  return (
    <div className='md:hidden flex items-center justify-between'>
        <div className='flex items-center justify-between gap-2'>
            <img src="/logo-mobile.svg" alt='logo-mobile' />
        <h1>platform launch</h1>
        <img src="/icon-chevron-down.svg" alt="icon-chevron-down" />
        </div>

        <div className='flex items-center justify-between gap-2'>

        </div>
    </div>
  )
}

export default TopBar