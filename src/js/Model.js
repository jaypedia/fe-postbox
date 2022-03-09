import { getRandomNumber } from './util/utils.js';
import { COUNT, TOWN_NAME } from './util/constants.js';

class Model {
  constructor() {
    this.wrapCount = COUNT.WRAP;
    this.maxTownCount = COUNT.MAX_TOWN;
    this.minTownCount = COUNT.MIN_TOWN;
    this.townNameIdx = 0;
    this.townDataArr = [];

    this.createTownDataArr();
  }

  get townData() {
    return {
      location: this.setLocation(),
      size: this.setSize(),
      townName: '',
      children: [],
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
    return { width: getRandomNumber(0, 10), heigth: getRandomNumber(0, 10) };
  }
}

export { Model };
