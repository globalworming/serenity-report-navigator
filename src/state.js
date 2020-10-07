import {createGlobalState} from "react-hooks-global-state";
import Filter from "./model/Filter";
import View from "./model/View";

const initialState = {
  filter: new Filter(),
  filteredOutcomes: window.outcomes,
  hasParsedQuery: false,
  hasAppliedFilter: false,
  view: new View()
};
const {useGlobalState} = createGlobalState(initialState);

export default useGlobalState
