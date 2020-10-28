import StackTrace from "./StackTrace";

interface Exception {
  errorType: string
  message: string
  stackTrace: Array<StackTrace>
}

export default Exception