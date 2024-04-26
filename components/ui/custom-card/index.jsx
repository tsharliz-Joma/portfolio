import * as React from 'react';

const CustomCard = ({ children }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    flex: '0 0 100%',
    paddingRight: '8px', // Half of 16px
    paddingLeft: '8px', // Half of 16px
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    backgroundColor: '#FFF',
  };

  const containerWrapper = {
    flexGrow: 1;
    perspective: '1000px';
  }

  return (
    <div style={containerStyle}>
      <div>{children}</div>
    </div>
  );
};

export default CustomCard;
