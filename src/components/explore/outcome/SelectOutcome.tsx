import {Box, Button, FormControl, Select, useTheme} from "@material-ui/core";
import useGlobalState from "../../../state";
import React, {useEffect} from "react";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import ResultImage from "../../atoms/ResultImage";
import ViewListIcon from '@material-ui/icons/ViewList';
import * as _ from "lodash";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MediaQuery from "../../../MediaQuery";
import {BreakPoints} from "../../../themes";

const SelectOutcome = () => {
  const theme = useTheme();
  const [outcomes] = useGlobalState('filteredOutcomes');
  const [selected, setSelected] = useGlobalState('selectedOutcome');
  const isSelected = selected.length > 0;
  const minimal = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakOutcomes));

  useEffect(() => {
    if (outcomes.length === 1) {
      setSelected(outcomes[0].id)
    }
  });

  useEffect(() => {
    if (!outcomes.find(it => it.id === selected) && outcomes.length > 1) {
      setSelected("")
    }
  }, [outcomes, setSelected, selected]);

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (typeof e.target.value === "string") {
      setSelected(e.target.value)
    }
  };

  return <>

    {
      isSelected && outcomes.length > 1 && minimal && <>
        <FormControl size={"small"} color={"secondary"} variant={"outlined"}>
          <Box display={"flex"} width={"100%"}>
            <Box>
              <Button
                  style={{
                    minWidth: 0,
                    padding: "0 0.2rem 0 0.7rem", height: "2.5rem"
                  }}
                  onClick={() => setSelected("")}
                  variant={"contained"}
                  color="secondary"
                  startIcon={<ViewListIcon/>}>{outcomes.length}</Button>
            </Box>
            <Box flex={"1 0 0"}>
              <Select
                  style={{marginLeft: "0.2rem", background: theme.palette.secondary.main}}
                  native
                  value={selected}
                  onChange={handleChange}>
                {
                  outcomes.map(it => <option key={it.id} value={it.id}>
                    {it.result.toLowerCase()}: {it.userStory.path} {it.userStory.storyName} {it.title}
                  </option>)
                }
              </Select>
            </Box>
          </Box>
        </FormControl>
      </>}
    {(!isSelected || !minimal) && <FullWidthWrappingFlexBox>
      {
        _.sortBy(
          _.sortBy(
            outcomes,
            (it => it.userStory.storyName)
          ),
          (it => it.userStory.path)
        ).map(it => <React.Fragment key={it.id}>
          <FullWidthWrappingFlexBox>
            <Button fullWidth variant={"outlined"} color={it.id === selected ? "primary" : "secondary"}
                    style={{
                      textTransform: "none",
                      justifyContent: "start",
                      textAlign: "left",
                      color: theme.palette.text.primary,
                      margin: "0.2rem",
                      background: it.id === selected ? theme.palette.background.paper : "none"
                    }}
                    onClick={() => setSelected(it.id)}
            >
              <Box display={"flex"} width={"100%"}>
                <Box style={{marginRight: "0.2rem"}}>
                  <ResultImage result={it.result}/>
                </Box>
                <Box style={{wordBreak: "break-all"}}>
                  {it.userStory.path}
                  <br/>
                  {it.userStory.storyName}
                  <br/>
                  {it.title}
                </Box>
              </Box>
            </Button>
          </FullWidthWrappingFlexBox>
        </React.Fragment>)
      }
    </FullWidthWrappingFlexBox>}

  </>


};
export default SelectOutcome