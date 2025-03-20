"use client";
import React, {useState, useEffect} from "react";
import {cn} from "@/lib/utils";

export const SectionContainer = ({
  getDataFunc = () => {},
  resourceName,
  children,
  className,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  return (
    <div className={cn(`container mx-auto px-5 py-10`, className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {[resourceName]: state});
        }
        return child;
      })}
    </div>
  );
};
