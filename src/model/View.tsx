export const defaultDetail = 4;

class View {
  showScreenshots: boolean;
  detail: number;

  constructor() {
    this.showScreenshots = false;
    this.detail = defaultDetail;
  }
}

export default View