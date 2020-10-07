import StackTrace from "./StackTrace"

interface TestFailureCause {
  message: string
  errorType: string
  stackTrace: Array<StackTrace>
  rootCause: TestFailureCause
}

export default TestFailureCause