import React from 'react';
import './App.css';
import MyPaper from "./MyPaper";
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import useGlobalState from "./state";

const Controls = () => {

  const outcomes = window.outcomes;
  const [detail, setDetail] = useGlobalState('detail');


  return <><Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><Button variant="contained" color="primary" disableElevation href="#anchor">test anchorlink</Button><br/>
        <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=high">test param
          link</Button><br/>
        <Link to="#anchor">router anchor test</Link> (does not jump to anchor)<br/>
        <Link to="?id=4&id=5&detail=high">router query test</Link> (does update location and causes rerender 👍)<br/>
      </p>
      <p>to test local storage and rerender, current value {detail}:</p>
      <p><Button variant="contained" color="secondary" disableElevation
                 onClick={() => setDetail((detail - 1))}>-detail</Button><Button variant="contained" disableElevation
                 onClick={() => setDetail(1)}>reset</Button><Button variant="contained" color="primary" disableElevation
                 onClick={() => setDetail((detail + 1))}>+detail</Button></p>
    </Paper></>
  }
;

export default Controls;
