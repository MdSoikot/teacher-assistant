import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import Layout from '../Layout/Layout';
import axios from 'axios';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const RoutineReport = () => {
    const { routineInfo } = usePage().props
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState();
    const [values, setValues] = useState({
        batch: "",
        department: "",
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
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const exportToCSV = (apiData, fileName) => {
        let ws = XLSX.utils.json_to_sheet(apiData.routineInfo, fileName);
        ws.A1.v = "Day";
        ws.B1.v = "Course Title";
        ws.C1.v = "Start Time";
        ws.D1.v = "End Time";
        ws.E1.v = "Batch";
        ws.F1.v = "Room No";
        ws.G1.v = "Building";


        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
        setOpen(true);
        setResponse("Report Generated Successfully");
    };
    let fileName = 'routine_report'
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        axios.get(route("routine_report_generator")).then((r) => {
            if (r?.data.status == 500) {
                setOpen(true);
                setResponse(r.data.msg);
            }
            console.log(r.data)
            exportToCSV(r.data, fileName);
        });
    }
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Routine Generation</span>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <div className="main-card flex">
                    <div className="main-card__left">
                        <div className="pt-3"> */}
            <button className="btn-signup" type="submit" onClick={handleSubmit}>
                Export Report
            </button>
            {/* </div>
                    </div>
                </div> */}
            {/* </form> */}
        </div>
    )
};

RoutineReport.layout = (page) => <Layout>{page}</Layout>;
export default RoutineReport





// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import React, { useState } from 'react';
// // import folder from '../../../../public/outline'
// import Layout from '../Layout/Layout';

// const RoutineReport = () => {

//     // state = { numPages: null, pageNumber: 1 };
//     const [numPages, setNumPages] = useState(null)
//     const [pageNumber, setPageNumber] = useState(1)

//     const onDocumentLoadSuccess = ({ numPages }) => {
//         // this.setState({ numPages });
//         setNumPages({ numPages })
//         setPageNumber(1)
//     };
//     const goToPrevPage = () =>
//         // this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
//         setPageNumber(pageNumber - 1)
//     const goToNextPage = () =>
//         // this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
//         setPageNumber(pageNumber + 1)
//     const host = window.location.origin
//     return (
//         <div>
//             {/* <nav>
//                 <button onClick={goToPrevPage}>Prev</button>
//                 <button onClick={goToNextPage}>Next</button>
//             </nav> */}
//             <header>

//                 <Document
//                     // file={process.env.PUBLIC_URL + "/sample.pdf"}
//                     file="http://127.0.0.1:8000/sample.pdf"
//                     onLoadSuccess={onDocumentLoadSuccess}
//                 >
//                     <Page pageNumber={pageNumber} height="600" />
//                 </Document>

//                 <p>
//                     Page {pageNumber} of {numPages}
//                 </p>

//             </header>
//         </div >
//     );
// }

// RoutineReport.layout = (page) => <Layout>{page}</Layout>;
// export default RoutineReport