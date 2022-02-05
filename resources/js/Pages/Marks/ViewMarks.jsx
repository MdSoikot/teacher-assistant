// import "jspdf-autotable";

// import jsPDF from "jspdf";
import React, { useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { CSVLink } from 'react-csv';

import { kaReducer, Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import { kaPropsUtils } from 'ka-table/utils';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";
import axios from 'axios';
import toast from 'react-hot-toast';

const ViewMarks = () => {
    const { marks } = usePage().props;
    const dataArray = marks
    console.log('dataArray', dataArray);


    const tablePropsInit = {
        columns: [
            { key: "batch", title: "Batch", dataType: DataType.String },
            { key: "course_title", title: "Course Title", dataType: DataType.String },
            { key: "course_code", title: "Course Code", dataType: DataType.String },
            { key: "department", title: "Department", dataType: DataType.String },
            { key: "ct_mark", title: "CT", dataType: DataType.Number },
            { key: "att_mark", title: "Attendent", dataType: DataType.Number },
            { key: "ass_mark", title: "Assignment", dataType: DataType.Number },
            { key: "written_mark", title: "Written", dataType: DataType.Number },
            { key: ':action', title: 'Action', width: '20%', style: { textAlign: 'center' } },
        ],
        virtualScrolling: {},
        data: dataArray,
        rowKeyField: "id"
    };

    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = action => {
        changeTableProps(prevState => kaReducer(prevState, action));
    };
    const exportClick = orientation => {
        const doc = new jsPDF(orientation);
        const head = [tableProps.columns.map(c => c.title)];
        const body = tableProps.data.map(d =>
            tableProps.columns.map(c => getValueByColumn(d, c))
        );
        doc.autoTable({
            margin: 1,
            headStyles: { fillColor: "#F1F5F7", textColor: "#747D86" },
            alternateRowStyles: { fillColor: "#F9FBFC" },
            head,
            body
        });

        doc.save("table.pdf");
    };
    const handleAction = (id, status) => {
        console.log('id', id);
        if (status === 'delete') {
            axios.delete(route('delete_marks', id))
                .then((res) => {
                    const { data } = res
                    if (data.status === 'success') {
                        toast.success('Delete Successfully')
                        let tempData = { ...tableProps }
                        const filteredData = tempData.data.filter(item => item.id !== id)
                        tempData.data = filteredData
                        changeTableProps(tempData)
                    } else {
                        toast.error('Failed to delete')
                    }
                })
        }

    }

    const ActionOption = ({ dispatch, rowKeyValue }) => {
        return (
            <div className='flex justify-center gap-2'>
                <InertiaLink
                    className="nounderline edit-button"
                    href={route('edit_marks_form', rowKeyValue)}
                >
                    Edit
                </InertiaLink>
                <span
                    className='cursor-pointer delete-button'
                    onClick={() => handleAction(rowKeyValue, "delete")}
                >
                    Delete
                </span>

            </div>
        );
    };
    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Routine Details</span>
            </div>
            <div className="main-card">
                <div style={{
                    marginBottom: 20,
                    marginLeft: 20
                }}>
                    <CSVLink
                        data={kaPropsUtils.getData(tableProps)}
                        headers={tableProps.columns.map(c => ({ label: c.title, key: c.key }))}
                        filename='ka-table.data.csv'>
                        Download .csv
                    </CSVLink>
                </div>
                <Table
                    {...tableProps}
                    dispatch={dispatch}
                    childComponents={{
                        table: {
                            elementAttributes: () => ({
                                id: 'table-to-xls'
                            })
                        },
                        cellText: {
                            content: props => {
                                switch (props.column.key) {
                                    case ':action':
                                        return <ActionOption {...props} />;

                                    // case 'selection-cell': return <SelectionCell {...props} />;
                                }

                                return ''
                            }
                        },

                    }}
                />
            </div>
        </div>
    )
}

ViewMarks.layout = (page) => <Layout>{page}</Layout>
export default ViewMarks
