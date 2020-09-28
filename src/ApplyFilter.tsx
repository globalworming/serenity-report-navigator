import useGlobalState from "./state";
import {useEffect} from "react";
import {includeAll} from "./model/Filter";

const ApplyFilter = () => {
  const outcomes = window.outcomes;
  const [filter] = useGlobalState('filter');
  const [, setFilteredOutcomes] = useGlobalState("filteredOutcomes");

  useEffect(() => {
    setFilteredOutcomes(outcomes.filter(it => {
      const checkTestResult = () => !filter.testResult.exclude.includes(it.result);
      const checkTestName = () =>
        (filter.keyword.include === includeAll) ||
        [it.name, it.userStory.storyName, it.title].join("\n").toLowerCase().includes(filter.keyword.include.toLowerCase());

      return checkTestResult() && checkTestName();
    }));
  }, [filter, outcomes, setFilteredOutcomes]);

  return null;
}

export default ApplyFilter