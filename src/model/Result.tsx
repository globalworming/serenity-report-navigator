enum Result {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Ignored = "IGNORED",
  Pending = "PENDING",
  Error = "ERROR",
  Compromised = "COMPROMISED",
  Skipped = "SKIPPED"
}

export const colorOf = (result: string) => {
  switch (result) {
    case Result.Pending:
      return "#5b6973";
    case Result.Success:
      return "#5ada28";
    case Result.Failure:
      return "#d5d351";
    case Result.Ignored:
      return "#a8a2bc";
    case Result.Error:
      return "#89362d";
    case Result.Compromised:
      return "#d645c4";
    case Result.Skipped:
      return "#688975"
  }
  return "#000000";
};


export default Result