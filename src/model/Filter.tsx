const  excludeNone: Array<string> = [];
export const  includeAllText = "*";
export const  includeAllResults = ["*"];

class Filter {
  testResult: {
    exclude: Array<string>;
    include: Array<string>;
  }

  keyword: {
    include: string;
  }

  constructor() {
    this.testResult = {exclude: excludeNone, include: includeAllResults};
    this.keyword = {include: includeAllText};
  }
}

export default Filter