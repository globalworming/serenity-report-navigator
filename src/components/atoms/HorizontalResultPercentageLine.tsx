import React from "react";
import {Box} from "@material-ui/core";
import {colorOf} from "../../model/Result";
import * as _ from "lodash";

interface MyProps {
  tellAll: Array<string>
}


const HorizontalResultPercentageLine = ({tellAll}: MyProps) => {
  const counts = _.toPairs(_.countBy(tellAll));

  return <Box height={"0.2rem"} display={"flex"} overflow={"hidden"} width={"99%"} margin={"0 auto"}>
    {
      counts.map(([result, count]) => <React.Fragment key={result}>
          <Box style={{borderRadius: "10px"}} height={"100%"} width={count * 100 / tellAll.length + "%"} bgcolor={colorOf(result)}/>
        </React.Fragment>
      )
    }
  </Box>
};

export default HorizontalResultPercentageLine