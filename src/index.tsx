import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
//import {Profiler, ProfilerOnRenderCallback} from 'react';

/*
const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions})

};
*/

ReactDOM.render(
  <React.StrictMode>
    <div>

    </div>
    <h1>serenity report navigator <a href="https://github.com/globalworming/serenity-report-navigator">GitHub</a></h1>
    <p>concise reporting to stakeholders - in-depth steps and traces - wallboard mode - mobile friendly</p>
    <p>no server needed, should still work simply opening the index.html</p>
    {/*<Profiler id="Navigation" onRender={onRender}>*/}
      <App/>
    {/*</Profiler>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
