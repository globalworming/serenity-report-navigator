import {encodedQuery} from "../../LocalStateFromQueryParameters";
import Emoji from "../../atoms/Emoji";
import {Button} from "@material-ui/core";
import React from "react";

interface MyProps {
  outcomeId: string
}

const LinkToOutcome = ({outcomeId}: MyProps) => {
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  return <Button onClick={e => e.stopPropagation()} target={"_blank"} href={`?${encodedQuery({outcomeId, depth: 4})}`}><Emoji label={"link to this outcome"}/>🔗</Button>
};

export default LinkToOutcome