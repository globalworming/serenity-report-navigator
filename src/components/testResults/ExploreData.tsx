import React from 'react';
import MyPaper from "../atoms/MyPaper";
import CheckboxButton from "../atoms/CheckboxButton";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import useGlobalState from '../../state';
import LinkTo from "./outcome/LinkTo";
import * as _ from "lodash";
import Tag, {joined} from "../../model/Tag";
import Expandable from "../organisms/Expandable";
import Outcome from "./outcome/Outcome";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import TestOutcome from "../../model/TestOutcome";
import ByStory from "./ByStory";

const ExploreData = () => {
  const [view, setView] = useGlobalState("view");
  const [, setDepths] = useGlobalState("expansionDepth");
  const [outcomes] = useGlobalState('filteredOutcomes');

  const switchTo = (view: string) => {
    setDepths(0);
    setView(view)

  };

  const emoji = (label: string) => {
    switch (label) {
      case "feature": return "📘";
      case "tag": return "🏷️";
      case "label": return "🔖";
      case "release": return "📦";
      case "story": return "📖";

    }
    return "📚";
  };

  const switchToViewButton = (it: string) => <>
    <CheckboxButton checked={view === it} onClick={() => switchTo(it)}>{it}&nbsp;<span role="img" aria-label={it}>{emoji(it)}</span></CheckboxButton>
    <LinkTo view={it} depth={0}/>
  </>;

  const tags = _.uniqBy(outcomes.map(it => it.tags).flat(), (it) => joined(it));
//  const hasOutcomes = (type: string) =>  _.find(outcomes, it => it.tags.map(it => it.type).includes(type)) != null;
  const types = _.uniq(tags.map(it => it.type));//.filter(hasOutcomes);
  const hasTag = (tag: Tag, outcome: TestOutcome) => outcome.tags.map(outcomeTag => joined(outcomeTag)).includes(joined(tag));

  return <>
    <MyPaper>
      <FullWidthWrappingFlexBox>
        {
          [["story"], types].flat().map(it => <React.Fragment key={it}>
            {switchToViewButton(it)}
          </React.Fragment>)
        }

      </FullWidthWrappingFlexBox>
    </MyPaper>

    {view === "story" && <ByStory/>}

    { view !== "story" &&
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
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <span role="img" aria-label={type}>{emoji(type)}</span>&nbsp;{tag.displayName ? tag.displayName : tag.name}
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
