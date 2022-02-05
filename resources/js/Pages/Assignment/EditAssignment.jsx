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
import axios from "axios";

const EditAssignment = () => {
    const { assignmentInfo } = usePage().props;
    const { courseInfo, courseTitles } = usePage().props
    const [courseCode, setCourseCode] = useState([])
    const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [values, setValues] = useState({
        course_title: assignmentInfo.course_title,
        course_code: assignmentInfo.course_code,
        assignment_desc: assignmentInfo.assignment_desc,
        submit_date: assignmentInfo.submit_date,
        student_id: assignmentInfo.student_id
    })
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
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
        const mapping = Object.values(values).filter((item => !item.length))
        console.log('mapping', mapping);
        if (!mapping.length) {
            axios.put(route('edit_assignment', assignmentInfo.id), values)
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
            toast.error("Field Can't be empty!")
        }
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
                <span>Edit Individual Assignment</span>
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
                                defaultValue={assignmentInfo?.course_title}
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
                            id="assignment_desc"
                            name="assignment_desc"
                            label="Assignment Desc"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Assignment topic"
                            value={values?.assignment_desc}
                        />
                    </div>
                    <div className="main-card__right font-inter-600 text-md">
                        <TextInput
                            id="student_id"
                            name="student_id"
                            label="Student ID"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.student_id}
                            placeholder="Student ID..."
                        />
                        <div className="mt-4">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Submit Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={date}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                            </LocalizationProvider>
                        </div>


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

EditAssignment.layout = (page) => <Layout>{page}</Layout>;
export default EditAssignment;
