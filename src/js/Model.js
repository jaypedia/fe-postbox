import { getRandomNumber } from './util/utils.js';
import { COUNT, TOWN_NAME } from './util/constants.js';
import { DomApi } from './util/DomApi.js';

class Model {
  constructor() {
    this.wrapCount = COUNT.WRAP;
    this.maxTownCount = COUNT.MAX_TOWN;
    this.minTownCount = COUNT.MIN_TOWN;
    this.townNameIdx = 0;
    this.townDataArr = [];
    this.domApi = new DomApi();
    this.createTownDataArr();
    this.createTowns();
  }

  get townData() {
    return {
      location: this.setLocation(),
      size: this.setSize(),
      townName: '',
      children: [],
      postbox: true,
    };
  }

  createOneTownData() {
    const nestedTownCount = getRandomNumber(
      this.minTownCount,
      this.maxTownCount
    );

    let i = 0;
    const outerTownData = this.townData;
    outerTownData.townName = TOWN_NAME[this.townNameIdx++];
    let current = outerTownData;

    while (i < nestedTownCount) {
      const child = this.townData;
      child.townName = TOWN_NAME[this.townNameIdx++];
      current.children.push(child);
      current = current.children[0];
      i++;
    }

    return outerTownData;
  }

  createTownDataArr() {
    while (this.wrapCount--) {
      this.townDataArr.push(this.createOneTownData());
    }
    console.log(this.townDataArr);
  }

  setLocation() {
    return { top: getRandomNumber(0, 10), left: getRandomNumber(0, 10) };
  }

  setSize() {
    return { width: getRandomNumber(0, 10), height: getRandomNumber(0, 10) };
  }

  createTownElement(currentData) {
    const town = document.createElement('div');
    town.classList.add('town');
    town.style.marginTop = `${currentData.location.top}px`;
    town.style.marginLeft = `${currentData.location.left}px`;
    town.style.width = `${currentData.size.width}px`;
    town.style.height = `${currentData.size.height}px`;

    const postboxTag = `<span class="postbox">📭</span>`;
    const townName = document.createElement('h3');
    townName.classList.add('town-name');
    townName.innerHTML = `${currentData.townName}${
      currentData.postbox ? postboxTag : ''
    }`;

    town.append(townName);

    return town;
  }

  createTowns() {
    let current = this.townDataArr[0];
    const outerTown = this.createTownElement(this.townDataArr[0]);
    while (current.children.length) {
      let currentTown = this.createTownElement(current);
      if (current === this.townDataArr[0]) {
        currentTown = outerTown;
      }
      const childTown = this.createTownElement(current.children[0]);
      currentTown.append(childTown);
      //   붙여야돼
      current = current.children[0];
    }
    this.domApi.getElementByclassName('second').append(outerTown);
  }
}

export { Model };
