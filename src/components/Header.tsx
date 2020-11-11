import {Box, Button, ClickAwayListener} from "@material-ui/core";
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import Emoji from "./atoms/Emoji";
import ResultImage from "./atoms/ResultImage";
import Result from "../model/Result";
import EnableTracking from "./EnableTracking";
import React, {useState} from "react";
import useGlobalState from "../state";
import Themes from "../themes";
import _ from "lodash";

const Header = () => {
  const [theme, setTheme] = useGlobalState("theme");
  const isDark = theme === "dark";
  const [info, setInfo] = useState(false);

  const spanStyle = {padding: "0.2rem"};
  const ToggleTheme = <>
    <Button variant={"contained"} type="button" color={"secondary"}
            style={{borderRadius: "100%", minWidth: "0"}}
            onClick={() => isDark ? setTheme("light") : setTheme("dark")}>
      {isDark ? <Emoji label={"night"}/> : <Emoji label={"day"}/>}
    </Button>
  </>;
  const Info = <ClickAwayListener onClickAway={() => setInfo(false)}>
    <div>
      {info || <Button variant={"contained"} type="button" color={"secondary"}
                       style={{borderRadius: "100%", minWidth: "0"}}
                       onClick={() => setInfo(true)}>
          <strong>?</strong>
      </Button>}

      {info ? (
        <>
          <span style={spanStyle}>
        <Emoji label={"stories"}/> concise reporting of features</span>
          <span style={spanStyle}>
        <ResultImage result={Result.FAILURE}/> in-depth steps and traces
      </span>
          <span style={spanStyle}>
        <Emoji label={"big screen"}/> wallboard mode
      </span>
          <span style={spanStyle}>
        <Emoji label={"mobile"}/> mobile friendly
      </span>
          <span style={spanStyle}>
        <Emoji label={"one hundred"}/> customizable theme and view options
      </span>
        </>
      ) : null}
    </div>
  </ClickAwayListener>;

  return <>
    <Box style={{position: "absolute", right: "0.75rem", top: "0.15rem", textAlign: "right"}}>
      <a href="https://github.com/globalworming/serenity-report-navigator">
        <img
          style={{height: "1.5rem"}}
        src="https://x.h7e.eu/badges/xz/q/github/starGazers/gh-stargazers/globalworming/serenity-report-navigator"
        alt="GitHub Stars"/></a>


    </Box>
    <Box style={{position: "absolute", right: "8rem", top: "0.2rem", textAlign: "right"}}>
      <Button size={"small"} variant={"contained"} color={"secondary"} href={"https://github.com/sponsors/globalworming"} target={"_blank"} rel={"noopener noreferrer"} ><Emoji label={"heart"}/> Sponsor</Button>
    </Box>

    <FullWidthWrappingFlexBox style={{background: _.get(Themes, theme).palette.secondary.main, color: _.get(Themes, theme).palette.text.main}}>
      <FullWidthWrappingFlexBox>
        <strong style={{padding: "0.5rem", display: "inline"}}>Serenity Report Navigator</strong>
        {ToggleTheme}
        {info && <Button variant={"contained"} type="button" color={"secondary"}
                         style={{borderRadius: "100%", minWidth: "0"}}
                         disabled={true}>
          <strong>?</strong>
        </Button>}
        {Info}
      </FullWidthWrappingFlexBox>


      {false && <EnableTracking/>}
    </FullWidthWrappingFlexBox>
  </>;
};

export default Header