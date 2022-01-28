import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import Layout from '../Layout/Layout';
import axios from 'axios';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const MarksReport = () => {
    const { courseInfo, courseTitles } = usePage().props

    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState();
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
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const exportToCSV = (apiData, fileName) => {
        let ws = XLSX.utils.json_to_sheet(apiData.marksInfo, fileName);
        ws.A1.v = "Student ID";
        ws.B1.v = "Assignment Mark";
        ws.C1.v = "Attendence Mark";
        ws.D1.v = "CT Mark";
        ws.E1.v = "Written Mak";
        ws.F1.v = "Total";
        const secondData = apiData.marksInfo.length + 5;
        const basicInfo = [];
        basicInfo.push(["Basic Info", ""]);
        Object.keys(apiData.basicInfo).forEach((cf) => {
            basicInfo.push([cf, apiData.basicInfo[cf]]);
        });


        XLSX.utils.sheet_add_aoa(ws, basicInfo, { origin: `C${secondData}` });
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
        setOpen(true);
        setResponse("Report Generated Successfully");
    };
    let fileName = 'marks_report'
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        axios.post(route("marks_report_generator"), values).then((r) => {
            console.log('fir', r);
            if (r?.data.status == 500) {
                setOpen(true);
                setResponse(r.data.msg);
            }
            exportToCSV(r.data, fileName);
        });
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
