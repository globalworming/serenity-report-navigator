import React, {useState} from 'react';
import ByStory from "./ByStory"
import ByTag from "./ByTag"
import MyPaper from "../atoms/MyPaper";
import CheckboxButton from "../atoms/CheckboxButton";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";

const ExploreData = () => {
  const [view, setView] = useState(0);
  const show = view === 0 ? <ByStory/> : <ByTag/>;
  return <>
    <MyPaper>
    <FullWidthWrappingFlexBox>
      group by: <CheckboxButton checked={view === 0} onClick={() => setView(0)}>by story</CheckboxButton>
      <CheckboxButton checked={view === 1} onClick={() => setView(1)}>by tag</CheckboxButton>
    </FullWidthWrappingFlexBox>
    </MyPaper>
    {show}
  </>
};

export default ExploreData
