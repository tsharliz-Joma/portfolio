
import * as React from "react";


const Divider = React.forwardRef(({ bg , className, ...props}, ref) => {
  return <div style={{ backgroundColor: bg }} className={`w-full h-px ${className}`}></div>;
})

Divider.displayName = "Divider";
export {Divider};
