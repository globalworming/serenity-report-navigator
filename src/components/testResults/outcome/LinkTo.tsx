import {encodedQuery, MyQuery} from "../../LocalStateFromQueryParameters";
import {Button} from "@material-ui/core";
import React from "react";

const LinkTo = (props: MyQuery) => {
  return <Button style={{margin: "0.2rem", borderColor: "#DBA"}} variant={"outlined"} disableElevation onClick={e => e.stopPropagation()} target={"_blank"} href={`?${encodedQuery(props)}`}><span role="img" aria-label={"link"}>🔗</span></Button>
};

export default LinkTo