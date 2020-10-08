import React, {FunctionComponent, useEffect, useState} from "react";


interface DelayedProps {
  wait: number
}

const Delayed: FunctionComponent<DelayedProps> = ({wait, children}) =>{
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false)
    }, 1 + wait);
    return () => clearTimeout(timer);
  }, [hidden, setHidden, wait]);
  return hidden ? null : <>{children}</>;
};

export default Delayed
