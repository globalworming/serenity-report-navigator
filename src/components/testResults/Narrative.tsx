import React from "react";
import MyPaper from "../atoms/MyPaper";
import useGlobalState from "../../state";
import ResultImage from "../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";


interface MyProps {
  tell: string
}

const Narrative = ({tell}: MyProps) => {

  const [outcomes] = useGlobalState("filteredOutcomes");

  if (!tell) return null;

  function renderExample(exampleLine: string) {
    const outcomeTitle = exampleLine.split("} ")[1];
    return <>
      <MyPaper>
        <strong>{outcomeTitle}</strong>
        {
          outcomes
            .filter(outcome => outcome.title.toLowerCase().includes(outcomeTitle.toLowerCase()))
            .filter(outcome => outcome.testSteps[0].description.startsWith("Example"))
            .map(outcome => outcome.dataTable)
            .map((data, i) => <React.Fragment key={i}>
              <MyPaper>
                <FullWidthWrappingFlexBox>{data.scenarioOutline}</FullWidthWrappingFlexBox>
                <FullWidthWrappingFlexBox>
                  <Box flex={"1 0 10%"}/>
                  {
                    data.headers.map((header, j) => <Box key={`${i} ${j}`}
                                                            flex={`1 0 ${90 / data.headers.length}%`}><strong>{header}</strong></Box>)
                  }
                </FullWidthWrappingFlexBox>
                <FullWidthWrappingFlexBox>

                  {
                    data.rows.map((row, j) => <React.Fragment key={`${i} ${j}`}>
                      <Box flex={"1 0 10%"}><ResultImage result={row.result}/></Box>
                      {
                        row.values.map((value, k) => <Box key={`${i} ${j} ${k}`}
                                                          flex={`1 0 ${90 / row.values.length}%`}>{value}</Box>)
                      }
                    </React.Fragment>)
                  }
                </FullWidthWrappingFlexBox>
              </MyPaper>
            </React.Fragment>)
        }
      </MyPaper>
    </>;
  }

// see serenity-core/serenity-model/src/main/java/net/thucydides/core/requirements/model/cucumber/DescriptionWithScenarioReferences.java
  const lines: Array<any> = tell.split("\n").filter(it => it !== "").map((it, i) => it.includes("{Example") ? <React.Fragment key={i}>{renderExample(it)}</React.Fragment> : it);
  return <MyPaper>{lines.map((it, i) => <div style={{margin: "0.5rem"}} key={i}>{it}</div>)}</MyPaper>
};

export default Narrative

