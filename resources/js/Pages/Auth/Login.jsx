import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import TextInput from '../../Shared/TextInput';
import Logo from './../../Icons/Logo';
import SingleSelect from './../../Shared/SingleSelect';

const Login = () => {

  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues(oldValues => ({
      ...oldValues,
      [key]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('login.submit'), values, {
      onFinish: () => setSending(false),
    });
  }

  console.log(values)
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
              />
              <TextInput
                id="email"
                name="email"
                label="Email"
                type="email"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Email"

              />
              <TextInput
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Password"
              />
              <div>
                <button className="btn-signup" type="submit">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
