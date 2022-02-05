import React, { useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType, FilteringMode, SortingMode } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";
import axios from 'axios';
import toast from 'react-hot-toast';

const ViewRoutine = () => {
    const { routineInfo } = usePage().props;
    const dataArray = routineInfo
    const tablePropsInit = {
        columns: [
            { key: 'day', title: 'Day', dataType: DataType.String, style: { width: '15%' } },
            { key: 'start_time', title: 'Start Time', dataType: DataType.String, style: { width: '15%' } },
            { key: 'end_time', title: 'End Time', dataType: DataType.String, style: { width: '15%' } },
            { key: 'room_no', title: 'Room No', dataType: DataType.String, style: { width: '15%' } },
            { key: 'building', title: 'Building', dataType: DataType.String, style: { width: '15%' } },
            { key: 'course_title', title: 'Course Name', dataType: DataType.String, style: { width: '15%' } },
            { key: 'batch', title: 'Batch', dataType: DataType.String, style: { width: '15%' } },
            { key: ':action', title: 'Action', width: '20%', style: { textAlign: 'center' } },

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
    const ActionOption = ({ dispatch, rowKeyValue }) => {
        return (
            <div className='flex justify-center gap-2'>
                <InertiaLink
                    className="nounderline edit-button"
                    href={route('edit_routine_form', rowKeyValue)}
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
    const handleAction = (id, status) => {
        console.log('id', id);
        if (status === 'delete') {
            axios.delete(route('delete_routine', id))
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


    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };


    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Routine Details</span>
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

ViewRoutine.layout = (page) => <Layout>{page}</Layout>
export default ViewRoutine
