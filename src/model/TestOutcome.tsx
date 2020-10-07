import UserStory from "./UserStory";
import Tag from "./Tag";
import TestStep from "./TestStep";
import TestFailureCause from "./TestFailureCause";
import Result from "./Result";
import DataTable from "./DataTable";

interface TestOutcome {
  dataTable: DataTable
  duration: number
  failures: string
  id: string
  issues: Array<string>
  ignored: string
  name: string
  pending: string
  result: Result
  steps: string
  successful: string
  skipped: string
  startTime: Date
  scenarioOutline: string
  tags: Array<Tag>
  testFailureCause: TestFailureCause
  testSource: string
  testSteps: Array<TestStep>
  title: string
  userStory: UserStory
}

export default TestOutcome

export const hasTagOfType = (type: string, outcome: TestOutcome) =>
  outcome.tags.map(tag => tag.type).includes(type);
