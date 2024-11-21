import React from 'react'
import ShoppingHeader from "./ShoppingHeader"
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        <ShoppingHeader/>

        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default layout