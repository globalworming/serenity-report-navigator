import React from "react"
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import HighlightOnHover from "../../organisms/HighlightOnHover";
import ScreenShot from "../../molecules/ScreenShot";
import TestStep from "../../../model/TestStep";

interface MyProps {
  tell: TestStep,
  depth: number
}

const ScreenShots = ({tell, depth}: MyProps) => {

  const screenshotWidth = 20;
  return <>
    {
      tell.screenshots && tell.result && <FullWidthWrappingFlexBox style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
        {tell.screenshots.map((it, i) => <React.Fragment key={i}><Box flex={`0 1 ${screenshotWidth + 1}rem`}>
          <HighlightOnHover border>
            <ScreenShot fileName={it.screenshot} width={screenshotWidth}/>
          </HighlightOnHover>
        </Box></React.Fragment>)}
      </FullWidthWrappingFlexBox>
    }
    </>
};

export default ScreenShots