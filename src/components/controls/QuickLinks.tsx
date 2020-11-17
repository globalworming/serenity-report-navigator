import {Button} from "@material-ui/core";
import Result from "../../model/Result";
import * as React from "react";
import Filter from "../../model/Filter";
import useGlobalState from "../../state";
import View from "../../model/View";

const QuickLinks = () => {

  const [, setView] = useGlobalState("view");
  const [, setFilter] = useGlobalState("filter");
  const [, setDepths] = useGlobalState("expansionDepth");


  const showPendingStories = () => {
    const newFilter = new Filter();
    newFilter.results = [Result.PENDING];
    setFilter(newFilter);
    setDepths(1);
    setView(View.STORY)
  };

  const showViewOutcomeErrors = () => {
    const newFilter = new Filter();
    newFilter.results = [Result.FAILURE, Result.ERROR, Result.COMPROMISED];
    setFilter(newFilter);
    setDepths(10);
    setView(View.OUTCOMES);
  };


  return <>
    <Button style={{marginBottom: "0.5rem"}} fullWidth={true} color={"secondary"} variant={"outlined"}
            onClick={showViewOutcomeErrors}>
      trace errors
    </Button>

    <Button fullWidth={true} color={"secondary"} variant={"outlined"} onClick={showPendingStories}>
      pending stories
    </Button></>;
};

export default QuickLinks