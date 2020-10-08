import RestQuery from "../../../model/RestQuery";
import * as React from "react";
import Expandable from "../../organisms/Expandable";
import OneClickCopy from "../../molecules/OneClickCopy";

interface MyProps {
  tell: RestQuery
}

const DisplayRestQuery = ({tell}: MyProps) => {

  return <Expandable depths={4} whatsHidden={<>
    <OneClickCopy text={JSON.stringify(tell, undefined, 2)}/>
    <pre>{JSON.stringify(tell, undefined, 2)}</pre>
  </>}>show query</Expandable>
};

export default DisplayRestQuery