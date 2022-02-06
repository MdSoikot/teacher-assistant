import React, { useState } from "react";
import Layout from "../Layout/Layout";
import TextInput from "../../Shared/TextInput";
import SingleSelect from "../../Shared/SingleSelect";
import { usePage } from "@inertiajs/inertia-react";
import Button from "@mui/material/Button";
import { toFormData } from "../../utils";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNotice = () => {
    const [values, setValues] = useState({
        notice_title: '',
        notice_body: '',

    })
    const handleChange = (e) => {
        const key = typeof (e) === 'string' && !e?.target?.name ? "notice_body" : e.target.name;
        const value = typeof (e) === 'string' && !e?.target?.value ? e : e.target.value;

        setValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    };
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean'],
        ],
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const mapping = Object.values(values).filter((item => !item.length))
        if (!mapping.length) {
            Inertia.post(route('add_notice'), values, {
                onFinish: () => {
                    setValues({
                        notice_title: '',
                        notice_body: '',
                    }),
                        toast.success("Save Successfuly!")
                }
            });
        } else {
            toast.error("Field Can't be empty!")
        }
    }
    console.log('values', values);
    return (
        <div className="main-div">
            <div className="font-inter-600 text-3xl mb-4 flex gap-4">
                <span>Add Notice</span>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="main-card flex">
                    <div className="main-card__left">
                        <TextInput
                            id="notice_title"
                            name="notice_title"
                            label="Notice Title"
                            type="text"
                            onChange={handleChange}
                            inputClass="profile-textinput-input"
                            inputLabelClass="font-inter-600 text-md"
                            // value={values?.name}
                            placeholder="Notice title"
                        />
                        <p className="font-inter-600 text-md">Notice Body</p>
                        <ReactQuill
                            name="notice_body"
                            modules={modules}
                            theme="snow"
                            className="pb-10 pr-6 my-3 w-full"
                            value={values.notice_body || ''}
                            onChange={handleChange}
                        />
                        <div className="pt-3">
                            <button className="btn-signup" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

AddNotice.layout = (page) => <Layout>{page}</Layout>;
export default AddNotice;
