import {encodedQuery} from "../../LocalStateFromQueryParameters";
import {Button} from "@material-ui/core";
import React from "react";

interface MyProps {
  outcomeId?: string
  view?: string
  depth?: number
}

const LinkTo = (props: MyProps) => {
  return <Button onClick={e => e.stopPropagation()} target={"_blank"} href={`?${encodedQuery(props)}`}><span role="img" aria-label={"link"}>🔗</span></Button>
};

export default LinkTo