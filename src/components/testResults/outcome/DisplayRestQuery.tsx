import RestQuery from "../../../model/RestQuery";
import * as React from "react";
import Expandable from "../../organisms/Expandable";
import OneClickCopy from "../../molecules/OneClickCopy";
import {Button} from "@material-ui/core";
import Pre from "../../atoms/Pre";

interface MyProps {
  tell: RestQuery
}

const DisplayRestQuery = ({tell}: MyProps) => {

  return <Expandable depths={4} whatsHidden={<>
    <OneClickCopy text={JSON.stringify(tell, undefined, 2)}/>
    <Pre>{JSON.stringify(tell, undefined, 2)}</Pre>
  </>}><Button variant={"contained"} color={"secondary"}>query</Button>
  </Expandable>
};

export default DisplayRestQuery