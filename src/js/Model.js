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
    this.createTowns('first', 0);
    this.createTowns('second', 1);
    this.createTowns('third', 2);
    this.createTowns('fourth', 3);
  }

  get townData() {
    return {
      location: this.setLocation(),
      townName: '',
      children: [],
      postbox: true,
      layer: 1,
      size: {
        width: getRandomNumber(400, 400),
        height: getRandomNumber(400, 400),
      },
    };
  }

  createOneTownData() {
    const nestedTownCount = getRandomNumber(
      this.minTownCount,
      this.maxTownCount
    );

    const outerTownData = this.townData;
    outerTownData.townName = TOWN_NAME[this.townNameIdx++];
    let current = outerTownData;

    for (let i = 0; i < nestedTownCount; i++) {
      const child = this.townData;
      child.townName = TOWN_NAME[this.townNameIdx++];
      child.layer = i + 1;
      child.size = this.setSize(child.layer);
      current.children.push(child);
      current = current.children[0];
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
    return { top: getRandomNumber(0, 30), left: getRandomNumber(0, 30) };
  }

  setSize(layer) {
    console.log(typeof layer);
    return {
      width: getRandomNumber(100, 400 / layer),
      height: getRandomNumber(100, 400 / layer),
    };
  }

  createTownElement(currentData) {
    const town = document.createElement('div');
    town.classList.add('town');
    town.style.paddingTop = `${currentData.location.top}px`;
    town.style.paddingLeft = `${currentData.location.left}px`;
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

  createTowns(className, number) {
    let current = this.townDataArr[number];

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
}

export { Model };
