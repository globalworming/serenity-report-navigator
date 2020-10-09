import React from 'react';
import MyPaper from "../atoms/MyPaper";
import useGlobalState from '../../state';
import * as _ from "lodash";
import Tag, {joined} from "../../model/Tag";
import Expandable from "../organisms/Expandable";
import Outcome from "./outcome/Outcome";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import TestOutcome from "../../model/TestOutcome";
import ByStory from "./ByStory";
import Emoji from "../atoms/Emoji";

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState('filteredOutcomes');

  const tags = _.uniqBy(outcomes.map(it => it.tags).flat(), (it) => joined(it));
//  const hasOutcomes = (type: string) =>  _.find(outcomes, it => it.tags.map(it => it.type).includes(type)) != null;
  const types = _.uniq(tags.map(it => it.type));//.filter(hasOutcomes);
  const hasTag = (tag: Tag, outcome: TestOutcome) => outcome.tags.map(outcomeTag => joined(outcomeTag)).includes(joined(tag));

  return <>

    {view === "story" && <ByStory/>}

    {view !== "story" &&
    types.filter(type => type === view).map(type =>
      tags.filter(it => it.type === type).map(tag => {
        const outcomesForTag = outcomes.filter(outcome => hasTag(tag, outcome));
        if (outcomesForTag.length === 0) return null;
        return <React.Fragment key={joined(tag)}>
          <MyPaper>
            <Expandable depths={1}
                        whatsHidden={outcomesForTag.map((outcome) => <Outcome key={outcome.name + outcome.startTime}
                                                                              tell={outcome}/>)}>
              <RowWithResultAggregate tellAll={outcomesForTag.map(it => it.result)}>
                <Emoji label={type}/>&nbsp;{tag.displayName ? tag.displayName : tag.name}
              </RowWithResultAggregate>
            </Expandable>

          </MyPaper>
        </React.Fragment>;
      })
    )
    }

  </>
};

export default ExploreData
