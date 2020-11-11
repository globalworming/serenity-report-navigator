import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import LinkTo from "../../atoms/LinkTo"
import useGlobalState from "../../../state";
import * as _ from "lodash";
import {Box, useTheme} from "@material-ui/core";
import {colorFor} from "../../App";
import {flatSteps} from "../../../model/TestStep";
import prettyMilliseconds from "pretty-ms";
import moment from "moment";
import Emoji from "../../atoms/Emoji";


interface MyProps {
  tell: TestOutcome
}

const OutcomeDescription = ({tell}: MyProps) => {
  const theme = useTheme();
  const startTime = typeof tell.startTime === "string" && tell.startTime.toString().includes("[") ? tell.startTime.split("[")[0] : tell.startTime;

  const [view] = useGlobalState("view");
  const steps = flatSteps(tell.testSteps);
  let results = steps.map(it => it.result);
  const resultPairs = _.toPairs(_.countBy(results));
  const screenshotCount = _.sum(steps.filter(it => it.screenshots).map(it => it.screenshots.length));
  const queryCount = steps.filter(it => it.restQuery).length;


  return <FullWidthWrappingFlexBox>
    <Box display={"inline"}>
      <strong>{tell.id}<LinkTo view={view} outcomeId={tell.id} depth={4}/></strong>
    </Box>
    <FullWidthWrappingFlexBox>
      {tell.tags.map(({type, displayName, name}) => (
        <span style={{
          color: theme.palette.text.primary,
          background: colorFor(type, "1F"),
          border: `1px solid ${colorFor(type)}`,
          borderRadius: "5px",
          marginRight: "0.2rem",
          padding: "0.1rem"
        }} key={`${type}${displayName}`}>{type}:{displayName ? displayName : name}
        </span>))}
    </FullWidthWrappingFlexBox>
    <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
      <Box>
        steps: {
        resultPairs.map(([result, count], i) => <React.Fragment key={i}> <ResultImage
          result={result}/>&nbsp;{count}</React.Fragment>)
      }
      </Box>
      <Box>started {moment(startTime).fromNow()}: {moment(startTime).toISOString()}</Box>
      <Box>
        took: {prettyMilliseconds(tell.duration)}
      </Box>
      {tell.actors && tell.actors.length > 0 && <Box>
        actors: {tell.actors.map(it => it.name).join((", "))}
      </Box>
      }
      {screenshotCount > 0 && <Box>
        <Emoji label={"screenshots"}/> {screenshotCount}
      </Box>
      }
      {queryCount > 0 && <Box>
        <Emoji label={"http"}/> {queryCount}
      </Box>
      }

    </FullWidthWrappingFlexBox>
  </FullWidthWrappingFlexBox>
};

export default OutcomeDescription