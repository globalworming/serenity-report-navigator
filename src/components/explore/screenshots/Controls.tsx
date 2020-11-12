import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Button, useTheme} from "@material-ui/core";
import Emoji from "../../atoms/Emoji";
import React from "react";

interface MyProps1 {
  setIndex: Function
  index: number
  items: number
  fileName: string
}

const Controls = ({setIndex, index, items, fileName}: MyProps1) => {
  const theme = useTheme();
  const controlStyle = {border: `3px solid ${theme.palette.primary.main}DD`, margin: "0.5rem"};

  return <FullWidthWrappingFlexBox style={{padding: "1rem", justifyContent: "space-around"}}>
    <Button style={controlStyle} variant={"text"} onClick={() => setIndex(Math.max(index - 1, 0))}>&lt;</Button>
    {
      [...Array(items)].map((_, i) => <Button key={i} onClick={() => setIndex(i)} style={{
        minWidth: "20px",
        background: i === index ? "#88888860" : "none"
      }} variant={"text"}>{i === index ? <Emoji label={"screenshots"}/> : "*"}</Button>)
    }
    <Button style={controlStyle} variant={"text"}
            onClick={() => setIndex(Math.min(index + 1, items - 1))}>&gt;</Button>
    <Button style={controlStyle} variant={"text"} href={`./screenshots/${fileName}`} target={"_blank"}>
      100%
    </Button>
  </FullWidthWrappingFlexBox>;
};

export default Controls