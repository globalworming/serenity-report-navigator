import React from "react";
import _ from "lodash";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
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
  const outcomes = window.outcomes;
  const [filtered] = useGlobalState("filteredOutcomes");


  const types = filter.focusType.length > 0 ? [filter.focusType] : _.keys(tagsByType);
  const canBeCleared = filter.focusType !== "" || filter.focusTag !== "";
  const tags = outcomes.map(it => it.tags).flat();
  const typeCounts = _.countBy(tags, it => it.type);
  const tagCounts = _.countBy(tags, it => it.type + it.name);

  const filteredTags = filtered.map(it => it.tags).flat();
  const filteredTypeCounts = _.countBy(filteredTags, it => it.type);
  const filteredTagCounts = _.countBy(filtered.map(it => it.tags).flat(), it => it.type + it.name);

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
      {_.sortBy(types, it => typeCounts[it] || 0).reverse().map(type => <React.Fragment key={type}>
        <CheckboxButton fullWidth checked={filter.focusType === type} onClick={() => focusType(type)}>
          <span><Emoji label={type}/>&nbsp;{type}{typeCounts[type] > 0 && <span style={{fontSize: "0.8rem"}}> {filteredTypeCounts[type] || "-"}/{typeCounts[type]}</span>}</span>
        </CheckboxButton>

        <FullWidthWrappingFlexBox
          style={{overflowY: "auto", maxHeight: filter.focusType === type ? "none" : "7rem", marginBottom: "1rem"}}>
          {_.sortBy(tagsByType[type], it => tagCounts[type + it.name] || 0).reverse().map(it => <React.Fragment key={it.name}>
              <Box flex={"1 1 90%"} marginLeft={"1rem"} marginRight={"1rem"}>
                <CheckboxButton fullWidth checked={filter.focusTag === it.name} onClick={() => focusTag(it)}>
                  <span>{it.displayName ? it.displayName : it.name}{tagCounts[type + it.name] > 0 && <span style={{fontSize: "0.8rem"}}> {filteredTagCounts[type + it.name] || "-"}/{tagCounts[type + it.name]}</span>}</span>
                </CheckboxButton>
              </Box>
            </React.Fragment>
          )}
        </FullWidthWrappingFlexBox>
      </React.Fragment>)}
    </FullWidthWrappingFlexBox>
  </>
};

export default FilterTags