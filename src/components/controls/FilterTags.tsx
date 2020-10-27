import React from "react";
import _ from "lodash";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Button} from "@material-ui/core";
import Tag from "../../model/Tag";
import ClearButton from "../molecules/ClearButton";
import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import Emoji from "../atoms/Emoji";


const FilterTags = () => {

  const [filter, setFilter] = useGlobalState("filter");
  const [, setDepths] = useGlobalState("expansionDepth");
  const [tagsByType] = useGlobalState("tagsByType");

  const types =  filter.focusType.length > 0 ? [filter.focusType] : _.keys(tagsByType);
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
        <Button fullWidth={true}
                style={{margin: "0.2rem", color: "#FFF", wordBreak: "break-word", background: filter.focusType === type ? "#DDDDDD30" : "#00000000"}}
                variant="outlined" color={"primary"}
                onClick={() => focusType(type)}

        >
          <Emoji label={type}/>&nbsp;{type}
        </Button>

        <FullWidthWrappingFlexBox style={{overflowY: "auto", maxHeight: filter.focusType === type ? "none" : "7rem", marginBottom: "1rem"}}>
          {tagsByType[type].map(it =>
            <Button key={it.name} fullWidth={true}
                    style={{
                      margin: "0.2rem", color: "#FFF", marginLeft: "1rem", wordBreak: "break-word",
                      background: filter.focusTag === it.name ? "#DDDDDD30" : "#00000000"
                    }}
                    variant="outlined" color={"primary"}
                    onClick={() => focusTag(it)}
            >
              &nbsp;{it.displayName ? it.displayName : it.name}
            </Button>
          )}
        </FullWidthWrappingFlexBox>
      </React.Fragment>)}
    </FullWidthWrappingFlexBox>
  </>
};

export default FilterTags