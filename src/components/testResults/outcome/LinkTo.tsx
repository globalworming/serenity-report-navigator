import {encodedQuery} from "../../LocalStateFromQueryParameters";
import Emoji from "../../atoms/Emoji";
import {Button} from "@material-ui/core";
import React from "react";

interface MyProps {
  outcomeId?: string
  view?: string
  depth?: number
}

const LinkTo = (props: MyProps) => {
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  return <Button onClick={e => e.stopPropagation()} target={"_blank"} href={`?${encodedQuery(props)}`}><Emoji label={"link"}/>🔗</Button>
};

export default LinkTo