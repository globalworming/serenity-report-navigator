import React from 'react';
import useGlobalState from '../../state';
import ByStory from "./ByStory";
import ByScreenshots from "./ByScreenshots";
import ByTags from "./ByTags";

const ExploreData = () => {
  const [view] = useGlobalState("view");

  const displayView = (view: string) => {
    switch (view) {
      case "story": return <ByStory/>;
      case "screenshots": return <ByScreenshots/>
    }
    return <ByTags />
  };
  return <>
    {displayView(view)}
  </>
};

export default ExploreData
