import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import TextInput from '../../Shared/TextInput';
import Logo from './../../Icons/Logo';
import SingleSelect from './../../Shared/SingleSelect';

const Signup = () => {

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
    if (key === 'usertype') {
      if (value === 'student') {
        setTeacher(false)
        setStudent(true)
      } else if (value === 'teacher') {
        setTeacher(true)
        setStudent(false)
      } else {
        setTeacher(false)
        setStudent(false)
      }
    }
    setValues(oldValues => ({
      ...oldValues,
      [key]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('signup.submit'), values, {
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
          <span className="signup-rightside__label font-inter-700">Register Individual Account!</span>
          <span className="signup-rightside__sublabel font-inter-400">For the purpose of gamers regulation, your details are required.</span>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
          >
            <div className="font-inter-400 signup-form">

              <TextInput
                id="name"
                label="Name"
                name="name"
                type="text"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Name"
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
              <SingleSelect
                id="usertype"
                name="usertype"
                label="User Type"
                onChange={handleChange}
                inputClass="textinput-input"
                optionValues={userTypes}
              />
              {student && <TextInput
                id="studentId"
                name="studentId"
                label="Student Id"
                type="text"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Id"
              />}
              {teacher && <TextInput
                id="teacherId"
                name="teacherId"
                label="Teacher Id"
                type="text"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Id"
              />
              }

              <div>
                <button className="btn-signup" type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
