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
      setTimeout(this.handler.bind(this), 2000);
    });
  }

  handler() {
    this.domApi.getAllElementsByClassName('has-postbox').forEach((el) => {
      el.classList.add('highlight');
      this.model.displayPostboxTownCount();
      this.model.displayPostboxSize();
    });
  }

  init() {
    this.addEvent();
    // 모델이 데이터를 생성하도록 하는 로직

    // 모델이 생성한 데이터를 어떤 방식으로 알아채서 받아올지?

    //this.view.render(data); // 모델로부터 받은 데이터
  }
}

export { Controller };
