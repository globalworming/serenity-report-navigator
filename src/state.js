import {createGlobalState} from "react-hooks-global-state";
import Filter from "./model/Filter";
import View from "./model/View";
import _ from "lodash";
import {joined} from "./model/Tag";

const initialState = {
  filter: new Filter(),
  filteredOutcomes: window.outcomes,
  tagsByType: _.groupBy(_.uniqBy(window.outcomes.map(it => it.tags).flat(), (it) => joined(it)), it => it.type),
  hasParsedQuery: false,
  hasAppliedFilter: false,
  view: View.STATS,
  expansionDepth: 0,
  theme: "dark",
  showSideMenu: false,
  selectedOutcome: ""
};
const {useGlobalState} = createGlobalState(initialState);

export default useGlobalState
