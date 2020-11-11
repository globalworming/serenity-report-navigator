import UserStory from "./UserStory";
import Tag from "./Tag";
import TestStep from "./TestStep";
import Result from "./Result";
import DataTable from "./DataTable";
import Actor from "./Actor";

interface TestOutcome {
  actors: Array<Actor>
  dataTable: DataTable
  description: string
  duration: number
  failures: string
  id: string
  issues: Array<string>
  ignored: string
  name: string
  pending: string
  result: Result
  successful: string
  skipped: string
  startTime: string | number
  scenarioOutline: string
  tags: Array<Tag>
  testSource: string
  testSteps: Array<TestStep>
  title: string
  userStory: UserStory
}

export default TestOutcome