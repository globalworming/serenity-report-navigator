import Actor from "../../model/Actor";
import FullWidthWrappingFlexBox from "./FullWidthWrappingFlexBox";
import React from "react";
import {Box, useTheme} from "@material-ui/core";
import Emoji from "../atoms/Emoji";

type MyProps1 = {
  tellAll: Array<Actor>
}
const Actors = ({tellAll}: MyProps1) => {
  const theme = useTheme();
  return <>
    <FullWidthWrappingFlexBox>
      {
        tellAll.map((it, i) => <Box padding={"0.2rem"} border={"0.1rem solid " + theme.palette.secondary.main} margin={"0.2rem"} key={i} borderRadius={"5px"}>
          <Emoji label={"person"}/>&nbsp;"{it.name}" can: {it.can.join(", ")}
        </Box>)
      }
    </FullWidthWrappingFlexBox>
  </>
};
export default Actors