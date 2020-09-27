import {createGlobalState} from "react-hooks-global-state";
import Filter from "./model/Filter";

const initialState = {
  detail: 0,
  filter: new Filter(),
  filteredOutcomes: window.outcomes
};
const {useGlobalState} = createGlobalState(initialState);

export default useGlobalState
