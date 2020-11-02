/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Emoji from "./Emoji";
import Result from "../../model/Result";

interface ResultImageProps {
  result: string
}


const ResultImage = ({result}: ResultImageProps) =>  {

  switch (result) {
    case Result.PENDING: return <Emoji label={Result.PENDING}>➖</Emoji>;
    case Result.SUCCESS: return <Emoji label={Result.SUCCESS}>✔️</Emoji>;
    case Result.FAILURE: return <Emoji label={Result.FAILURE}>⚠️</Emoji>;
    case Result.IGNORED: return <Emoji label={Result.IGNORED}>💤</Emoji>;
    case Result.ERROR: return <Emoji label={Result.ERROR}>❌</Emoji>;
    case Result.SKIPPED: return <Emoji label={Result.SKIPPED}>⏭️</Emoji>;
    case Result.COMPROMISED: return <Emoji label={Result.COMPROMISED}>⁉️️</Emoji>
  }
  return <span>{result}</span>;
};

export default ResultImage