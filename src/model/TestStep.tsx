interface TestStep {
  number: number
  result: string
  description: string
  duration: number
  startTime: Date
  screenshots: Array<string>
  children: Array<TestStep>
}

export default TestStep