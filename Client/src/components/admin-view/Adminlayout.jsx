import Sidebar from './sidebar'
import Header from './header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Adminlayout() {
  return (
    <div className='flex min-h-screen w-full'>
        <Sidebar/>

        <div className='flex flex-1 flex-col'>
            <Header/>

            <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Adminlayout