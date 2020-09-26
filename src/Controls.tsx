import React from 'react';
import './App.css';
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import useGlobalState from "./state";

const Controls = () => {

    const [detail, setDetail] = useGlobalState('detail');


    return <><Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><strong>controls</strong></p>
      <p>
        <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=high">test param
          link</Button><br/>
        <Link to="?id=4&id=5&detail=0">router query test</Link><br/>(does update location and causes rerender 👍)
      </p>
      <p>to test local storage and rerender, current value {detail}:</p>
      <p>
        <Button variant="contained" color="secondary" disableElevation
                onClick={() => setDetail((detail - 1))}>-detail</Button>
        <Button variant="contained" disableElevation
                onClick={() => setDetail(1)}>reset</Button>
        <Button
          variant="contained" color="primary" disableElevation
          onClick={() => setDetail((detail + 1))}>+detail</Button>
      </p>
    </Paper></>
  }
;

export default Controls;
