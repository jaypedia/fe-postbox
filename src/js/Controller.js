import { DomApi } from './util/DomApi.js';
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.domApi = new DomApi();
    this.init();
  }

  addEvent() {
    const postboxCheckBtn = this.domApi.getElementByclassName('check-postbox');
    postboxCheckBtn.addEventListener('click', () => {
      setTimeout(this.displayPostboxInfo.bind(this), 2000);
    });
  }

  displayPostboxInfo() {
    this.domApi.getAllElementsByClassName('has-postbox').forEach((el) => {
      el.classList.add('highlight');
    });
    this.view.displayPostboxTownCount(this.model.postboxTown);
    this.view.displayPostboxSize(this.model.postboxTown);
  }

  init() {
    this.addEvent();
    this.view.render({
      townData: this.model.townData,
      totalTownCount: this.model.totalTownCount,
    });
  }
}

export { Controller };
