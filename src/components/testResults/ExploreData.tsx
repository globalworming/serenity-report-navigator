import React from 'react';
import useGlobalState from '../../state';
import ByStory from "./ByStory";
import ByScreenshots from "./ByScreenshots";
import Overview from "./stats/Overview";
import {Box} from "@material-ui/core";
import _ from "lodash";
import {colorOf} from "../../model/Result";

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState("filteredOutcomes");


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
  return <>
    {displayView(view)}
  </>
};

export default ExploreData
