import { DomApi } from './util/DomApi.js';

class View {
  constructor(townName) {
    this.townName = townName;
    this.domApi = new DomApi();
  }

  render({ townData, totalTownCount }) {
    const [town1, town2, town3, town4] = townData;
    this.createTowns('first', town1);
    this.createTowns('second', town2);
    this.createTowns('third', town3);
    this.createTowns('fourth', town4);
    this.displayTownCount(totalTownCount);
  }

  createTownElement(currentData) {
    const town = document.createElement('div');
    town.classList.add('town');
    if (currentData.postbox) town.classList.add('has-postbox');

    town.style.width = `${currentData.size.width}px`;
    town.style.height = `${currentData.size.height}px`;
    town.style.placeSelf = currentData.location;

    const postboxTag = `<span class="postbox">📭</span>`;
    const townName = document.createElement('h3');
    townName.classList.add('town-name');
    townName.innerHTML = `${currentData.townName}${
      currentData.postbox ? postboxTag : ''
    }`;

    town.append(townName);

    return town;
  }

  createTowns(className, townData) {
    let current = townData;

    const towns = this.createTownElement(current);
    let outerTown = towns;
    while (current.children.length) {
      const childTown = this.createTownElement(current.children[0]);
      outerTown.append(childTown);

      outerTown = childTown;
      current = current.children[0];
    }
    this.domApi.getElementByclassName(className).append(towns);
  }

  displayTownCount(totalTownCount) {
    const result = this.townName.slice(0, totalTownCount).split('').join(', ');
    this.domApi.getElementByclassName(
      'total-count'
    ).textContent = `${result} 총 ${totalTownCount}개의 마을입니다.`;
  }

  displayPostboxTownCount(postboxTown) {
    const result = postboxTown
      .reduce((acc, cur) => (acc += `${cur[0]}, `), '')
      .slice(0, -2);
    this.domApi.getElementByclassName(
      'postbox-count'
    ).textContent = `우체통이 있는 마을은 ${result} 총 ${postboxTown.length}개입니다.`;
  }

  displayPostboxSize(postboxTown) {
    const copiedPostboxTown = [...postboxTown];
    copiedPostboxTown.sort((a, b) => b[1] - a[1]);
    const result = copiedPostboxTown
      .reduce((acc, cur) => (acc += `${cur[0]}, `), '')
      .slice(0, -2);
    this.domApi.getElementByclassName(
      'postbox-size'
    ).textContent = `우체통 크기는 ${result} 순입니다.`;
  }
}

export { View };
