import React from "react";
import useGlobalState from "../../state";
import _ from "lodash";
import {joined} from "../../model/Tag";
import MyPaper from "../atoms/MyPaper";
import Expandable from "../organisms/Expandable";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import {hasTagOfType} from "../../model/TestOutcome";
import {colorFor} from "../App";
import Tags from "./Tags";


const ByTag = () => {

  const [outcomes] = useGlobalState('filteredOutcomes');
  const tags = _.uniqBy(outcomes.map(it => it.tags).flat(), (it) => joined(it));
  const tagsByType = _.groupBy(tags, it => it.type);

  const typeHeading = (type: string) =>
    <RowWithResultAggregate
      tellAll={outcomes.filter(it => hasTagOfType(type, it))
        .map(it => it.result)}>
      <span style={{textTransform: "uppercase", padding: "0.25rem", borderRadius: "10px", border: `2px solid ${colorFor(type)}`, background: colorFor(type, "99")}}>{type}</span>
    </RowWithResultAggregate>;

  return <>
      {_.keys(tagsByType).map(type => <React.Fragment key={type}>
        <MyPaper>
          <Expandable depths={1} whatsHidden={<>
            <Tags tellAll={tagsByType[type]}/>
          </>}>
            {typeHeading(type)}
          </Expandable>
        </MyPaper>
      </React.Fragment>)}
  </>
};

// <RowWithResultAggregate tellAll={outcomes.filter(outcome => outcome.tags.map(tag => tag.type).includes(type) )}/>

export default ByTag