import RestQuery from "./RestQuery"

export interface Screenshot {
  screenshot: string
}

interface TestStep {
  number: number
  result: string
  description: string
  duration: number
  startTime: Date
  screenshots: Array<Screenshot>
  children: Array<TestStep>
  restQuery: RestQuery
}

export default TestStep

