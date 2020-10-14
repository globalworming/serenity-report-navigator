import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Button} from "@material-ui/core";
import Emoji from "../../atoms/Emoji";
import Fullscreen from "./noun_Expand proportionally_1691340.svg";
import React from "react";

interface MyProps1 {
  setIndex: Function
  index: number
  items: number
  fileName: string
}

const Controls = ({setIndex, index, items, fileName}: MyProps1) => {

  const controlStyle = {border: "3px solid #DDBBAADD", background: "#FFFFFFDD", margin: "0.5rem"};

  return <FullWidthWrappingFlexBox style={{padding: "1rem", justifyContent: "space-around"}}>
    <Button style={controlStyle} variant={"text"} onClick={() => setIndex(Math.max(index - 1, 0))}>&lt;</Button>
    {
      [...Array(items)].map((_, i) => <Button key={i} style={{
        minWidth: "20px",
        color: "white",
        background: i === index ? "rgba(57,57,57,0.87)" : "none"
      }} variant={"text"}>{i === index ? <Emoji label={"screenshots"}/> : "*"}</Button>)
    }
    <Button style={controlStyle} variant={"text"}
            onClick={() => setIndex(Math.min(index + 1, items - 1))}>&gt;</Button>
    <Button style={controlStyle} variant={"text"} href={`./screenshots/${fileName}`} target={"_blank"}>
      <img alt={"fullscreen"}
           style={{width: "2rem"}}
           src={Fullscreen}/>
    </Button>
  </FullWidthWrappingFlexBox>;
};

export default Controls