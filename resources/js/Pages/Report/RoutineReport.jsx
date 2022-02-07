// import { usePage } from '@inertiajs/inertia-react';
// import React, { useState } from 'react';
// import 'react-multiple-select-dropdown-lite/dist/index.css';
// import MultiSelect from 'react-multiple-select-dropdown-lite';
// import Layout from '../Layout/Layout';
// import axios from 'axios';
// import * as FileSaver from "file-saver";
// import * as XLSX from "xlsx";

// const RoutineReport = () => {

//     const [open, setOpen] = useState(false);
//     const [response, setResponse] = useState();
//     const [values, setValues] = useState({
//         batch: "",
//         department: "",
//     });
//     const handleChange = (e) => {
//         const key = e.target.name;
//         const value = e.target.value;

//         console.log(`val`, value)
//         setValues((oldValues) => ({
//             ...oldValues,
//             [key]: value,
//         }));
//     };
//     const handleSelect = (val, key) => {
//         setValues((oldValues) => ({
//             ...oldValues,
//             [key]: val,
//         }));
//     }
//     const fileType =
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//     const fileExtension = ".xlsx";
//     const exportToCSV = (apiData, fileName) => {
//         let ws = XLSX.utils.json_to_sheet(apiData.studentsInfo, fileName);
//         ws.A1.v = "Student Id";
//         ws.B1.v = "Student Name";
//         ws.C1.v = "Student Email";
//         ws.D1.v = "Student Phone";
//         ws.E1.v = "Section";
//         const secondData = apiData.studentsInfo.length + 5;
//         const basicInfo = [];
//         basicInfo.push(["Basic Info", ""]);
//         Object.keys(apiData.basicInfo).forEach((cf) => {
//             basicInfo.push([cf, apiData.basicInfo[cf]]);
//         });


//         XLSX.utils.sheet_add_aoa(ws, basicInfo, { origin: `C${secondData}` });
//         const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//         const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//         const data = new Blob([excelBuffer], { type: fileType });
//         FileSaver.saveAs(data, fileName + fileExtension);
//         setOpen(true);
//         setResponse("Report Generated Successfully");
//     };
//     let fileName = 'students_report'
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(values)
//         axios.get(route("routine_report_generator")).then((r) => {
//             if (r?.data.status == 500) {
//                 setOpen(true);
//                 setResponse(r.data.msg);
//             }
//             console.log(r.data)
//             //exportToCSV(r.data, fileName);
//         });
//     }
//     return (
//         <div className="main-div">
//             <div className="font-inter-600 text-3xl mb-4 flex gap-4">
//                 <span>Routine Generation</span>
//             </div>
//             {/* <form onSubmit={handleSubmit}>
//                 <div className="main-card flex">
//                     <div className="main-card__left">
//                         <div className="pt-3"> */}
//             <button className="btn-signup" type="submit" onClick={handleSubmit}>
//                 Export Report
//             </button>
//             {/* </div>
//                     </div>
//                 </div> */}
//             {/* </form> */}
//         </div>
//     )
// };

// RoutineReport.layout = (page) => <Layout>{page}</Layout>;
// export default RoutineReport





import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const RoutineReport = () => {

    // state = { numPages: null, pageNumber: 1 };
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        // this.setState({ numPages });
        setNumPages({ numPages })
        setPageNumber(1)
    };
    console.log('process.env.PUBLIC_URL + "/sample.pdf"', process.env.PUBLIC_URL + "/sample.pdf");
    const goToPrevPage = () =>
        // this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
        setPageNumber(pageNumber - 1)
    const goToNextPage = () =>
        // this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
        setPageNumber(pageNumber + 1)

    return (
        <div>
            {/* <nav>
                <button onClick={goToPrevPage}>Prev</button>
                <button onClick={goToNextPage}>Next</button>
            </nav> */}

            <Document
                // file={process.env.PUBLIC_URL + "/sample.pdf"}
                file="/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} height="600" />
            </Document>

            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

RoutineReport.layout = (page) => <Layout>{page}</Layout>;
export default RoutineReport