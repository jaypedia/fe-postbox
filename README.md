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

---

### Reference

[Applying tree traversal algorithms to DOM](https://dev.to/anishkumar/applying-tree-traversal-algorithms-to-dom-14bl)
[Tree data structure in JavaScript](https://stackfull.dev/tree-data-structure-in-javascript)
[MVC pattern](https://m.blog.naver.com/jhc9639/220967034588)
