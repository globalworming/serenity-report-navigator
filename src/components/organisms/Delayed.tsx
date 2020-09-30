import React, {FunctionComponent, useEffect, useState} from "react";
import Gif from "./delayed.gif"


interface DelayedProps {
  wait: number
}

const Delayed: FunctionComponent<DelayedProps> = ({wait, children}) =>{
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false)
    }, 10 + wait);
    return () => clearTimeout(timer);
  }, [hidden, setHidden, wait]);

  return hidden ? <img style={{display: "block", width: "2.5rem", height: "2.5rem"}} src={Gif} alt={"loading"} /> : <>{children}</>;
};

export default Delayed
