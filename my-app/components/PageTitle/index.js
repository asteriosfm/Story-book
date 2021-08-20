import React from 'react';


const PageTitle = ({
  className,
  title,
}) => {
  return (
    <div>
      <span className={className}>{title}</span>
    </div>
  )
}

PageTitle.defaultProps = {
  className: 'pageTitle',
}

export default PageTitle