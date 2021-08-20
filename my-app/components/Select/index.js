import React from 'react';


const Select = ({
  className,
  title,
  valuesArray,
  placeholder,
}) => {
  return (
    <div className={className}>
      <label htmlFor="select">{title}</label>
      <select id='select' className='select'>
        <option selected disabled value={placeholder}>{placeholder}</option>
        {valuesArray.map(value => {
          return (
            <option value={value}>{value}</option>
          )
        })}
      </select>
    </div>
  )
}

Select.defaultProps = {
  className: 'selectControl',
  valuesArray: [],
}

export default Select