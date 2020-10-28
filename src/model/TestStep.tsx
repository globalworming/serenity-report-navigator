import RestQuery from "./RestQuery"
import Exception from "./Exception"

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
  exception: Exception
}

export default TestStep

export const flatSteps = (testSteps: Array<TestStep>) => {
  let result: Array<TestStep> = [];
  if (!testSteps || testSteps.length === 0) return result;
  testSteps.forEach(testStep => {
    result.push(testStep);
    result.push(...flatSteps(testStep.children));
  });
  return result;
};