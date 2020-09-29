import {createGlobalState} from "react-hooks-global-state";
import Filter from "./model/Filter";
import View from "./model/View";

const initialState = {
  detail: 0,
  filter: new Filter(),
  filteredOutcomes: window.outcomes,
  init: false,
  view: new View()
};
const {useGlobalState} = createGlobalState(initialState);

export default useGlobalState
