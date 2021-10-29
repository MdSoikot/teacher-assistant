import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between nav-main items-center'>
            <div className='font-montserrat-600 text-lg'>
                <InertiaLink className='ml-6'>Teaching Assist</InertiaLink>
            </div>
            <div className='font-montserrat-600 text-lg'>
                <InertiaLink className='mr-6'>About</InertiaLink>
                <InertiaLink className='mr-6' href={route('login')}>Sign In</InertiaLink>
                <InertiaLink className='mr-6'>Sign Up</InertiaLink>
                <InertiaLink className='mr-6'>Logout</InertiaLink>
            </div>
        </div>
    )
}

export default Navbar
