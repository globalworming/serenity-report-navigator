import CheckboxButton from "../atoms/CheckboxButton";
import useGlobalState from "../../state";
import View from "../../model/View";
import * as React from "react";

const ShowScreenshots = () => {

  const [view, setView] = useGlobalState('view');

  function toggle() {
    const newView = Object.assign(new View(), view);
    newView.showScreenshots = !view.showScreenshots;
    setView(newView);
  }

  return <CheckboxButton onClick={() => toggle()} checked={view.showScreenshots}>screenshots</CheckboxButton>
};

export default ShowScreenshots

