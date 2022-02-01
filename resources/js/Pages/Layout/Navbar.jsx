import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react';
import { useRecoilState, useSetRecoilState } from 'recoil'
import { $user } from '../../GlobalStates';

const Navbar = () => {
    // const { userInfo } = usePage().props;
    const [userInfo, setUserInfo] = useRecoilState($user)
    console.log("ams", userInfo)
    // const test = { ...userInfo }
    // setUser(test)
    // console.log('test', test);
    const photoSrc = userInfo?.photo_path || ""
    const userName = userInfo?.name || ""
    return (
        <div className='flex justify-between nav-main items-center'>
            <div className='font-montserrat-600 text-lg'>
                <Link className='ml-6' href='/dashboard'>Teaching Assist</Link>
            </div>
            <div className='font-montserrat-600 text-lg flex flex-row'>
                <Link className='mr-6' method='post' as="button" href='/logout'>Logout</Link>
                {photoSrc ? (
                    <img className=" w-40 h-40 rounded-3xl mr-5 pro-pic" src={photoSrc} alt="user" />
                ) : (
                    <h3>{userName}</h3>
                )}
            </div>
        </div>
    )
}

export default Navbar
