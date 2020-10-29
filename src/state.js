import {createGlobalState} from "react-hooks-global-state";
import Filter from "./model/Filter";
import View from "./model/View";
import _ from "lodash";
import {joined} from "./model/Tag";
import Themes from "./themes";

const initialState = {
  filter: new Filter(),
  filteredOutcomes: window.outcomes,
  tagsByType: _.groupBy(_.uniqBy(window.outcomes.map(it => it.tags).flat(), (it) => joined(it)), it => it.type),
  hasParsedQuery: false,
  hasAppliedFilter: false,
  view: View.STORY,
  expansionDepth: 0,
  theme: Themes.dark
};
const {useGlobalState} = createGlobalState(initialState);

export default useGlobalState
