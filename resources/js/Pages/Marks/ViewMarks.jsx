import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";

const ViewMarks = () => {
    const { routineInfo } = usePage().props;
    const dataArray = routineInfo



    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Routine Details</span>
            </div>
            <div className="main-card">
                hi
            </div>
        </div>
    )
}

ViewMarks.layout = (page) => <Layout>{page}</Layout>
export default ViewMarks
