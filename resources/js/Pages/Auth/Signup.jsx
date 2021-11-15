import React, { useState } from 'react'
import TextInput from '../../Shared/TextInput';
import Logo from './../../Icons/Logo';
import SingleSelect from './../../Shared/SingleSelect';

const Signup = () => {

  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);

  const handleTextInput = () => {

  }
  const handleSingleSelect = () => {

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
          <span className="signup-rightside__label font-inter-700">Register Individual Account!</span>
          <span className="signup-rightside__sublabel font-inter-400">For the purpose of gamers regulation, your details are required.</span>
        </div>
        <div>
          <form>
            <div className="font-inter-400 signup-form">
              {/* <div>
                <span className="block">
                  Name
                </span>
                <input className="signup-form__input-field" />
              </div> */}
              <TextInput
                id="name"
                label="Name"
                type="text"
                onChange={handleTextInput}
                inputClass="textinput-input"
                placeholder="Your Name"
              />
              <TextInput
                id="email"
                label="Email"
                type="email"
                onChange={handleTextInput}
                inputClass="textinput-input"
                placeholder="Your Email"

              />
              <TextInput
                id="password"
                label="Password"
                type="password"
                onChange={handleTextInput}
                inputClass="textinput-input"
                placeholder="Your Password"
              />
              <SingleSelect
                id="usertype"
                label="User Type"
                onChange={handleSingleSelect}
                inputClass="textinput-input"
                optionValues={userTypes}
              />
              {student && <TextInput
                id="studentId"
                label="Student Id"
                type="text"
                onChange={handleTextInput}
                inputClass="textinput-input"
                placeholder="Your Id"
              />}
              {teacher && <TextInput
                id="teacherId"
                label="Teacher Id"
                type="text"
                onChange={handleTextInput}
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
