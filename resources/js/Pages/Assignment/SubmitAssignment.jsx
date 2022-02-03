import React, { useState } from "react";
import Layout from "../Layout/Layout";
import TextInput from "../../Shared/TextInput";
import SingleSelect from "../../Shared/SingleSelect";
import { usePage } from "@inertiajs/inertia-react";
import Button from "@mui/material/Button";
import { toFormData } from "../../utils";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";

import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Dropzone from "../../Shared/Dropzone";

const SubmitAssignment = () => {
    const { courseInfo, courseTitles } = usePage().props
    const [courseCode, setCourseCode] = useState([])
    const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [values, setValues] = useState({
        course_title: '',
        course_code: '',
        assignment_file: '',
        assignment_topic: '',
        student_id: ''
    })
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    const [file, setFile] = useState(null);
    const handleFileChange = (file, name) => {
        setValues(oldValues => ({
            ...oldValues,
            [name]: file,
        }));
    }
    const handleSelect = (val, key) => {
        if (key === 'course_title') {
            console.log("ddd", key, val);
            const course = courseInfo.find(o => o.course_title === val);
            if (courseCode) {
                let tmpKey = "course_code"
                setValues((oldValues) => ({
                    ...oldValues,
                    [tmpKey]: course?.course_code,
                }));
            }
        }
        setValues((oldValues) => ({
            ...oldValues,
            [key]: val,
        }));
    }
    const dateFormat = (newVal) => {
        let date = new Date(newVal)
        let day = date.getDay()
        let month = date.getMonth()
        let year = date.getFullYear()
        let dateString = day + "-" + month + "-" + year
        return dateString
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const mapping = Object.values(values).filter((item => !item.length))
        // console.log('mapping', mapping);
        // if (!mapping.length) {
        //     Inertia.post(route('add_assignment'), values, {
        //         onFinish: () => {
        //             setValues({
        //                 course_title: '',
        //                 course_code: '',
        //                 assignment_desc: '',
        //                 submit_date: '',
        //                 student_id: ''
        //             }),
        //                 toast.success("Save Successfuly!")
        //         }
        //     });
        // } else {
        //     toast.error("Field Can't be empty!")
        // }
    }
    const handleDateChange = (newVal) => {
        let type = 'submit_date'
        let tmpDate = dateFormat(newVal)
        setDate(tmpDate)
        setValues((oldVal) => ({
            ...oldVal,
            [type]: tmpDate
        }))
    };
    console.log('values', values);
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Submit Assignment</span>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="main-card flex">
                    <div className="main-card__left">
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Course Name</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                onChange={val => handleSelect(val, 'course_title')}
                                options={courseTitles}
                                singleSelect
                            />
                        </div>
                        <TextInput
                            id="course_code"
                            name="course_code"
                            label="Course Code"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.course_code}
                            placeholder="Course Code..."
                        />
                        <TextInput
                            id="student_id"
                            name="student_id"
                            label="Student ID"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Student ID..."
                        />

                    </div>
                    <div className="main-card__right font-inter-600 text-md">
                        <TextInput
                            id="assignment_topic"
                            name="assignment_topic"
                            label="Assignment Topic"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Assignment topic"
                        // value={values?.phone}
                        />
                        <Dropzone
                            label="Assignment File"
                            name="assignment_file"
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            //errors={errors?.image}
                            // value={values?.photo}
                            accept="image/*, *.pdf"
                            onChange={handleFileChange}
                        //multiple={false}
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

SubmitAssignment.layout = (page) => <Layout>{page}</Layout>;
export default SubmitAssignment;
