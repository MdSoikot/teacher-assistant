import React from 'react'
import Layout from "../Layout/Layout"
import TextInput from '../../Shared/TextInput';
import SingleSelect from '../../Shared/SingleSelect';
import { usePage } from '@inertiajs/inertia-react';

const Profile = () => {
    const role = 'student'
    const { userInfo } = usePage().props;
    console.log(userInfo)
    const userTypes = [
        { key: '', value: 'Select One' },
        { key: 'admin', value: 'Admin' },
        { key: 'student', value: 'Student' },
        { key: 'teacher', value: 'Teacher' },
    ]
    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4'>
                My Profile
            </div>
            <div className="main-card flex">
                <div className='main-card__left'>
                    <TextInput
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        value={userInfo?.name}
                        placeholder="Your Name"
                    />
                    <TextInput
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        value={userInfo?.email}
                        placeholder="Your Email"
                    />
                    <SingleSelect
                        id="role"
                        name="role"
                        label="Role"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        labelClass="font-inter-600 text-md"
                        optionValues={userTypes}
                        value={userInfo?.role}
                        isDesabled
                    />
                    <TextInput
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Password"
                        value={userInfo?.password}
                    />
                    <TextInput
                        id="phone"
                        name="phone"
                        label="Phone"
                        type="phone"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Phone"
                        value={userInfo?.phone}
                    />
                    <TextInput
                        id="studentId"
                        name="studentId"
                        label="Student Id"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Id"
                        value={userInfo?.studentId}
                    />
                    {role === 'teacher' && <TextInput
                        id="teacherId"
                        name="teacherId"
                        label="Teacher Id"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Id"
                        value={userInfo?.teacherId}
                    />}
                </div>
                <div className='main-card__right'>
                    <TextInput
                        id="batch"
                        name="batch"
                        label="Batch"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Batch"
                        value={userInfo?.batch}
                    />
                    <TextInput
                        id="department"
                        name="department"
                        label="Department"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Department"
                        value={userInfo?.department}
                    />
                </div>

            </div>
        </div>
    )
}
Profile.layout = (page) => <Layout>{page}</Layout>
export default Profile
