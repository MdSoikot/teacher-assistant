
import React, { useState } from "react";
import Layout from "../Layout/Layout";
import LoadingButton from '../../Shared/LoadingButton'
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import TextInput from "../../Shared/TextInput";
import { usePage } from "@inertiajs/inertia-react";
const AddMarks = () => {
    const [sending, setSending] = useState(false)
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
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
    const exam = [
        { value: '', label: 'Select One' },
        { value: 'mid', label: 'Mid' },
        { value: 'final', label: 'Final' },
    ]
    const { courseInfo } = usePage().props
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Add Student Mark</span>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="main-card flex">
                    <div className="main-card__left">
                        <div>
                            <h3 className="font-inter-600 text-md mb-2">Department</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                // onChange={val => handleMapping('trigger', val, flowKey)}
                                options={department}
                                singleSelect
                            />
                        </div>
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Batch</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                // onChange={val => handleMapping('trigger', val, flowKey)}
                                options={batch}
                                singleSelect
                            />
                        </div>
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Course Name</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                // onChange={val => handleMapping('trigger', val, flowKey)}
                                // options={[flowData.elementorpro]}
                                singleSelect
                            />
                        </div>
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Course Code</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                // onChange={val => handleMapping('trigger', val, flowKey)}
                                // options={[flowData.elementorpro]}
                                singleSelect
                            />
                        </div>
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Exam</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                // onChange={val => handleMapping('trigger', val, flowKey)}
                                options={exam}
                                singleSelect
                            />
                        </div>

                    </div>
                    <div className="main-card__right">
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
                        <TextInput
                            id="ct_mark"
                            name="ct_mark"
                            label="CT Mark"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="CT Mark..."
                        />
                        <TextInput
                            id="ass_mark"
                            name="ass_mark"
                            label="Assignment Mark"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Assignment Mark..."
                        />
                        <TextInput
                            id="written_mark"
                            name="written_mark"
                            label="Written Mark"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Written Mark..."
                        />
                        <TextInput
                            id="att_mark"
                            name="att_mark"
                            label="Attendence Mark"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Attendence Mark..."
                        />
                        <LoadingButton
                            type="submit"
                            loading={sending}
                            className="btn-signup mt-4"
                        >
                            Submit
                        </LoadingButton>
                    </div>
                </div>
            </form>
        </div>
    )
};

AddMarks.layout = (page) => <Layout>{page}</Layout>;
export default AddMarks;
