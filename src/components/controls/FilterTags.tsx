import React from "react";
import _ from "lodash";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box, Button} from "@material-ui/core";
import Tag from "../../model/Tag";
import ClearButton from "../molecules/ClearButton";
import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import Emoji from "../atoms/Emoji";
import CheckboxButton from "../atoms/CheckboxButton";


const FilterTags = () => {

  const [filter, setFilter] = useGlobalState("filter");
  const [, setDepths] = useGlobalState("expansionDepth");
  const [tagsByType] = useGlobalState("tagsByType");

  const types = filter.focusType.length > 0 ? [filter.focusType] : _.keys(tagsByType);
  const canBeCleared = filter.focusType !== "" || filter.focusTag !== "";

  const clear = () => {
    setDepths(0);
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.focusTag = "";
    newFilter.focusType = "";
    setFilter(newFilter)
  };

  function focusType(type: string) {
    setDepths(0);
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.focusTag = "";
    newFilter.focusType = type;
    setFilter(newFilter)
  }

  function focusTag(tag: Tag) {
    setDepths(0);
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.focusTag = tag.name;
    newFilter.focusType = tag.type;
    setFilter(newFilter)
  }


  return <>
    <ClearButton disabled={!canBeCleared} onClick={clear}/>
    <FullWidthWrappingFlexBox>
      {types.filter(it => it !== "feature").map(type => <React.Fragment key={type}>
        <CheckboxButton fullWidth checked={filter.focusType === type} onClick={() => focusType(type)}>
          <Emoji label={type}/>&nbsp;{type}
        </CheckboxButton>

        <FullWidthWrappingFlexBox
          style={{overflowY: "auto", maxHeight: filter.focusType === type ? "none" : "7rem", marginBottom: "1rem"}}>
          {tagsByType[type].map(it => <Box width={"100%"} marginLeft={"1rem"} marginRight={"1rem"} key={it.name}>
              <CheckboxButton fullWidth checked={filter.focusTag === it.name} onClick={() => focusTag(it)}>
                {it.displayName ? it.displayName : it.name}
              </CheckboxButton>
            </Box>
          )}
        </FullWidthWrappingFlexBox>
      </React.Fragment>)}
    </FullWidthWrappingFlexBox>
  </>
};

export default FilterTags