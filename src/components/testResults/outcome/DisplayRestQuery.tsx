import RestQuery from "../../../model/RestQuery";
import * as React from "react";
import Expandable from "../../organisms/Expandable";
import OneClickCopy from "../../molecules/OneClickCopy";
import {Button} from "@material-ui/core";

interface MyProps {
  tell: RestQuery
}

const DisplayRestQuery = ({tell}: MyProps) => {

  return <Expandable depths={4} whatsHidden={<>
    <OneClickCopy text={JSON.stringify(tell, undefined, 2)}/>
    <pre>{JSON.stringify(tell, undefined, 2)}</pre>
  </>}><Button variant={"contained"} color={"secondary"}>show query</Button>
  </Expandable>
};

export default DisplayRestQuery