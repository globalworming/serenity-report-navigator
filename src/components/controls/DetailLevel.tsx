import useGlobalState from "../../state";
import {Button} from "@material-ui/core";
import React from "react";
import View, {defaultDetail} from "../../model/View";

const DetailLevel = () => {
  const [view, setView] = useGlobalState('view');

  const inc = () => {
    set(view.detail + 1)
  };

  const dec = () => {
    set(view.detail - 1)
  };

  const set = (i: number) => {
    const newView = Object.assign(new View(), view);
    newView.detail = i;
    setView(newView)
  }

  return <>
    <strong>amount of info</strong> (0-4 does stuff), current {view.detail}
    <Button variant="contained" color="secondary" disableElevation
            onClick={() => dec()}>-detail</Button>
    <Button variant="contained" disableElevation
            onClick={() => set(defaultDetail)}>reset</Button>
    <Button
      variant="contained" color="primary" disableElevation
      onClick={() => inc()}>+detail</Button>
  </>
};

export default DetailLevel