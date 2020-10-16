import React from 'react';
import useGlobalState from '../../state';
import ByStory from "./ByStory";
import ByScreenshots from "./ByScreenshots";
import Overview from "./stats/Overview";
import ClearButton from "../molecules/ClearButton";
import Filter from "../../model/Filter";

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState("filteredOutcomes");
  const [, setFilter] = useGlobalState("filter");
  const [, setDepths] = useGlobalState("expansionDepth");

  const displayView = (view: string) => {
    switch (view) {
      case "story":
        return <ByStory/>;
      case "screenshots":
        return <ByScreenshots/>;
      case "stats":
        return <Overview/>
    }
    return <Overview/>
  };

  function clear() {
    setDepths(0);
    setFilter(new Filter())
  }

  return <>
    {outcomes.length === 0 && <>No Results, clear all filters? <ClearButton disabled={false} onClick={clear}/></>}
    {displayView(view)}
  </>
};

export default ExploreData
