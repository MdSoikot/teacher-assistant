import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import Layout from '../Layout/Layout';
import axios from 'axios';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import PdfShow from './PdfShow';

const StaticReport = () => {
    const { courseInfo, courseTitles } = usePage().props

    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState();
    const [values, setValues] = useState({
        course_title: "",
    });
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
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
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const exportToCSV = (apiData, fileName) => {
        let ws = XLSX.utils.json_to_sheet(apiData.studentsInfo, fileName);
        ws.A1.v = "Student Id";
        ws.B1.v = "Student Name";
        ws.C1.v = "Student Email";
        ws.D1.v = "Student Phone";
        ws.E1.v = "Section";
        const secondData = apiData.studentsInfo.length + 5;
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
    let fileName = 'students_report'
    const handleSubmit = (e) => {
        e.preventDefault();
        // return (
        //     <PdfShow name={values.course_title} />
        // )
        axios.get(route("outline_report_generator"));
    }
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Outline</span>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            <div className="main-card flex">
                <div className="main-card__left">
                    <div>
                        <h3 className="font-inter-600 text-md mb-2">Course Title</h3>
                        <MultiSelect
                            className="w-full"
                            // defaultValue={flowMap[flowKey]?.trigger?.event}
                            onChange={val => handleSelect(val, 'course_title')}
                            options={courseTitles}
                            singleSelect
                        />
                    </div>
                    {values?.course_title && <div className="pt-3">
                        <a className='btn-signup btn-a' href={`http://127.0.0.1:8000/outline/outline_${values.course_title}.pdf`}>
                            Export Report
                        </a>
                    </div>}
                </div>
            </div>
            {/* </form> */}
        </div >
    )
};

StaticReport.layout = (page) => <Layout>{page}</Layout>;
export default StaticReport