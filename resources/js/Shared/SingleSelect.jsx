import React from 'react'

const SingleSelect = ({ id, name, label, labelClass, inputClass, optionValues }) => {
  console.log(optionValues)
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
          <select name={name} id={id} className={inputClass}>
            {optionValues.map(({ key, value }) => {
              return <option value={key}>{value}</option>
            })
            }
          </select>
        }
      </div>
    </div>
  )
}

export default SingleSelect
