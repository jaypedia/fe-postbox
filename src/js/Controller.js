import { DomApi } from './util/DomApi.js';
import { delay } from './util/utils.js';
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
      this.view.displayPostboxTownCount(this.model.postboxTown);
      this.view.displayPostboxSize(this.model.postboxTown);
      delay(2000).then(this.highlightPostbox.bind(this));
    });
  }

  highlightPostbox() {
    this.domApi.getAllElementsByClassName('has-postbox').forEach((el) => {
      el.classList.add('highlight');
    });
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
