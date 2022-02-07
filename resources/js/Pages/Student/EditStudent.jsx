import React, { useState } from "react";
import Layout from "../Layout/Layout";
import TextInput from "../../Shared/TextInput";
import SingleSelect from "../../Shared/SingleSelect";
import { toFormData } from "../../utils";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { usePage } from "@inertiajs/inertia-react";
import axios from "axios";

const EditStudent = () => {
    const { studentInfo } = usePage().props;
    const [values, setValues] = useState({
        student_name: studentInfo.student_name,
        batch: studentInfo.batch,
        student_id: studentInfo.student_id,
        student_email: studentInfo.student_email,
        department: studentInfo.department,
        section: studentInfo.section,
        student_phone: studentInfo.student_phone,
    });
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        console.log(`val`, value)
        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    const handleSelect = (val, key) => {
        setValues((oldValues) => ({
            ...oldValues,
            [key]: val,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`values`, values)
        const mapping = Object.values(values).filter(
            (item) => !item.length
        );
        console.log("map", mapping);
        if (!mapping.length) {
            axios.put(route('edit_student', studentInfo.id), values)
                .then((res) => {
                    const { data } = res
                    if (data.status === 'success') {
                        console.log('res', res);

                        toast.success("Update Successfuly!")
                        useEffect(() => {
                            console.log("i")
                        }, [])
                    } else {
                        toast.error("Update Failed!")
                    }
                })
        } else {
            toast.error("Field Can't be empty!");
        }
    };
    const department = [
        { value: '', label: 'Select One' },
        { value: 'cse', label: 'CSE' },
        { value: 'eee', label: 'EEE' },
        { value: 'bba', label: 'BBA' },
        { value: 'cen', label: 'CEN' },
        { value: 'tex', label: 'TEX' },
        { value: 'llb', label: 'LLB' },
        { value: 'eng', label: 'ENG' },
    ]
    const batch = [
        { value: '', label: 'Select One' },
        { value: 'cse-16', label: 'CSE-16' },
        { value: 'cse-17', label: 'CSE-17' },
        { value: 'cse-18', label: 'CSE-18' },
        { value: 'cse-19', label: 'CSE-19' },
        { value: 'cse-20', label: 'CSE-20' },
        { value: 'cse-21', label: 'CSE-21' },
        { value: 'cse-22', label: 'CSE-22' },
        { value: 'cse-23', label: 'CSE-23' },
        { value: 'cse-24', label: 'CSE-24' },
        { value: 'cse-25', label: 'CSE-25' },
    ]
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Edit Student</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="main-card flex">
                    <div className="main-card__left">
                        <div>
                            <h3 className="font-inter-600 text-md mb-2">Department</h3>
                            <MultiSelect
                                className="w-full"
                                defaultValue={values.department}
                                onChange={val => handleSelect(val, 'department')}
                                options={department}
                                singleSelect
                            />
                        </div>
                        <div className="mb-2">
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Batch</h3>
                            <MultiSelect
                                className="w-full"
                                defaultValue={values.batch}
                                onChange={val => handleSelect(val, 'batch')}
                                options={batch}
                                singleSelect
                            />
                        </div>
                        <TextInput
                            id="student_name"
                            name="student_name"
                            label="Student Name"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.student_name}
                            placeholder="Student Name"
                        />


                        <TextInput
                            id="student_id"
                            name="student_id"
                            label="Student Id"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Student Id"
                            value={values?.student_id}
                        />


                    </div>
                    <div className="main-card__right font-inter-600 text-md">
                        <TextInput
                            id="section"
                            name="section"
                            label="Section"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Section"
                            value={values?.section}
                        />
                        <TextInput
                            id="student_email"
                            name="student_email"
                            label="Student Email"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="student Email"
                            value={values?.student_email}
                        />
                        <TextInput
                            id="student_phone"
                            name="student_phone"
                            label="Student Phone"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="student Phone"
                            value={values?.student_phone}
                        />
                        <div className="pt-3">
                            <button className="btn-signup" type="submit">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

EditStudent.layout = (page) => <Layout>{page}</Layout>;
export default EditStudent;