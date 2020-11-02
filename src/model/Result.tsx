enum Result {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  IGNORED = "IGNORED",
  PENDING = "PENDING",
  ERROR = "ERROR",
  COMPROMISED = "COMPROMISED",
  SKIPPED = "SKIPPED"
}

export const colorOf = (result: string) => {
  if (!result) return "#000000";
  switch (result.toUpperCase()) {
    case Result.PENDING:
      return "#5b6973";
    case Result.SUCCESS:
      return "#5ada28";
    case Result.FAILURE:
      return "#d5d351";
    case Result.IGNORED:
      return "#a8a2bc";
    case Result.ERROR:
      return "#e7222a";
    case Result.COMPROMISED:
      return "#d645c4";
    case Result.SKIPPED:
      return "#688975"
  }
  return "#000000";
};


export default Result