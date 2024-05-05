import React from "react";
import { Divider } from "../divider";

const HighlightCard = React.forwardRef(({content, ...props}, ref) => {
  return (
    <div className="w-full md:w-1/4 flex flex-col gap-5">
      <div className="text-center">
        <h4 className="text-3xl font-bold">{content.title}</h4>
        <p className="text-sm">{content.description}</p>
      </div>
      <div className="container w-1/2">
        <Divider bg={`#FFF`}/>
      </div>
    </div>
  );
});

HighlightCard.displayName = "Highlight Card";
export default HighlightCard;
