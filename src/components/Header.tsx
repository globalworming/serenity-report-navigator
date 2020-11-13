import {Box, Button, ClickAwayListener, useTheme} from "@material-ui/core";
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import Emoji from "./atoms/Emoji";
import ResultImage from "./atoms/ResultImage";
import Result from "../model/Result";
import EnableTracking from "./EnableTracking";
import React, {useState} from "react";
import useGlobalState from "../state";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {smallerThan} from "../MediaQuery";


const Title = () => {
  const theme = useTheme();

  return <Button style={{color: theme.palette.text.primary}} variant={"text"} href={"/"}>
    <h1>Serenity Report Navigator</h1>
  </Button>;
};

const Info = () => {
  const [info, setInfo] = useState(false);
  const spanStyle = {padding: "0.2rem"};

  return <ClickAwayListener onClickAway={() => setInfo(false)}>
    <div>
      {!info && <Button variant={"outlined"} type="button" color={"primary"}
                        style={{minWidth: "0"}}
                        onClick={() => setInfo(true)}>
        <strong>?</strong>
      </Button>}

      {info &&
      <>
        <FullWidthWrappingFlexBox>
            <span style={spanStyle}>
          <Emoji label={"stories"}/>concise living documentation</span>
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

        </FullWidthWrappingFlexBox>
      </>
      }
    </div>
  </ClickAwayListener>;
};

const ToggleTheme = () => {
  const [theme, setTheme] = useGlobalState("theme");
  const isDark = theme === "dark";

  return <>
    <Button variant={"outlined"} type="button" color={"primary"}
            style={{minWidth: "0"}}
            onClick={() => isDark ? setTheme("light") : setTheme("dark")}>
      {isDark ? <Emoji label={"night"}/> : <Emoji label={"day"}/>}
    </Button>
  </>;
};

const Sponsor = () =>
  <Button variant={"outlined"} color={"primary"}
          href={"https://github.com/sponsors/globalworming"} target={"_blank"}
          rel={"noopener noreferrer"}>
    <Emoji label={"heart"}/>&nbsp;Sponsor
  </Button>;

const Stars = () =>
  <a style={{height: "2.2rem"}}
     href="https://github.com/globalworming/serenity-report-navigator">
    <img
      style={{height: "2.2rem"}}
      src="https://x.h7e.eu/badges/xz/q/github/starGazers/gh-stargazers/globalworming/serenity-report-navigator"
      alt="GitHub Stars"/>
  </a>;

const Header = () => {
  const headerBreak1 = 650;
  const minimal = useMediaQuery(smallerThan(headerBreak1));

  return <>
    {minimal && <>
      <FullWidthWrappingFlexBox>
        <Title/>
        <ToggleTheme/>
      </FullWidthWrappingFlexBox>

      <Box display={"flex"} flexWrap={"wrap"} marginLeft={"auto"} flex={"0 0 20rem"} style={{justifyContent: "space-between"}}
           flexDirection="row-reverse"
      >
        <Sponsor/>
        <Stars/>
        <Info/>
      </Box>
    </>}

    {!minimal && <>
      <FullWidthWrappingFlexBox style={{justifyContent: "space-between", paddingBottom: "0.2rem"}}>
        <Box>
          <Title/>
          <ToggleTheme/>
        </Box>

        <Box display={"flex"} flexWrap={"wrap"} flex={"0 0 20rem"} style={{justifyContent: "space-between"}}>
          <Sponsor/>
          <Stars/>
          <Info/>
        </Box>
      </FullWidthWrappingFlexBox>
    </>}

    {false && <EnableTracking/>}
  </>;
};

export default Header