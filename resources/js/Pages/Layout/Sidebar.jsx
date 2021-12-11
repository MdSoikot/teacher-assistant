import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Profile from '../../Icons/Profile'

export default function Sidebar() {
    return (
        <div className="sidebar-main">
            <div className='flex col sidebar-main__menu'>
                <div className='flex gap-4'>
                    <Profile />
                    <InertiaLink
                        href={route('profile')}
                    >
                        Profile
                        {/* <span className="cursor-pointer">Profile</span> */}
                    </InertiaLink>
                </div>
                <div className='flex gap-4'>
                    <Profile />
                    <span>Manage Student</span>
                </div>
                <div className='flex gap-4'>
                    <Profile />
                    <span>Manage Teacher</span>
                </div>
                <div className='flex gap-4'>
                    <Profile />
                    <span>Manage User</span>
                </div>
                <div className='flex gap-4'>
                    <Profile />
                    <span>Manage Class</span>
                </div>
                <div className='flex gap-4'>
                    <Profile />
                    <span>Manage HW</span>
                </div>
                <div className='flex gap-4'>
                    <Profile />
                    <span>Profile</span>
                </div>
            </div>
        </div>
    )
}
