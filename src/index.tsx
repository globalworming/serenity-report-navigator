import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "@material-ui/core";
import useGlobalState from "./state";
import Themes from "./themes";
import * as _ from "lodash";

//import {Profiler, ProfilerOnRenderCallback} from 'react';

/*
const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions})

};
*/

const MyThemeProvider: FunctionComponent = ({children}) => {
  const [theme] = useGlobalState("theme");
  return <ThemeProvider theme={_.get(Themes, theme)}>
    {children}
  </ThemeProvider>

};

ReactDOM.render(
  <React.StrictMode>
    {/*<Profiler id="Navigation" onRender={onRender}>*/}
    <MyThemeProvider>
      <App/>
    </MyThemeProvider>
    {/*</Profiler>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
