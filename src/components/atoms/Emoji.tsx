import React, {FunctionComponent} from "react";

interface MyProps {
  label: string
}

const emoji = (label: string) => {
  switch (label.toLowerCase()) {
    case "feature":
      return "📘";
    case "tag":
      return "🏷️";
    case "label":
      return "🔖";
    case "release":
      return "📦";
    case "version":
      return "📦";
    case "story":
      return "📖";
    case "big screen":
      return "🖥️";
    case "screenshots":
      return "🖼️";
    case "mobile":
      return "📱";
    case "one hundred":
      return "💯";
    case "stats":
      return "📊";
    case "outcome":
      return "📑";
    case "night":
      return "🌙";
    case "day":
      return "☀️";
    case "http":
      return "📡↔️🛰️️";

  }
  return "📚";
};


const Emoji: FunctionComponent<MyProps> = ({label, children}) => {
  return <span role="img" aria-label={label}>{children ? children : emoji(label)}</span>
};

export default Emoji