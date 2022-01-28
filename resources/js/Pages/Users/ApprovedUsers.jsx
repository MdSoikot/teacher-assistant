import { Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import "ka-table/style.scss";
import { usePage } from '@inertiajs/inertia-react';

const ApprovedUsers = () => {
    const { approvedUsers } = usePage().props;
    const dataArray = approvedUsers
    const tablePropsInit = {
        columns: [
            { key: 'name', title: 'Name', dataType: DataType.String, style: { width: '20%' } },
            { key: 'email', title: 'Email', dataType: DataType.String, style: { width: '20%' } },
            { key: 'role', title: 'Role', dataType: DataType.String, style: { width: '20%' } },
            { key: 'department', title: 'Department', dataType: DataType.String, style: { width: '20%' } },
            { key: 'phone', title: 'Phone', dataType: DataType.String, style: { width: '20%' } },
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
                <span>Approved User</span>
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

ApprovedUsers.layout = (page) => <Layout>{page}</Layout>
export default ApprovedUsers
