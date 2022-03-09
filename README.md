# Pair Programming: 빨간 우체통 마을 찾기

##### March 7~11, 2022

---

## Mission 1

### 1. Design

![image](https://user-images.githubusercontent.com/85419343/157358980-434f5328-9e57-4149-a976-102227cef979.png)

#### Model

- 지도에 필요한 모든 데이터들을 보관하고 있는 클래스
  - 마을의 위치, 크기, 개수
  - 우체통의 크기, 개수

#### View

- 데이터를 받아와 화면에 표시하는 클래스

#### Controller

- 처음 로딩되었거나 Click 이벤트가 발생했을 때 그것을 받아서 처리하는 클래스
- Model과 View 클래스를 중계
  - Model을 수정
  - View를 업데이트
- 버튼에 EventListener를 부착

### 2. Wireframing

![image](https://user-images.githubusercontent.com/85419343/157357253-7b2516cc-bf0f-41d3-8c00-6ac4c4e7598f.png)

- 와이어프레이밍을 하면서 구조를 잡으며 클래스 이름도 함께 논의하면서 정했더니, 실제 마크업 하는 시간이 굉장히 단축되었습니다.
- Semantic markup을 적용했습니다.
- container와 main을 CSS Grid를 활용하였습니다.

### 3. DOM API

```js
class DomApi {
  constructor() {
    this.nodes = [];
  }
  traverse(node) {} // 노드를 순환하는 helper function
  getElementById(nodeId) {}
  getAllElementsByClassName(className) {}
  getElementByclassName(className) {}
}
```

- `node.children`을 재귀적으로 순환하여 id 혹은 className에 해당하는 요소를 찾을 수 있도록 했습니다.

---

### Questions

#### 1. 인스턴스 프로퍼티에 대한 질문

```js
// Model.js
class Model {
  constructor() {
    // (1) 현재 방식
    this.wrapCount = COUNT.WRAP;
    this.maxTownCount = COUNT.MAX_TOWN;
    this.minTownCount = COUNT.MIN_TOWN;
    ...
  }

    // (2) 고민 중인 방식
    createOneTownData() {
    const nestedTownCount = getRandomNumber(
     COUNT.MIN_TOWN, COUNT.MAX_TOWN);
    ...

// index.js
const init = () => {
  const model = new Model(); // (3) COUNT들을 인자로 넘겨주기?
  const view = new View();
  new Controller(model, view);
};
```

- (1) Model 인스턴스가 각 COUNT를 property로 가지고 있는 게 나을까요?
- (2) 아니면 그냥 import 해 온 상수를 this를 쓰지 않고 바로 쓰는 게 나을까요?
- (3) Model을 생성할 때 인자로 각 COUNT를 넘겨 주는 방식은 어떨까요?

#### 2. Model의 이름에 대한 질문

- MVC 패턴을 적용하므로 우선 Model이라는 이름으로 클래스를 만들었는데, 그것보다는 데이터를 좀 더 잘 나타낼 수 있는 Town 등의 이름으로 짓는 것이 더 나은 방법일까요?

---

### Reference

[Applying tree traversal algorithms to DOM](https://dev.to/anishkumar/applying-tree-traversal-algorithms-to-dom-14bl)
[Tree data structure in JavaScript](https://stackfull.dev/tree-data-structure-in-javascript)
[MVC pattern](https://m.blog.naver.com/jhc9639/220967034588)
