import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import React from "react";
import MyPaper from "./MyPaper";
import useGlobalState from './state';
import _ from 'lodash';

const TestTimeline = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  if (outcomes.length === 0) return null;

  const earliestDate = outcomes.map(it => moment(it.timestamp).unix()).sort()[0];
  const latestDate = outcomes.map(it => moment(it.timestamp).add(it.duration, 'milliseconds').unix()).sort().reverse()[0]
  ;

  //const groups = _.uniq(outcomes.map(it => it["user-story"].storyName)).map((it, i) => ({id: i, title: it}))
  const groups = [{id:0, title: "tests"}];
  const items = outcomes.map((it, i) => ({
    //group: groups.map(it => it.title).indexOf(it["user-story"].storyName),
    group: groups[0].id,
    id: i,
    title: it.name,
    start_time: moment(it.timestamp),
    end_time: moment(it.timestamp).add(it.duration, 'milliseconds'),
    canMove: false,
    canChangeGroup: false,
    canResize: false,
    stackItems: true

  }))

  console.log({earliestDate: items[0].start_time, latestDate: items[0].end_time},{groups, items});
  return <MyPaper>
    <span>{new Date(earliestDate).toString()}</span>
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment.unix(earliestDate)}
      defaultTimeEnd={moment.unix(latestDate)}
      visibleTimeStart={moment.unix(earliestDate)}
      visibleTimeEnd={moment.unix(latestDate)}
      stackItems={true}
      maxZoom={latestDate - earliestDate}
    />
  </MyPaper>;

};

export default TestTimeline