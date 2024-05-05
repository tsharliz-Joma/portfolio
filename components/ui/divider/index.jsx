import * as React from "react";


const Divider = React.forwardRef(({ bg , ...props}, ref) => {
  return <div style={{ backgroundColor: bg }} className={`w-full h-px`}></div>;
})

Divider.displayName = "Divider";
export {Divider};
