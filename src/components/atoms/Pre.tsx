import {CSSProperties, FunctionComponent} from "react";
import * as React from "react";

interface MyProps {
  style?: CSSProperties
}

const Pre: FunctionComponent<MyProps> = ({children, style}) => {
  const mergedStyle = Object.assign({overflowX: "auto", flex: "0 0 100%"}, style );
  return <pre style={mergedStyle}>
    {children}
  </pre>
};

export default Pre