import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import TextInput from '../../Shared/TextInput';
import Logo from './../../Icons/Logo';
import SingleSelect from './../../Shared/SingleSelect';
import { usePage } from '@inertiajs/inertia-react';

import { FileUploader } from "react-drag-drop-files";
//import "./styles.css";
const fileTypes = ["JPG", "PNG", "GIF"];

const Login = () => {
  const { errors } = usePage().props;
  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  const [sending, setSending] = useState(false);
  console.log('err', errors)
  const [values, setValues] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(oldValues => ({
      ...oldValues,
      [key]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('login.attempt'), values, {
      onFinish: () => setSending(false),
    });
  }


  const userTypes = [
    { key: '', value: 'Select One' },
    { key: 'admin', value: 'Admin' },
    { key: 'student', value: 'Student' },
    { key: 'teacher', value: 'Teacher' },
  ]
  return (
    <div className="flex">
      <div className="signup-leftside">
        <div className="flex">
          <Logo width="53" height="53" />
          <span className="font-inter-400 logoname">Teacher Assistant</span>
        </div>
        <div className="signup-leftside__block font-inter-400">
          Education is our passport to the future, for tommorow belongs to the people who prepare for it today..
        </div>
      </div>
      <div className="signup-rightside">
        <div className="flex row">
          <span className="signup-rightside__label font-inter-700">Login Individual Account!</span>
          <span className="signup-rightside__sublabel font-inter-400">For the purpose of Access your account, your details are required.</span>
        </div>
        <div>
          <form
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="font-inter-400 signup-form">
              <SingleSelect
                id="role"
                name="role"
                label="User Type"
                onChange={handleChange}
                inputClass="textinput-input"
                optionValues={userTypes}
                inputLabelClass="font-inter-600 text-md"
                labelClass="font-inter-600 text-md"
              />
              <TextInput
                id="email"
                name="email"
                label="Email"
                type="email"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Email"
                value={values?.email}
                errors={errors?.email}
                inputLabelClass="font-inter-600 text-md"

              />
              <TextInput
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Password"
                value={values?.password}
                errors={errors?.password}
                inputLabelClass="font-inter-600 text-md"
              />
              <label
                className="flex items-center mt-6 select-none"
                htmlFor="remember"
              >
                <input
                  name="remember"
                  id="remember"
                  className="mr-1 login-rememberme-input"
                  type="checkbox"
                  checked={values.remember}
                  onChange={handleChange}
                />
                <span className="login-remeverme font-inter-normal">Remember Me</span>
              </label>
              <div>
                <button className="btn-signup" type="submit">Sign In</button>
              </div>
              <div>
                Don't have an account?{" "}
                <a href="/signup">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
