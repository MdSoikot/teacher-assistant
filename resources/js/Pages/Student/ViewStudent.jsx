import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType, FilteringMode, SortingMode } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";

const ViewStudent = () => {
    const { students } = usePage().props;
    const dataArray = students
    const tablePropsInit = {
        columns: [
            { key: 'student_id', title: 'Student ID', dataType: DataType.String, style: { width: '20%' } },
            { key: 'student_name', title: 'Student Name', dataType: DataType.String, style: { width: '20%' } },
            { key: 'section', title: 'Section', dataType: DataType.String, style: { width: '15%' } },
            { key: 'department', title: 'Department', dataType: DataType.String, style: { width: '20%' } },
            { key: 'batch', title: 'Batch', dataType: DataType.String, style: { width: '20%' } },
            { key: ':action', title: 'Action', width: '20%', style: { textAlign: 'center' } },

        ],
        data: dataArray,
        rowKeyField: "student_id",
        paging: {
            enabled: true,
        },
        selectedRows: [3, 5],
        sortingMode: SortingMode.Single,
        filteringMode: FilteringMode.FilterRow,
        searchText: "",
    };

    const ActionOption = ({ dispatch, rowKeyValue }) => {
        return (
            <div className='flex justify-center gap-2'>
                <span
                    className='cursor-pointer edit-button'
                    onClick={() => handleAction(rowKeyValue, "Edit")}
                >
                    Edit
                </span>
                <span
                    className='cursor-pointer delete-button'
                    onClick={() => handleAction(rowKeyValue, "delete")}
                >
                    Delete
                </span>

            </div>
        );
    };


    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };


    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Students Details</span>
            </div>
            <div className="main-card">
                <Table
                    {...tableProps}
                    childComponents={{
                        noDataRow: {
                            content: () => 'No Data Found'
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
                    dispatch={dispatch}
                />
            </div>
        </div>
    )
}

ViewStudent.layout = (page) => <Layout>{page}</Layout>;
export default ViewStudent;
