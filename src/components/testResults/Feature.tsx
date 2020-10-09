import Tag from "../../model/Tag";
import * as React from "react";
import Expandable from "../organisms/Expandable";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import TestOutcome from "../../model/TestOutcome";
import Outcome from "./outcome/Outcome";
import MyPaper from "../atoms/MyPaper";
import Emoji from "../atoms/Emoji";

interface MyProps {
  tell: Tag
  tellAll: Array<TestOutcome>
}

const Feature = ({tell, tellAll}: MyProps) => {

  return <>
    <MyPaper>
      <Expandable depths={1} whatsHidden={tellAll.map((it) => <Outcome key={it.name + it.startTime} tell={it}/>)}>
        <RowWithResultAggregate tellAll={tellAll.map(it => it.result)}>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Emoji label="feature">📘</Emoji>&nbsp;{tell.displayName ? tell.displayName : tell.name}
        </RowWithResultAggregate>
      </Expandable>
    </MyPaper>
  </>;
};

export default Feature