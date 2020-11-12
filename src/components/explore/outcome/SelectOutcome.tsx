import {Box, Button, FormControl, Select, useTheme} from "@material-ui/core";
import useGlobalState from "../../../state";
import React, {useEffect} from "react";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import ResultImage from "../../atoms/ResultImage";
import ViewListIcon from '@material-ui/icons/ViewList';

const SelectOutcome = () => {
  const theme = useTheme();
  const [outcomes] = useGlobalState('filteredOutcomes');
  const [selected, setSelected] = useGlobalState('selectedOutcome');
  const isSelected = selected.length > 0;

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
      // TODO create "back to list" button instead of "clear"
      isSelected && outcomes.length > 1 && <>
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
                startIcon={<ViewListIcon />}>{outcomes.length}</Button>
          </Box>
          <Box flex={"1 0 90%"}>
            <Select
                style={{marginLeft: "0.2rem", background: theme.palette.secondary.main}}
                native
                value={selected}
                onChange={handleChange}>
              {
                outcomes.map(it => <option key={it.id} value={it.id}>
                  {it.result.toLowerCase()}: {it.id}
                </option>)
              }
            </Select>
          </Box>
        </Box>
      </FormControl>
    </>}
    {!isSelected && <FullWidthWrappingFlexBox>
      {
        outcomes.map(it => <React.Fragment key={it.id}>
          <FullWidthWrappingFlexBox>
            <Button fullWidth variant={"outlined"} color={"secondary"} style={{
              textTransform: "none",
              justifyContent: "start",
              textAlign: "left",
              color: theme.palette.text.primary,
              margin: "0.2rem"
            }}
                    onClick={() => setSelected(it.id)}
            >
              <Box display={"flex"} width={"100%"}>
                <Box style={{marginRight: "0.2rem"}}>
                  <ResultImage result={it.result}/>
                </Box>
                <Box>
                  {it.id}
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