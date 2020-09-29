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
    }, wait);
    return () => clearTimeout(timer);
  }, [hidden, setHidden, wait]);

  return hidden ? <img style={{width: "40px", height: "40px"}} src={Gif} alt={"loading"} /> : <>{children}</>;
};

export default Delayed
