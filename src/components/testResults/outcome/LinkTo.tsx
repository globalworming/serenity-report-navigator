import {MyQuery, queryString} from "../../LocalStateFromQueryParameters";
import {Button} from "@material-ui/core";
import React from "react";

const LinkTo = (props: MyQuery) => {
  return <Button  variant={"text"} onClick={e => e.stopPropagation()} target={"_blank"} href={queryString(props)}>
    <span role="img" aria-label={"link"}>🔗</span></Button>
};

export default LinkTo