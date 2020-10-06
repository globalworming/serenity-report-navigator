import React from "react";
import {colorFor} from "../App";
import Tag from "../../model/Tag";

interface MyProps {
  tell: Tag
}

const TagHeading = ({tell}: MyProps) => {
  return <span style={{padding: "0.25rem", borderRadius: "5px", border: `1px solid ${colorFor(tell.type)}`, background: colorFor(tell.name, "99")}}>
            {tell.displayName? tell.displayName : tell.name}
          </span>
};

export default TagHeading