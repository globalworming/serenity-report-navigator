import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import {Box, useTheme} from "@material-ui/core";
import {colorFor} from "../../App";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";

type MyProps = {
  tell: TestOutcome
}
const OutcomeDescription = ({tell}: MyProps) => {
  const theme = useTheme();

  return <Box style={{padding: "1rem", overflow: "hidden"}}>
    <FullWidthWrappingFlexBox>
      {tell.tags.map(({type, displayName, name}) => (
        <span style={{
          color: theme.palette.text.primary,
          background: colorFor(type, "1F"),
          border: `1px solid ${colorFor(type)}`,
          borderRadius: "5px",
          marginRight: "0.5rem",
          padding: "0.2rem"
        }} key={`${type}${displayName}`}>{type}:{displayName ? displayName : name}
        </span>))}
    </FullWidthWrappingFlexBox>
    { tell.scenarioOutline && tell.scenarioOutline.length > 0 && <><br/><br/><span>
      <strong>outline:</strong> {tell.scenarioOutline}
    </span></>}
    { tell.description && tell.description.length > 0 && <><br/><br/><span>
      <strong>description:</strong> {tell.description}
    </span></>}

  </Box>
};

export default OutcomeDescription