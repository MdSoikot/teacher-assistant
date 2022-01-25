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

const AddCourse = () => {
    const [values, setValues] = useState({
        course_title: '',
        course_code: '',
        department: '',
        course_credit: '',
        course_outline: ''
    })
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    const handleFileChange = (file, name) => {
        setValues(oldValues => ({
            ...oldValues,
            [name]: file,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof (values.course_outline), values.course_outline.preview)
        const mapping = Object.values(values).filter((item => !values?.course_outline?.preview && !item.length))
        if (!mapping.length) {
            Inertia.post(route('add_course'), values, {
                onFinish: () => {
                    setValues({
                        course_title: '',
                        course_code: '',
                        course_credit: '',
                        course_outline: '',
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
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Add Course</span>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="main-card flex">
                    <div className="main-card__left">
                        <TextInput
                            id="course_title"
                            name="course_title"
                            label="Course Name"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Course Name"
                        />
                        <TextInput
                            id="course_code"
                            name="course_code"
                            label="Course Code"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.email}
                            placeholder="Course Code"
                        />

                        <TextInput
                            id="course_credit"
                            name="course_credit"
                            label="Course Cradit"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Course Cradit"
                        // value={values?.phone}
                        />
                        <TextInput
                            id="department"
                            name="department"
                            label="Department"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Department"
                        // value={values?.studentId}
                        />
                    </div>
                    <div className="main-card__right font-inter-600 text-md">
                        <Dropzone
                            label="Outline"
                            name="course_outline"
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            //errors={errors?.image}
                            // value={values?.photo}
                            accept="image/*, *.pdf"
                            onChange={handleFileChange}
                            multiple={false}
                        />


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

AddCourse.layout = (page) => <Layout>{page}</Layout>;
export default AddCourse;
