import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import TextInput from '../../Shared/TextInput'
import Layout from '../Layout/Layout'

const SubstituteTeacher = () => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        department: '',
        teacher_id: '',
        phone: '',
        office_room_no: '',
        designation: ''

    });
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues(oldValues => ({
            ...oldValues,
            [key]: value,
        }));
    }

    const handleSubmit = (e) => {
        console.log(values)
        e.preventDefault();
        const mapping = Object.values(values).filter((item => !item.length))
        console.log(mapping)
        //setSending(true);
        if (!mapping.length) {
            Inertia.post(route('add_substitute_teacher'), values, {
                onFinish: () => {
                    setValues({
                        email: '',
                        name: '',
                        department: '',
                        teacher_id: '',
                        phone: '',
                        office_room_no: '',
                        designation: ''

                    }),
                        toast.success("Save Successfuly!")
                }
            });
        } else {
            toast.error("Field Can't be empty!")
        }
    }

    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Add Substitute Teacher</span>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="main-card flex">

                    <div className='main-card__left'>
                        <TextInput
                            id="name"
                            name="name"
                            label="Teacher Name"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.name}
                            placeholder="Teacher Name..."
                        />
                        <TextInput
                            id="teacher_id"
                            name="teacher_id"
                            label="Teacher ID"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.teacherId}
                            placeholder="Teacher ID..."
                        />
                        <TextInput
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.phone}
                            placeholder="Phone..."
                        />
                        <TextInput
                            id="office_room_no"
                            name="office_room_no"
                            label="Office Room No"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.officeRoomNo}
                            placeholder="Office Room No..."
                        />


                    </div>
                    <div className='main-card__right'>
                        <TextInput
                            id="department"
                            name="department"
                            label="Department"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.department}
                            placeholder="Department..."
                        />
                        <TextInput
                            id="email"
                            name="email"
                            label="Email"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.email}
                            placeholder="Email..."
                        />
                        <TextInput
                            id="designation"
                            name="designation"
                            label="Designation"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.designation}
                            placeholder="Designation..."
                        />
                        <div className='pt-20'>
                            <button className="btn-signup" type="submit">
                                Save
                            </button>
                        </div>


                    </div>

                </div>
            </form>
        </div >
    )
}

SubstituteTeacher.layout = (page) => <Layout>{page}</Layout>
export default SubstituteTeacher
