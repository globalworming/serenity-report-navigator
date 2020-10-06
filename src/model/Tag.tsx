import _ from "lodash";

interface Tag {
  name: string
  type: string
  displayName: string
}

export const joined = (it: Tag) => _.join([it.type, it.name, it.displayName]);



export default Tag