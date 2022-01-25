import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import Layout from '../Layout/Layout';

const MarksReport = () => {
    const { courseInfo, courseTitles } = usePage().props
    const [values, setValues] = useState({
        batch: "",
        department: "",
        course_title: "",
        term: "",
        session: "",
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
    const session = [
        { value: '', label: 'Select One' },
        { value: 'spring-2022', label: 'Spring-2022' },
        { value: 'fall-2022', label: 'Fall-2022' },
        { value: 'summer-2022', label: 'Summer-2022' },
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Marks Report</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="main-card flex">
                    <div className="main-card__left">
                        <div>
                            <h3 className="font-inter-600 text-md mb-2">Department</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                onChange={val => handleSelect(val, 'department')}
                                options={department}
                                singleSelect
                            />
                        </div>
                        <div className="mb-2">
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Batch</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                onChange={val => handleSelect(val, 'batch')}
                                options={batch}
                                singleSelect
                            />
                        </div>
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

                    </div>
                    <div className="main-card__right font-inter-600 text-md">
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Exam</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                onChange={val => handleSelect(val, 'term')}
                                options={exam}
                                singleSelect
                            />
                        </div>
                        <div>
                            <h3 className="font-inter-600 text-md mb-2 mt-2">Session</h3>
                            <MultiSelect
                                className="w-full"
                                // defaultValue={flowMap[flowKey]?.trigger?.event}
                                onChange={val => handleSelect(val, 'session')}
                                options={session}
                                singleSelect
                            />
                        </div>

                        <div className="pt-3">
                            <button className="btn-signup" type="submit">
                                Export Report
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

MarksReport.layout = (page) => <Layout>{page}</Layout>;
export default MarksReport;
