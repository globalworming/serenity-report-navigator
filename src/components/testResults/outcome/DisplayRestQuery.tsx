import RestQuery from "../../../model/RestQuery";
import * as React from "react";
import Expandable from "../../organisms/Expandable";

interface MyProps {
  tell: RestQuery
}

const DisplayRestQuery = ({tell}: MyProps) => {
  return <Expandable depths={4} whatsHidden={<>
    <span>{JSON.stringify(tell, undefined, 2)}</span>
  </>}>show query</Expandable>
}

export default DisplayRestQuery