import * as React from 'react';

const CustomCard = ({children}) => {
  return (
    <div className="flex w-full  scroll-smooth bg-white">
      <div>{children}</div>
    </div>
  );
};

export default CustomCard;
