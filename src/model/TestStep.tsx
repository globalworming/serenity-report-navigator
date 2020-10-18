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

export const flatSteps = (testSteps: Array<TestStep>) => {
  let result: Array<TestStep> = [];
  if (!testSteps || testSteps.length === 0) return result;
  testSteps.forEach(testStep => {
    result.push(testStep);
    result.push(...flatSteps(testStep.children));
  });
  return result;
};