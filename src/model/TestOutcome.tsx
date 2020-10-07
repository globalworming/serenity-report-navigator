import UserStory from "./UserStory";
import Tag from "./Tag";
import TestStep from "./TestStep";
import TestFailureCause from "./TestFailureCause";
import Result from "./Result";
import DataTable from "./DataTable";

interface TestOutcome {
  id: string
  duration: number
  failures: string
  issues: Array<string>
  ignored: string
  name: string
  pending: string
  result: Result
  steps: string
  successful: string
  skipped: string
  tags: Array<Tag>
  testFailureCause: TestFailureCause
  testSource: string
  testSteps: Array<TestStep>
  title: string
  startTime: Date
  userStory: UserStory
  dataTable: DataTable
}

export default TestOutcome

export const hasTagOfType = (type: string, outcome: TestOutcome) =>
  outcome.tags.map(tag => tag.type).includes(type);
