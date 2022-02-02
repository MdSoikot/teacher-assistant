import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType, FilteringMode, SortingMode } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";

const ViewAssignment = () => {
    const { assignments } = usePage().props;
    const dataArray = assignments
    const tablePropsInit = {
        columns: [
            { key: 'student_id', title: 'Student ID', dataType: DataType.String, style: { width: '15%' } },
            { key: 'course_title', title: 'Course Name', dataType: DataType.String, style: { width: '15%' } },
            { key: 'course_code', title: 'Course Code', dataType: DataType.String, style: { width: '20%' } },
            { key: 'assignment_desc', title: 'Assignment Topic', dataType: DataType.String, style: { width: '15%' } },
            { key: 'submit_date', title: 'Submit Date', dataType: DataType.String, style: { width: '20%' } },

        ],
        data: dataArray,
        rowKeyField: "id",
        paging: {
            enabled: true,
        },
        selectedRows: [3, 5],
        sortingMode: SortingMode.Single,
        filteringMode: FilteringMode.FilterRow,
        searchText: "",
    };




    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };


    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Assignments Details</span>
            </div>
            <div className="main-card">
                <Table
                    {...tableProps}
                    childComponents={{
                        noDataRow: {
                            content: () => 'No Data Found'
                        },

                    }}
                    dispatch={dispatch}
                />
            </div>
        </div>
    )
}

ViewAssignment.layout = (page) => <Layout>{page}</Layout>;
export default ViewAssignment;
