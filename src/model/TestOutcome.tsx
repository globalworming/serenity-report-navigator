import UserStory from "./UserStory";
import Tag from "./Tag";
import TestStep from "./TestStep";

interface TestOutcome {
  title: string
  name: string
  result: string
  steps: string
  successful: string
  failures: string
  skipped: string
  ignored: string
  pending: string
  duration: string
  // start time
  timestamp: Date
  "user-story": UserStory
  issues: Array<string>
  tags: Array<Tag>
  testSteps: Array<TestStep>
}

export default TestOutcome