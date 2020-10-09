import React from 'react';
import MyPaper from "../atoms/MyPaper";
import CheckboxButton from "../atoms/CheckboxButton";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import useGlobalState from '../../state';
import View from '../../model/View';
import ByStory from "./ByStory";
import ByTag from "./ByTag";
import LinkTo from "./outcome/LinkTo";
import * as _ from "lodash";
import ByFeature from "./ByFeature";

const ExploreData = () => {
  const [view, setView] = useGlobalState("view");
  const [, setDepths] = useGlobalState("expansionDepth");

  const switchTo = (view: string) => {
    setDepths(0);
    setView(view)

  };

  const show = (view: string) => {
    switch (view) {
      case View.STORY: return <ByStory/>;
      case View.TAG: return <ByTag/>;
      case View.FEATURE: return <ByFeature/>;
    }
  };



  function switchToViewButton(it: string) {
    return <><CheckboxButton checked={view === it} onClick={() => switchTo(it)}>{it}</CheckboxButton><LinkTo view={it}
                                                                                                             depth={0}/></>;
  }

  return <>
    <MyPaper>
    <FullWidthWrappingFlexBox>
      {
        [_.keys(View).filter(it => it !== View.TAG).map(it => <React.Fragment key={it}>
          {switchToViewButton(it)}
        </React.Fragment>)]
      }
      {switchToViewButton(View.TAG)}
    </FullWidthWrappingFlexBox>
    </MyPaper>
    {show(view)}
  </>
};

export default ExploreData
