import Result from "./Result";

interface Row {
  values: Array<string>
  result: Result
}

interface DataTable {
  headers: Array<string>
  rows: Array<Row>
  scenarioOutline: string
}

export default DataTable;