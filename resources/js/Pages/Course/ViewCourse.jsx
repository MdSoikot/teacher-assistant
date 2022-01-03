import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { kaReducer, Table } from "ka-table";
import { DataType } from "ka-table/enums";
import Layout from "../Layout/Layout";
import axios from "axios";
import { kaPropsUtils } from "ka-table/utils";

import {
    deselectAllFilteredRows,
    deselectRow,
    selectAllFilteredRows,
    selectRow,
    selectRowsRange,
} from "ka-table/actionCreators";
import { FilteringMode, SortingMode } from "ka-table/enums";
import { ICellTextProps, IHeadCellProps } from "ka-table/props";

const SelectionCell = ({
    rowKeyValue,
    dispatch,
    isSelectedRow,
    selectedRows,
}) => {
    return (
        <input
            type="checkbox"
            checked={isSelectedRow}
            onChange={(event) => {
                if (event.nativeEvent.shiftKey) {
                    dispatch(
                        selectRowsRange(rowKeyValue, [...selectedRows].pop())
                    );
                } else if (event.currentTarget.checked) {
                    dispatch(selectRow(rowKeyValue));
                } else {
                    dispatch(deselectRow(rowKeyValue));
                }
            }}
        />
    );
};

const SelectionHeader = ({ dispatch, areAllRowsSelected }) => {
    return (
        <input
            type="checkbox"
            checked={areAllRowsSelected}
            onChange={(event) => {
                if (event.currentTarget.checked) {
                    dispatch(selectAllFilteredRows()); // also available: selectAllVisibleRows(), selectAllRows()
                } else {
                    dispatch(deselectAllFilteredRows()); // also available: deselectAllVisibleRows(), deselectAllRows()
                }
            }}
        />
    );
};

const ViewCourse = () => {
    const dataArray = [
        {
            courseName: "english",
            courseCode: "106",
            courseCradit: "3",
            department: "CSE",
        },
        {
            courseName: "bangla",
            courseCode: "101",
            courseCradit: "3",
            department: "CSE",
        },
        {
            courseName: "math",
            courseCode: "101",
            courseCradit: "3",
            department: "CSE",
        },
        {
            courseName: "biology",
            courseCode: "101",
            courseCradit: "3",
            department: "CSE",
        },
    ];
    const tablePropsInit = {
        columns: [
            {
                key: "selection-cell",
            },
            {
                key: "courseName",
                title: "Course Name",
                dataType: DataType.String,
                style: { width: "15%" },
            },
            {
                key: "courseCode",
                title: "Course Code",
                dataType: DataType.String,
                style: { width: "20%" },
            },
            {
                key: "courseCradit",
                title: "Course Cradit",
                dataType: DataType.String,
                style: { width: "15%" },
            },
            {
                key: "department",
                title: "Department",
                dataType: DataType.String,
                style: { width: "20%" },
            },
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
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Course Details</span>
            </div>
            <div className="main-card">
                <input
                    type="search"
                    defaultValue={tableProps.searchText}
                    onChange={(event) => {
                        dispatch(search(event.currentTarget.value));
                    }}
                    className="top-element"
                />
                <Table
                    {...tableProps}
                    childComponents={{
                        cellText: {
                            content: (props) => {
                                if (props.column.key === "selection-cell") {
                                    return <SelectionCell {...props} />;
                                }
                            },
                        },
                        noDataRow: {
                            content: () => "No Data Found",
                        },

                        filterRowCell: {
                            content: (props) => {
                                if (props.column.key === "selection-cell") {
                                    return <></>;
                                }
                            },
                        },
                        headCell: {
                            content: (props) => {
                                if (props.column.key === "selection-cell") {
                                    return (
                                        <SelectionHeader
                                            {...props}
                                            areAllRowsSelected={kaPropsUtils.areAllFilteredRowsSelected(
                                                tableProps
                                            )}
                                            // areAllRowsSelected={kaPropsUtils.areAllVisibleRowsSelected(tableProps)}
                                        />
                                    );
                                }
                            },
                        },
                    }}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
};

ViewCourse.layout = (page) => <Layout>{page}</Layout>;
export default ViewCourse;
