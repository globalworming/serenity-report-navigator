import {MyQuery, queryString} from "../LocalStateFromQueryParameters";
import {Button, useTheme} from "@material-ui/core";
import React from "react";
import useGlobalState from "../../state";

const LinkTo = (props: MyQuery) => {
  const [themeKey] = useGlobalState("theme");
  const theme = useTheme();

  const encodedTheme = themeKey !== "custom" ? themeKey :
    [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.text.primary, theme.palette.background.default, theme.palette.background.paper].join("_");
  return <Button style={{minWidth: 0}} variant={"text"} onClick={e => e.stopPropagation()} target={"_blank"} href={queryString(Object.assign({theme: encodedTheme}, props))}>
    <span role="img" aria-label={"link"}>🔗</span></Button>
};

export default LinkTo