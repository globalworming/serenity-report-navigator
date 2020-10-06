import Tag, {joined} from "../../model/Tag";
import * as React from "react";
import Expandable from "../organisms/Expandable";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import useGlobalState from "../../state";
import TestOutcome from "../../model/TestOutcome";
import TagHeading from "./TagHeading";
import Outcome from "./Outcome";

interface MyProps {
  tellAll: Array<Tag>
}

const Tags = ({tellAll}: MyProps) => {

  const [outcomes] = useGlobalState('filteredOutcomes');
  const hasTag = (tag: Tag, outcome: TestOutcome) => outcome.tags.map(outcomeTag => joined(outcomeTag)).includes(joined(tag));

  return <>
    {tellAll.map(tag => {
      const outcomesForTag = outcomes.filter(it => hasTag(tag, it));
      return <React.Fragment key={joined(tag)}>
        <Expandable expandOnGlobalDetail={2} whatsHidden={outcomesForTag.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>)}>
          <RowWithResultAggregate tellAll={outcomesForTag.map(it => it.result)}>
            <TagHeading tell={tag}/>
          </RowWithResultAggregate>
        </Expandable>
      </React.Fragment>;
    })}

  </>;
};

export default Tags