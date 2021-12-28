import React, { useState } from "react";
import Layout from "../Layout/Layout";
import TextInput from "../../Shared/TextInput";
import SingleSelect from "../../Shared/SingleSelect";
import { usePage } from "@inertiajs/inertia-react";
import Button from "@mui/material/Button";
import { toFormData } from "../../utils";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";

const AddCourse = () => {
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Add Course Here...</span>
            </div>
            <form
            // onSubmit={handleSubmit}
            >
                <div className="main-card flex">
                    <div className="main-card__left">
                        <TextInput
                            id="name"
                            name="name"
                            label="Course Name"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Course Name"
                        />
                        <TextInput
                            id="code"
                            name="code"
                            label="Course Code"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.email}
                            placeholder="Course Code"
                        />

                        <TextInput
                            id="cradit"
                            name="cradit"
                            label="Course Cradit"
                            type="cradit"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Course Cradit"
                            // value={values?.phone}
                        />
                        <TextInput
                            id="studentId"
                            name="studentId"
                            label="Department"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Department"
                            // value={values?.studentId}
                        />
                        {/* {role === 'teacher' && <TextInput
                            id="teacherId"
                            name="teacherId"
                            label="Teacher Id"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Your Id"
                            value={values?.teacherId}
                        />} */}
                    </div>
                    <div className="main-card__right">
                        <TextInput
                            id="batch"
                            name="batch"
                            label="Batch"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Batch No"
                            // value={values?.batch}
                        />
                        <TextInput
                            id="department"
                            name="department"
                            label="Department"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            placeholder="Department Name"
                            // value={values?.department}
                        />

                        <div className="pt-3">
                            <Button
                                className="btn-signup"
                                variant="contained"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

AddCourse.layout = (page) => <Layout>{page}</Layout>;
export default AddCourse;
