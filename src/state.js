import {createGlobalState} from "react-hooks-global-state";

const initialState = {detail: -1};
const {useGlobalState} = createGlobalState(initialState);

export default useGlobalState
