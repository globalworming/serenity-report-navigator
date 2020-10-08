import React from 'react';
import MyPaper from "../atoms/MyPaper";
import CheckboxButton from "../atoms/CheckboxButton";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import useGlobalState from '../../state';
import View from '../../model/View';
import ByStory from "./ByStory";
import ByTag from "./ByTag";

const ExploreData = () => {
  const [view, setView] = useGlobalState("view");
  const [, setDepths] = useGlobalState("expansionDepth");

  const switchTo = (view: View) => {
    setDepths(0);
    setView(view)

  };

  const show = (view: View) => {
    switch (view) {
      case View.STORY: return <ByStory/>;
      case View.TAG: return <ByTag/>;
    }
  };

  return <>
    <MyPaper>
    <FullWidthWrappingFlexBox>
      <CheckboxButton checked={view === View.STORY} onClick={() => switchTo(View.STORY)}>by story</CheckboxButton>
      <CheckboxButton checked={view === View.TAG} onClick={() => switchTo(View.TAG)}>by tag</CheckboxButton>
    </FullWidthWrappingFlexBox>
    </MyPaper>
    {show(view)}
  </>
};

export default ExploreData
