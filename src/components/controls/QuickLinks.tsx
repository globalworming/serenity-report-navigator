import {Button} from "@material-ui/core";
import LinkTo from "../testResults/outcome/LinkTo";
import Result from "../../model/Result";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import * as React from "react";
import Filter from "../../model/Filter";
import useGlobalState from "../../state";

const QuickLinks = () => {

  const [, setView] = useGlobalState("view");
  const [, setFilter] = useGlobalState("filter");
  const [, setDepths] = useGlobalState("expansionDepth");


  const showPendingStories = () => {
    const newFilter = new Filter();
    newFilter.results = [Result.Pending];
    setFilter(newFilter);
    setDepths(1);
    setView("story")

  };

  const showViewOutcomeErrors = () => {
    const newFilter = new Filter();
    newFilter.results = [Result.Failure, Result.Error, Result.Compromised];
    setFilter(newFilter);
    setDepths(4);
    setView("story")
  };


  return <><span style={{textTransform: "capitalize"}}>quick access</span>
    <Button style={{marginBottom: "0.5rem"}} fullWidth={true} color={"secondary"} variant={"outlined"}
            onClick={showViewOutcomeErrors}>
      trace errors <LinkTo depth={4} results={[Result.Failure, Result.Error, Result.Compromised]}/>
    </Button>

    <Button fullWidth={true} color={"secondary"} variant={"outlined"} onClick={showPendingStories}>
      pending stories <LinkTo depth={1} results={[Result.Pending]}/>
    </Button></>;
}

export default QuickLinks