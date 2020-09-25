interface TestStep {
  description: string
  duration: number
  startTime: Date
  screenshots: Array<string>
  children: Array<TestStep>
}

export default TestStep