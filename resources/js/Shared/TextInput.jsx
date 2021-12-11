import React from 'react'

const TextInput = ({ label, name, inputLabelClass, inputClass, type, value, errors = [], onChange, placeholder }) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className={inputLabelClass}>
          {label}
          :
        </label>
      )}
      <div>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
      {errors && <div>{errors}</div>}
      {/* {errors && <div className="form-error">{errors}</div>} */}
    </div>
  )
}

export default TextInput
