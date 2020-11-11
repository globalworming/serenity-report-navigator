import Actor from "../../../model/Actor";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import {Box} from "@material-ui/core";

type MyProps1 = {
  tellAll: Array<Actor>
}
const Actors = ({tellAll}: MyProps1) => {
  return <>
    <FullWidthWrappingFlexBox>
      {
        tellAll.map((it, i) => <Box marginRight={"0.5rem"} key={i}>
          {it.name}, can: {it.can.join(", ")}
        </Box>)
      }
    </FullWidthWrappingFlexBox>
  </>
};
export default Actors