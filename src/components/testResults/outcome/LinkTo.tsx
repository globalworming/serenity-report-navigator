import {MyQuery, queryString} from "../../LocalStateFromQueryParameters";
import {Button} from "@material-ui/core";
import React from "react";
import useGlobalState from "../../../state";

const LinkTo = (props: MyQuery) => {
  const [theme] = useGlobalState("theme");
  return <Button  variant={"text"} onClick={e => e.stopPropagation()} target={"_blank"} href={queryString(Object.assign({theme}, props))}>
    <span role="img" aria-label={"link"}>🔗</span></Button>
};

export default LinkTo