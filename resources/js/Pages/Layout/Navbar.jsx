import { Link } from '@inertiajs/inertia-react'

const Navbar = () => {
    return (
        <div className='flex justify-between nav-main items-center'>
            <div className='font-montserrat-600 text-lg'>
                <Link className='ml-6'>Teaching Assist</Link>
            </div>
            <div className='font-montserrat-600 text-lg'>
                <Link className='mr-6' method='post' href='/logout'>Logout</Link>
            </div>
        </div>
    )
}

export default Navbar
