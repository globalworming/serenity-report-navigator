export const defaultDetail = 0;

class View {
  showScreenshots: boolean;
  detail: number;

  constructor() {
    this.showScreenshots = false;
    this.detail = defaultDetail;
  }
}

export default View