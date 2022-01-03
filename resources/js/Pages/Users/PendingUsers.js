import { usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import "ka-table/style.scss";
import { deleteRow } from 'ka-table/actionCreators';
import ThreeLine from '../../Icons/ThreeLine';
import Approved from '../../Icons/Approved';
import Decline from '../../Icons/Decline';
import axios from 'axios';
import { toFormData } from '../../utils';
import { Inertia } from '@inertiajs/inertia';
import toast from 'react-hot-toast';




const PendingUsers = () => {

    const { pendingUsers } = usePage().props;
    useEffect(() => {
        console.log("i")
    }, [])
    const dataArray = pendingUsers
    const tablePropsInit = {
        columns: [
            { key: 'name', title: 'Name', dataType: DataType.String, style: { width: '15%' } },
            { key: 'email', title: 'Email', dataType: DataType.String, style: { width: '20%' } },
            { key: 'role', title: 'Role', dataType: DataType.String, style: { width: '15%' } },
            { key: 'department', title: 'Department', dataType: DataType.String, style: { width: '20%' } },
            { key: 'phone', title: 'Phone', dataType: DataType.String, style: { width: '20%' } },
            { key: ':action', title: 'Action', width: '10%', style: { textAlign: 'center' } }
        ],
        data: dataArray,
        rowKeyField: 'id',
        searchText: '',
    };


    console.log("pendingUsers", pendingUsers)

    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };

    const handleAction = (rowKeyValue, status) => {
        const data = {
        }
        if (status === 'approved') {
            const formData = toFormData(data, 'PUT');
            Inertia.post(route('accept_user', rowKeyValue), formData, {
                onFinish: () => {
                    toast.success("Approved Successfully")
                }
            });
        } else {
            const formData = toFormData(data, 'PUT');
            Inertia.post(route('decline_user', rowKeyValue), formData), {
                onFinish: () => {
                    toast.success("Decline Successfully")
                }
            }
        }
    }

    const DeleteRow = ({ dispatch, rowKeyValue }) => {
        return (
            <div className='flex gap-1'>
                <span
                    className='cursor-pointer'
                    onClick={() => handleAction(rowKeyValue, "approved")}
                >
                    <Approved />
                </span>
                <span
                    className='cursor-pointer'
                    onClick={() => handleAction(rowKeyValue, "decline")}
                >
                    <Decline />
                </span>
            </div>
            // <img
            //     src="https://komarovalexander.github.io/ka-table/static/icons/delete.svg"
            //     className="delete-row-column-button"
            //     onClick={() => dispatch(deleteRow(rowKeyValue))}
            //     alt=""
            // />
        );
    };

    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Pending User</span>
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
                        cellText: {
                            content: props => {
                                switch (props.column.key) {
                                    case ':action':
                                        return <DeleteRow {...props} />;
                                }
                            }
                        }
                    }}
                    dispatch={dispatch}
                />
            </div>
        </div>
    )
}
PendingUsers.layout = (page) => <Layout>{page}</Layout>
export default PendingUsers
