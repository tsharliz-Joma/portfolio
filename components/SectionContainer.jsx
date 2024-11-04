import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const SectionContainer = ({ getDataFunc = () => {}, resource, children, className = cn(`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto shadow-custom-blur`) }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataFunc();
      setState(data);
    };
    fetchData();
  }, [getDataFunc]);

  return (
    <div className={className}>
      {React.Children.toArray(childen).map((child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resource]: state });
        }
      })}
    </div>
  );
};
