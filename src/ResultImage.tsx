import React from "react";

interface ResultImageProps {
  result: string
}


const ResultImage = ({result}: ResultImageProps) =>  {
  switch (result) {
    case "PENDING": return <span role="img" aria-label="pending">➖</span>
    case "SUCCESS": return <span role="img" aria-label="success">✔️</span>
    case "FAILURE": return <span role="img" aria-label="failure">⚠️</span>
    case "IGNORED": return <span role="img" aria-label="ignored">💤</span>
    case "ERROR": return <span role="img" aria-label="error">❌</span>
  }
  return null;
}
export default ResultImage