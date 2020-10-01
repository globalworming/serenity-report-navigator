import UserStory from "./UserStory";
import Tag from "./Tag";
import TestStep from "./TestStep";
import TestFailureCause from "./TestFailureCause";

interface TestOutcome {
  duration: string
  failures: string
  issues: Array<string>
  ignored: string
  name: string
  pending: string
  result: string
  steps: string
  successful: string
  skipped: string
  tags: Array<Tag>
  testFailureCause: TestFailureCause
  testSteps: Array<TestStep>
  title: string
  startTime: Date
  userStory: UserStory
}

export default TestOutcome