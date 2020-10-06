import React from "react";
import _ from "lodash";
import MyPaper from "../atoms/MyPaper";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import CheckboxButton from "../atoms/CheckboxButton";
import {joined} from "../../model/Tag";



const FilterTags = () => {
  const outcomes = window.outcomes;
  const tags = _.uniqBy(outcomes.map(it => it.tags).flat(), (it) => joined(it));
  const byType = _.groupBy(tags, it => it.type);


  const toggleType = (type: string) => {
    console.log("todo", type)
  };

  const toggleTag = (type: string, it: string) => {
    console.log("todo", type, it)
  };

  return <>
    <MyPaper>
      <strong>filter tags</strong>
      <FullWidthWrappingFlexBox>
        {_.keys(byType).map(type => <React.Fragment key={type}>
          <Box flex={"1 0 20%"}>
            <CheckboxButton checked={true} onClick={() => toggleType(type)}>{type}</CheckboxButton>
            <ul style={{maxHeight: "10rem", overflowX: "auto"}}>
              {byType[type].map(it =>
                <CheckboxButton key={joined(it)} checked={true} onClick={() => toggleTag(type, it.name)}>{it.displayName ? it.displayName : it.name}</CheckboxButton>
              )}
            </ul>
          </Box>
        </React.Fragment>)}
      </FullWidthWrappingFlexBox>
    </MyPaper>
  </>
}

export default FilterTags