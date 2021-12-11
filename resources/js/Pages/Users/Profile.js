import React from 'react'
import Layout from "../Layout/Layout"
import TextInput from '../../Shared/TextInput';

const Profile = () => {
    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4'>
                My Profile
            </div>
            <div className="main-card">
                <div>
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
                        id="role"
                        name="role"
                        label="Role"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Password"
                    />
                    <TextInput
                        id="studentId"
                        name="studentId"
                        label="Student Id"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Password"
                    />
                    <TextInput
                        id="teacherId"
                        name="teacherId"
                        label="Teacher Id"
                        type="text"
                        //onChange={handleChange}
                        inputClass="profile-textinput-input"
                        inputLabelClass="font-inter-600 text-md"
                        placeholder="Your Password"
                    />
                </div>

            </div>
        </div>
    )
}
Profile.layout = (page) => <Layout>{page}</Layout>
export default Profile
