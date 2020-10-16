import useGlobalState from "../state";
import {useEffect} from "react";

const ApplyFilter = () => {
  const [,setInit] = useGlobalState("hasAppliedFilter");
  const outcomes = window.outcomes;
  const [filter] = useGlobalState('filter');
  const [, setFilteredOutcomes] = useGlobalState("filteredOutcomes");

  useEffect(() => {
    setFilteredOutcomes(
      outcomes
        .filter(it => filter.focusOutcome.length > 0 ? it.id === filter.focusOutcome : true)
        .filter(it => filter.focusTag.length > 0 ? it.tags.map(tag => tag.name).includes(filter.focusTag) : true)
        .filter(it => filter.focusType.length > 0 ? it.tags.map(tag => tag.type).includes(filter.focusType) : true)
        .filter(it => filter.keyword.length > 0 ? [it.name, it.userStory.storyName, it.title].join("\n").toLowerCase().includes(filter.keyword.toLowerCase()) : true)
        .filter(it => filter.results.length > 0 ? filter.results.includes(it.result): true)
    );

    setInit(true)
  }, [filter, outcomes, setFilteredOutcomes, setInit]);

  return null;
};

export default ApplyFilter