
import React, {forwardRef} from "react";


const Divider = forwardRef(({ bg , className, ...props}, ref) => {
  return <div style={{ backgroundColor: bg }} className={`w-full h-px ${className}`}></div>;
})

Divider.displayName = "Divider";
export default Divider
