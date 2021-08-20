import React from 'react';


const SmartButton = ({
  className,
  title,
}) => {
  return (
    <div className={className}>
      <span>{title}</span>
    </div>
  )
}

SmartButton.defaultProps = {
  className: 'smartButton',
}

export default SmartButton