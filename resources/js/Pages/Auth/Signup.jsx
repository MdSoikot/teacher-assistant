import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import Dropzone from '../../Shared/Dropzone';
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
    name: '',
    studentId: '',
    teacherId: '',
    photo: ''
  });

  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  const handleFileChange = (file, name) => {
    setValues(oldValues => ({
      ...oldValues,
      [name]: file,
    }));
  }

  console.log("file", file)

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (key === 'role') {
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
          <span className="signup-rightside__sublabel font-inter-400">For the purpose of tracking, your details are required.</span>
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
                value={values.name}
              />
              <TextInput
                id="email"
                name="email"
                label="Email"
                type="email"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Email"
                value={values.email}

              />
              <TextInput
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Password"
                value={values.password}
              />
              <SingleSelect
                id="role"
                name="role"
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
                value={values.studentId}
              />}
              {teacher && <TextInput
                id="teacherId"
                name="teacherId"
                label="Teacher Id"
                type="text"
                onChange={handleChange}
                inputClass="textinput-input"
                placeholder="Your Id"
                value={values.teacherId}
              />
              }
              {/* Disable click and keydown behavior on the dropzone */}
              <Dropzone
                label="Photo"
                name="photo"
                className="w-full pb-8 pr-6 lg:w-1/2"
                //errors={errors?.image}
                value={values?.image}
                accept="image/*"
                onChange={handleFileChange}
                multiple={false}
              />

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
