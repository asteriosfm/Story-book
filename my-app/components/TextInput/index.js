import React, { useState } from 'react';

const TextInput = ({
  placeHolder,
  label,
  className,
  autocomplete='sd',
}) => {

  const [value, setValue] = useState('');

  return <div
    className="formControl"
  >
      <label htmlFor='textInput'>{label}</label>
      <input
        autocomplete={autocomplete}
        className={className}
        id='textInput'
        placeHolder={placeHolder}
        value={value}
        onChane={(e) => setValue(e.target.value)}
      />
  </div>
}

TextInput.defaultProps = {
  className: 'textInput'
}

export default TextInput;
