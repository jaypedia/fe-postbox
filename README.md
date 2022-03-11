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

---

## Mission 2 & 3

![Animation](https://user-images.githubusercontent.com/85419343/157824641-194e97ff-7c1e-4255-b442-91d39ec452c1.gif)

### 1. MVC 패턴 구현

- MVC 패턴을 적용해 보았는데, 잘 구현한 방식인지 피드백을 주시면 감사하겠습니다.

### 2. 비동기 유틸 함수 추가

- Promise를 리턴하는 delay 함수
- 데이터를 fetch하는 fetchData 함수

### 3. Express 사용

- express 설치 및 이용하여 현재 프로그램 동작되도록 한 점
- 기존에 constants.js로 관리되던 데이터들을 서버로부터 json형태로 전송받아 사용하도록 한 점

### 4. 피드백 반영

- 기존 Model 파일명과 클래스명을 TownModel로 변경
- while문을 for문으로 변경
- DomApi에서 사용한 for..of문 안에 사용한 let 키워드를 const로 변경

### 아쉬운 점 & 개선할 점

1. sort 함수 미구현
2. TownModel의 `createEachTownData`함수에 중복이 많음
3. 매직 넘버 사용
4. 지도를 4분면으로 나눠서 구현한 점 (자체 이지모드)
5. 마을 안에 형제 마을이 존재할 수 없게 구현한 점

### 회고

![image](https://user-images.githubusercontent.com/85419343/157826206-c7e0597a-cfd7-4b75-b872-f5d38f7b1f85.png)

- 5일 간의 우리의 피땀눈물.(사실은 더 많았음😂)
- Figma라는 좋은 협업 툴을 활용하여 서로의 생각을 빠르게 공유할 수 있어서 좋았습니다.

#### BB

- 페어로 진행하다보니 집중하는 시간이 매우 늘었습니다. 평소에 혼자 진행할 때에 얼마나 쉬어가면서 했는지😂를 느낄 수 있었습니다.
  (대면으로 진행되었다면 더 의사소통 하는 데 편했을 것 같다. 코xx......)
- 혼자서 했다면 적용할 생각도 못했을 MVC패턴 적용도 경험해 볼 수 있어서 좋았습니다!

#### Millie

- 혼자서 생각할 수 없었던 것들을 구현하고 사고가 확장되는 경험을 했던 게 매우 좋았습니다. (예를 들어 마을을 배치하는 로직을 top, left를 조정해서 하는 것으로만 생각했었는데 BB가 flex의 justify-self와 align-self를 활용해서 하는 방안을 제시했을 때 등)
- 아침 시간을 활용해서 페어 프로그래밍을 해봤는데, 즐거운 경험이었습니다.
