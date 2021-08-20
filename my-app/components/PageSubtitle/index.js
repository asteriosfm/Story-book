import React from 'react';


const PageSubitle = ({
  className,
  title,
}) => {
  return (
    <div style={{width: '100%', marginBottom: '40px'}}>
      <span className={className}>{title}</span>
    </div>
  )
}

PageSubitle.defaultProps = {
  className: 'pageSubitle',
}

export default PageSubitle