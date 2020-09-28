const  excludeNone: Array<string> = [];
export const  includeAll = "*";

class Filter {
  testResult: {
    exclude: Array<string>;
  }

  keyword: {
    include: string;
  }

  constructor() {
    this.testResult = {exclude: excludeNone};
    this.keyword = {include: includeAll};
  }
}

export default Filter