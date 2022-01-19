import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { kaReducer, Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import Layout from '../Layout/Layout'
import "ka-table/style.scss";

const ViewStudent = () => {
    


    return (
        <div className="main-div">
            <div className='font-inter-600 text-3xl mb-4 flex gap-4'>
                <span>Course Details</span>
            </div>
            
        </div>
    )
}

ViewStudent.layout = (page) => <Layout>{page}</Layout>;
export default ViewStudent;
