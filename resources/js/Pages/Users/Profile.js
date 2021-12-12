import React from 'react'
import Layout from "../Layout/Layout"
import TextInput from '../../Shared/TextInput';

const Profile = () => {
    const role = 'student'
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
                        placeholder="Your Email"
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
                    />
                    <TextInput
                        id="role"
                        name="role"
                        label="Role"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Role"
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
                    />


                </div>
                {/* <div className='main-card__right'>
                    hi
                </div> */}

            </div>
        </div>
    )
}
Profile.layout = (page) => <Layout>{page}</Layout>
export default Profile
