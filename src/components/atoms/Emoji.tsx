import {FunctionComponent} from "react";
import React from "react";

interface MyProps {
  label: string
}

const Emoji: FunctionComponent<MyProps> = ({label, children}) => {
  return <span role="img" aria-label={label}>{children}</span>
};

export default Emoji