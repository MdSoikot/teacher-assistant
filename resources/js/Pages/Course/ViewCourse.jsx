import React, { useEffect, useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType, FilteringMode, SortingMode } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import toast from 'react-hot-toast';

const ViewCourse = () => {
    const { courses } = usePage().props;
    const dataArray = courses
    const tablePropsInit = {
        columns: [
            { key: 'course_title', title: 'Course Name', dataType: DataType.String, style: { width: '15%' } },
            { key: 'course_code', title: 'Course Code', dataType: DataType.String, style: { width: '20%' } },
            { key: 'course_credit', title: 'Course Credit', dataType: DataType.String, style: { width: '15%' } },
            { key: 'department', title: 'Department', dataType: DataType.String, style: { width: '20%' } },
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

    const handleAction = (id, status) => {
        console.log('id', id);
        // Inertia.delete(route('delete_course', id))
        if (status === 'delete') {
            axios.delete(route('delete_course', id))
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
        } else {
            axios.get(route('edit_course_form', id))
                .then((res) => {

                })
        }

    }

    const ActionOption = ({ dispatch, rowKeyValue }) => {
        return (
            <div className='flex justify-center gap-2'>
                {/* <span
                    className='cursor-pointer edit-button'
                    onClick={() => handleAction(rowKeyValue, "edit")}
                >
                    Edit
                </span> */}
                <InertiaLink
                    className="nounderline edit-button"
                    href={route('edit_course_form', rowKeyValue)}
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


    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };
    useEffect(() => {
        console.log("i")
    }, [])


    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Course Details</span>
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

ViewCourse.layout = (page) => <Layout>{page}</Layout>;
export default ViewCourse;
