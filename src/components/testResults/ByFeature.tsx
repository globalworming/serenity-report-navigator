import React from "react";
import _ from 'lodash';
import useGlobalState from '../../state';
import Feature from "./Feature";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";


const ByFeature = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');
  const outcomesWithFeatureTags = outcomes.filter(it => it.tags.map(tag => tag.type).includes("feature"));
  const allFeatures = _.uniqBy(outcomes.map(outcome => outcome.tags).flat().filter(it => it.type === "feature"), it => it.name);

  return <>
    <FullWidthWrappingFlexBox>
    {allFeatures.map((tag) => {
      return <React.Fragment key={tag.name}>
          <Feature tell={tag} tellAll={outcomesWithFeatureTags.filter(outcome => outcome.tags.map(outcomeTag => outcomeTag.name).includes(tag.name))}/>
      </React.Fragment>;
    })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByFeature