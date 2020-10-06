/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Emoji from "./Emoji";
import Result from "../../model/Result";

interface ResultImageProps {
  result: string
}


const ResultImage = ({result}: ResultImageProps) =>  {

  switch (result) {
    case Result.Pending: return <Emoji label={Result.Pending}>➖</Emoji>;
    case Result.Success: return <Emoji label={Result.Success}>✔️</Emoji>;
    case Result.Failure: return <Emoji label={Result.Failure}>⚠️</Emoji>;
    case Result.Ignored: return <Emoji label={Result.Ignored}>💤</Emoji>;
    case Result.Error: return <Emoji label={Result.Error}>❌</Emoji>;
    case Result.Skipped: return <Emoji label={Result.Skipped}>⏭️</Emoji>
  }
  return <span>{result}</span>;
};

export default ResultImage