import React from 'react'

const SingleSelect = ({ id, name, label, labelClass, inputClass, optionValues, onChange, value }) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
          :
        </label>
      )}
      <div>
        {
          <select name={name} id={id} className={inputClass} value={value} onChange={onChange}>
            {optionValues.map(({ key, value }) => {
              return <option key={key} value={key}>{value}</option>
            })
            }
          </select>
        }
      </div>
    </div>
  )
}

export default SingleSelect
