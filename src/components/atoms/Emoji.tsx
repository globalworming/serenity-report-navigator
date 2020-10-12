import {FunctionComponent} from "react";
import React from "react";

interface MyProps {
  label: string
}

const emoji = (label: string) => {
  switch (label) {
    case "feature":
      return "📘";
    case "tag":
      return "🏷️";
    case "label":
      return "🔖";
    case "release":
      return "📦";
    case "story":
      return "📖";
    case "bigscreen":
      return "🖥️";
    case "mobile":
      return "📱";
    case "one hundred":
      return "💯";

  }
  return "📚";
};


const Emoji: FunctionComponent<MyProps> = ({label, children}) => {
  return <span role="img" aria-label={label}>{children ? children : emoji(label)}</span>
};

export default Emoji