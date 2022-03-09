class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  // 이벤트리스너 부착
  addEvent() {}

  init() {
    // 모델이 데이터를 생성하도록 하는 로직
    // 모델이 생성한 데이터를 어떤 방식으로 알아채서 받아올지?
    // this.view.render(data); // 모델로부터 받은 데이터
  }
}

export { Controller };
