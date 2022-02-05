import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Layout from "../Layout/Layout";
import TextInput from '../../Shared/TextInput';
import TimePicker from '@mui/lab/TimePicker';
import { LocalizationProvider } from "@mui/lab";
import LoadingButton from '../../Shared/LoadingButton'
import SingleSelect from '../../Shared/SingleSelect'

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import toast from "react-hot-toast";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import axios from "axios";
const EditRoutine = () => {
    const { routineInfo } = usePage().props;
    const [sending, setSending] = useState(false)
    const [startTimeValue, setStartTimeValue] = useState(new Date('2014-08-18T21:11:54'));
    const [endTimeValue, setEndTimeValue] = useState(new Date('2014-08-18T21:11:54'));
    const [values, setValues] = useState({
        course_title: routineInfo.course_title,
        course_code: routineInfo.course_code,
        room_no: routineInfo.room_no,
        building: routineInfo.building,
        batch: routineInfo.batch,
        day: routineInfo.day,
        start_time: '',
        end_time: ''
    })
    const timeFormat = (newVal) => {
        let date = new Date(newVal)
        let hour = date.getHours()
        let minute = date.getMinutes()
        let seconds = date.getSeconds()
        let timeString = hour + ":" + minute + ":" + seconds
        return timeString
    }
    const handleStartTime = (newVal) => {
        let finalVal = timeFormat(newVal)
        const type = "start_time"
        setStartTimeValue(newVal);
        setValues((oldVal) => ({
            ...oldVal,
            [type]: finalVal
        }))
    };
    const handleEndTime = (newVal) => {
        let finalVal = timeFormat(newVal)
        const type = "end_time"
        setEndTimeValue(newVal);
        setValues((oldVal) => ({
            ...oldVal,
            [type]: finalVal
        }))
    };
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    const days = [
        { key: '', value: 'Select One' },
        { key: 'sat', value: 'Saturday' },
        { key: 'sun', value: 'Sunday' },
        { key: 'mon', value: 'Monday' },
        { key: 'tue', value: 'Tuesday' },
        { key: 'wed', value: 'Wednesday' },
        { key: 'thu', value: 'Thursday' },
        { key: 'fri', value: 'Friday' },
    ]
    const batch = [
        { key: '', value: 'Select One' },
        { key: 'cse-16', value: 'CSE-16' },
        { key: 'cse-17', value: 'CSE-17' },
        { key: 'cse-18', value: 'CSE-18' },
        { key: 'cse-19', value: 'CSE-19' },
        { key: 'cse-20', value: 'CSE-20' },
        { key: 'cse-21', value: 'CSE-21' },
        { key: 'cse-22', value: 'CSE-22' },
        { key: 'cse-23', value: 'CSE-23' },
        { key: 'cse-24', value: 'CSE-24' },
        { key: 'cse-25', value: 'CSE-25' },
    ]
    console.log(values)
    const handleSubmit = (e) => {
        setSending(true)
        e.preventDefault();
        const mapping = Object.values(values).filter((item => !item.length))
        if (!mapping.length) {
            axios.put(route('edit_routine', routineInfo.id), values)
                .then((res) => {
                    const { data } = res
                    if (data.status === 'success') {
                        console.log('res', res);
                        toast.success("Update Successfuly!")
                        setSending(false)
                        useEffect(() => {
                            console.log("i")
                        }, [])
                    } else {
                        toast.error("Update Failed!")
                    }
                })
        } else {
            toast.error("Field Can't be empty!")
            setSending(false)
        }
    }
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Edit Personal Class Routine</span>
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
                            value={values?.course_title}
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
                            value={values?.course_code}
                            placeholder="Course Code"
                        />
                        <TextInput
                            id="room_no"
                            name="room_no"
                            label="Room No"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.room_no}
                            placeholder="Room No.."
                        />
                        <TextInput
                            id="building"
                            name="building"
                            label="Building"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            value={values?.building}
                            placeholder="Building.."
                        />
                    </div>
                    <div className="main-card__right">
                        <SingleSelect
                            id="batch"
                            name="batch"
                            label="Batch"
                            onChange={handleChange}
                            inputClass="textinput-input"
                            optionValues={batch}
                            inputLabelClass="font-inter-600 text-md"
                            labelClass="font-inter-600 text-md"
                        />
                        <SingleSelect
                            id="day"
                            name="day"
                            label="Day"
                            onChange={handleChange}
                            inputClass="textinput-input"
                            optionValues={days}
                            inputLabelClass="font-inter-600 text-md"
                            labelClass="font-inter-600 text-md"
                        />
                        <div className="mt-4">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Start Time"
                                    name="start_time"
                                    value={startTimeValue}
                                    onChange={handleStartTime}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                            </LocalizationProvider>
                        </div>
                        <div className="mt-4">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="End Time"
                                    name="end_time"
                                    value={endTimeValue}
                                    onChange={handleEndTime}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                            </LocalizationProvider>
                        </div>

                        <LoadingButton
                            type="submit"
                            loading={sending}
                            className="btn-signup mt-4"
                        >
                            Update
                        </LoadingButton>
                    </div>
                </div>
            </form>
        </div>
    )
};

EditRoutine.layout = (page) => <Layout>{page}</Layout>;
export default EditRoutine;
