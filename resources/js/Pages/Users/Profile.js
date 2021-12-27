import React, { useState } from 'react'
import Layout from "../Layout/Layout"
import TextInput from '../../Shared/TextInput';
import SingleSelect from '../../Shared/SingleSelect';
import { usePage } from '@inertiajs/inertia-react';
import Button from '@mui/material/Button';
import Dropzone from '../../Shared/Dropzone';
import { toFormData } from '../../utils';
import { Inertia } from '@inertiajs/inertia';
import toast from 'react-hot-toast';

const Profile = () => {
    const role = 'student'
    const { userInfo } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        email: userInfo?.email || '',
        password: userInfo?.password || '',
        name: userInfo?.name || '',
        studentId: userInfo?.studentId || '',
        teacherId: userInfo?.teacherId || '',
        photo: userInfo.photo_path || '',
        department: userInfo?.department,
        batch: userInfo?.batch || '',
        role: userInfo?.role || '',
        phone: userInfo?.phone || '',
    });
    const userTypes = [
        { key: '', value: 'Select One' },
        { key: 'admin', value: 'Admin' },
        { key: 'student', value: 'Student' },
        { key: 'teacher', value: 'Teacher' },
    ]

    const [file, setFile] = useState(null);

    const handleFileChange = (file, name) => {
        setValues(oldValues => ({
            ...oldValues,
            [name]: file,
        }));
    }
    console.log(userInfo, file)

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues(oldValues => ({
            ...oldValues,
            [key]: value,
        }));
    }

    const handleSubmit = (e) => {
        const formData = toFormData(values, 'PUT');
        e.preventDefault();
        setSending(true);
        Inertia.post(route('profile_update', userInfo.id), formData, {
            onFinish: () => toast.success("Update Successfully"),
        });
    }

    const photoSrc = userInfo?.photo_path || ""
    console.log("photo", photoSrc, values);
    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>My Profile</span>
                <img className="rounded-full pro-pic" src={photoSrc} alt="user" />
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="main-card flex">

                    <div className='main-card__left'>
                        <TextInput
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.name}
                            placeholder="Your Name"
                        />
                        <TextInput
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.email}
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
                            value={values?.role}
                            isDesabled
                        />
                        {/* <TextInput
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            //onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Password"
                            value={userInfo?.password}
                        /> */}
                        <TextInput
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="phone"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Phone"
                            value={values?.phone}
                        />
                        <TextInput
                            id="studentId"
                            name="studentId"
                            label="Student Id"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Id"
                            value={values?.studentId}
                        />
                        {role === 'teacher' && <TextInput
                            id="teacherId"
                            name="teacherId"
                            label="Teacher Id"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Id"
                            value={values?.teacherId}
                        />}
                    </div>
                    <div className='main-card__right'>
                        {/* <img src={photoSrc} alt="peng ting" width="200" height="200" /> */}
                        <TextInput
                            id="batch"
                            name="batch"
                            label="Batch"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Batch"
                            value={values?.batch}
                        />
                        <TextInput
                            id="department"
                            name="department"
                            label="Department"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Department"
                            value={values?.department}
                        />
                        <Dropzone
                            label="Photo"
                            name="photo"
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            //errors={errors?.image}
                            value={values?.photo}
                            accept="image/*"
                            onChange={handleFileChange}
                            multiple={false}
                        />
                        <div className='pt-3'>
                            <button className="btn-signup" type="submit">
                                Update
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div >
    )
}
Profile.layout = (page) => <Layout>{page}</Layout>
export default Profile
