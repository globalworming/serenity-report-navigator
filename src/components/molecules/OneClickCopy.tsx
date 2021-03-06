import {Button} from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";
import * as React from "react";
import {useEffect, useState} from "react";


interface MyProps {
  text: string
}

const OneClickCopy = ({text}: MyProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, [copied, setCopied]);

  return <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
    <Button size={"small"} color={"secondary"} style={{margin: "0 0 0 auto"}} variant={"outlined"}>{copied ? "copied" : "copy"}</Button>
  </CopyToClipboard>
};

export default OneClickCopy