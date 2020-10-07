import useGlobalState from "../state";
import {useEffect} from "react";
import {includeAllText} from "../model/Filter";

const ApplyFilter = () => {
  const [,setInit] = useGlobalState("hasAppliedFilter");
  const outcomes = window.outcomes;
  const [filter] = useGlobalState('filter');
  const [, setFilteredOutcomes] = useGlobalState("filteredOutcomes");

  useEffect(() => {
    setFilteredOutcomes(outcomes.filter(it => {
      const checkTestResult = () => !filter.testResult.exclude.includes(it.result);
      const checkTestName = () =>
        (filter.keyword.include === includeAllText) ||
        [it.name, it.userStory.storyName, it.title].join("\n").toLowerCase().includes(filter.keyword.include.toLowerCase());
      const noOtherTestIsHighlighted = () => filter.focusOutcome ? it.id === filter.focusOutcome : true;

      return noOtherTestIsHighlighted() && checkTestResult() && checkTestName();
    }));
    setInit(true)
  }, [filter, outcomes, setFilteredOutcomes, setInit]);

  return null;
};

export default ApplyFilter