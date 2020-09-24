import React, {useEffect, useState} from 'react';

interface TestOutcome {
  name: string
}

const ExploreData = () => {

  const [outcomes, setOutcomes] = useState<Array<TestOutcome>>([]);

  useEffect(() => {
    fetch('outcomes/full-json/index.json')
      .then(data => data.json())
      .then(files => {
        Promise.all(files.map((it: RequestInfo) => fetch('outcomes/full-json/' + it)))
          .then((results: Array<any>) => Promise.all(results.map((it) => it.json())))
          .then((results) => setOutcomes(results))
      })

  }, [setOutcomes]);

  if (outcomes.length === 0) {
    return <></>;
  }

  return <>
    <p>explore</p>
    <pre>
      {JSON.stringify(outcomes, null, 2)}
    </pre>
  </>
}

export default ExploreData
