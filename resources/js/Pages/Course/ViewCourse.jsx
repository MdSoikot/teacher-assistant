import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import axios from 'axios';

const ViewCourse = () => {
    const { courses } = usePage().props;
    const dataArray = courses
    const tablePropsInit = {
        columns: [
            { key: 'courseName', title: 'Course Name', dataType: DataType.String, style: { width: '15%' } },
            { key: 'courseCode', title: 'Course Code', dataType: DataType.String, style: { width: '20%' } },
            { key: 'courseCradit', title: 'Course Cradit', dataType: DataType.String, style: { width: '15%' } },
            { key: 'department', title: 'Department', dataType: DataType.String, style: { width: '20%' } },

        ],
        data: dataArray,
        rowKeyField: 'id',
        searchText: '',
    };




    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };


    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Course Details</span>
            </div>
            <div className="main-card">
                <input type='search' defaultValue={tableProps.searchText} onChange={(event) => {
                    dispatch(search(event.currentTarget.value));
                }} className='top-element' />
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

ViewCourse.layout = (page) => <Layout>{page}</Layout>
export default ViewCourse
