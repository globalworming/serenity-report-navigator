import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import FullWidthWrappingFlexBox from "./components/molecules/FullWidthWrappingFlexBox";
import Emoji from "./components/atoms/Emoji";
import ResultImage from "./components/atoms/ResultImage";
import Result from "./model/Result";
//import {Profiler, ProfilerOnRenderCallback} from 'react';

/*
const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions})

};
*/

const spanStyle = {padding: "0.2rem"};

ReactDOM.render(
  <React.StrictMode>
    <a style={{position: "absolute", right: 0, top: "0.5rem"}} className="externalLink" href="https://github.com/globalworming/serenity-report-navigator/stargazers"><img
      src="https://x.h7e.eu/badges/xz/q/github/starGazers/gh-stargazers/globalworming/serenity-report-navigator" alt="GitHub Stars" /></a>
    <FullWidthWrappingFlexBox  style={{background: "#3f51b5", color: "white"}}>
      <FullWidthWrappingFlexBox>
        <h1 style={{padding: "0.5rem", display: "inline"}}>Serenity Report Navigator</h1>
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{marginLeft: "0.5rem", lineHeight:"2"}}>
        <span style={spanStyle}>
          <Emoji label={"stories"}/> concise reporting of features</span>
        <span style={spanStyle}>
          <ResultImage result={Result.Failure}/> in-depth steps and traces
        </span>
        <span style={spanStyle}>
          <Emoji label={"bigscreen"}/> wallboard mode
        </span>
        <span style={spanStyle}>
          <Emoji label={"mobile"}/> mobile friendly
        </span>
        <span>
          <Emoji label={"one hundred"}/> customizable theme and view options
        </span>
      </FullWidthWrappingFlexBox>
    </FullWidthWrappingFlexBox>
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
