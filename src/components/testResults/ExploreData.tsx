import React from 'react';
import TestOutcome from "../../model/TestOutcome";
import ByStory from "./ByStory"

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    outcomes:Array<TestOutcome>;
  }
}

const ExploreData = () => {
  return <ByStory/>
};

export default ExploreData
