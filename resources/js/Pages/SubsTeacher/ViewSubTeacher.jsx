import { usePage } from '@inertiajs/inertia-react';
import { Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import "ka-table/style.scss";
import React, { useState } from 'react';
import Layout from '../Layout/Layout';

const ViewSubTeacher = () => {
    const { subsTeacher } = usePage().props;
    console.log("s", subsTeacher)
    const dataArray = subsTeacher
    const tablePropsInit = {
        columns: [
            { key: 'name', title: 'Name', dataType: DataType.String, style: { width: '15%' } },
            { key: 'teacher_id', title: 'ID', dataType: DataType.String, style: { width: '15%' } },
            { key: 'email', title: 'Email', dataType: DataType.String, style: { width: '15%' } },
            { key: 'department', title: 'Department', dataType: DataType.String, style: { width: '10%' } },
            { key: 'designation', title: 'Designation', dataType: DataType.String, style: { width: '15%' } },
            { key: 'phone', title: 'Phone', dataType: DataType.String, style: { width: '15%' } },
            { key: 'office_room_no', title: 'Room', dataType: DataType.String, style: { width: '15%' } },
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
                <span>Substitute Teacher List</span>
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
                        }
                    }}
                    dispatch={dispatch}
                />
            </div>
        </div>
    )
}
ViewSubTeacher.layout = (page) => <Layout>{page}</Layout>
export default ViewSubTeacher
