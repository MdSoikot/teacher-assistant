import React, { useState } from "react";
import Layout from "../Layout/Layout";
import TextInput from "../../Shared/TextInput";
import SingleSelect from "../../Shared/SingleSelect";
import { usePage } from "@inertiajs/inertia-react";
import Button from "@mui/material/Button";
import { toFormData } from "../../utils";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import Dropzone from "../../Shared/Dropzone";

const AddStudent = () => {
    const [values, setValues] = useState({
        student_name: "",
        student_batch: "",
        student_id: "",
        student_department: "",
        student_email: "",
        student_phone: "",
    });
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    const handleFileChange = (file, name) => {
        setValues((oldValues) => ({
            ...oldValues,
            [name]: file,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            typeof values.course_outline,
            values.course_outline.preview
        );
        const mapping = Object.values(values).filter(
            (item) => !values?.course_outline?.preview && !item.length
        );
        if (!mapping.length) {
            Inertia.post(route("add_course"), values, {
                onFinish: () => {
                    setValues({
                        student_name: "",
                        student_batch: "",
                        student_id: "",
                        student_department: "",
                        student_email: "",
                        student_phone: "",
                    }),
                        toast.success("Save Successfuly!");
                },
            });
        } else {
            toast.error("Field Can't be empty!");
        }
    };
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Add Student</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="main-card flex">
                    <div className="main-card__left">
                        <TextInput
                            id="student_name"
                            name="student_name"
                            label="Student Name"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Student Name"
                        />
                        <TextInput
                            id="student_batch"
                            name="student_batch"
                            label="Student Batch"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.email}
                            placeholder="Student Batch"
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
                            // value={values?.phone}
                        />
                        <TextInput
                            id="student_department"
                            name="student_department"
                            label="Student Department"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="student Department"
                            // value={values?.studentId}
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
                            // value={values?.studentId}
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
                            // value={values?.studentId}
                        />
                    </div>
                    <div className="main-card__right font-inter-600 text-md">
                        

                        <div className="pt-3">
                            <button className="btn-signup" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

AddStudent.layout = (page) => <Layout>{page}</Layout>;
export default AddStudent;
