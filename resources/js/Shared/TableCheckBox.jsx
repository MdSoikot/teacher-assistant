import { uniqueId } from 'lodash'

export default function TableCheckBox({ id, checked = false, name, value, onChange, title, subTitle, className }) {
  const ids = id || uniqueId()

  return (
    <label htmlFor={`TableCheckBox-id-${ids}`} className={`${className} flex`}>
      <div className="flex cursor-pointer w-full mr-2">
        <input
          id={`TableCheckBox-id-${ids}`}
          type="checkbox"
          className="form-checkbox flex-shrink-0 h-5 w-5 text-indigo-600 border-indigo-900 border-2"
          checked={checked}
          value={value}
          name={name}
          onChange={onChange}
        />
        <div className="ml-2">
          <div className="flex">
            <span className="block extras-ele-label whitespace-nowrap mr-2">{title}</span>
          </div>
          {subTitle && (
            <span className="extras-subele-label">{subTitle}</span>
          )}
        </div>
      </div>
    </label>
  )
}
