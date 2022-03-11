import { getRandomNumber, getRandomBool } from './util/utils.js';
import { COUNT, TOWN_NAME, PLACE_SELF } from './util/constants.js';

class Model {
  constructor() {
    this.townNameIdx = 0;
    this.townData = [];
    this.postboxTown = [];
    this.totalTownCount = 0;
    this.createTownData();
  }

  get eachTownData() {
    return {
      location: `${this.setLocation()} ${this.setLocation()}`,
      townName: '',
      children: [],
      postbox: getRandomBool(),
      postboxSize: Math.random(),
      nestedTownCount: 0,
    };
  }

  createEachTownData() {
    const nestedTownCount = getRandomNumber(COUNT.MIN_TOWN, COUNT.MAX_TOWN - 1);
    this.totalTownCount += nestedTownCount + 1;

    const outerTownData = this.eachTownData;
    outerTownData.townName = TOWN_NAME[this.townNameIdx++];
    if (outerTownData.postbox) {
      this.postboxTown.push([
        outerTownData.townName,
        outerTownData.postboxSize,
      ]);
    }
    outerTownData.nestedTownCount = nestedTownCount;
    outerTownData.size = this.setSize(outerTownData.nestedTownCount);
    let current = outerTownData;

    for (let i = 0; i < nestedTownCount; i++) {
      const child = this.eachTownData;
      child.townName = TOWN_NAME[this.townNameIdx++];
      if (child.postbox) {
        this.postboxTown.push([child.townName, child.postboxSize]);
      }
      child.nestedTownCount = nestedTownCount - i - 1;
      child.size = this.setSize(child.nestedTownCount);
      current.children.push(child);
      current = current.children[0];
    }

    return outerTownData;
  }

  createTownData() {
    while (COUNT.WRAP--) {
      this.townData = [...this.townData, this.createEachTownData()];
    }
  }

  setLocation() {
    return PLACE_SELF[getRandomNumber(0, PLACE_SELF.length - 1)];
  }

  setSize(nestedTownCount) {
    if (!nestedTownCount) {
      return { width: 0, height: 0 };
    }

    return {
      width: getRandomNumber(
        50 * nestedTownCount + 20,
        50 * (nestedTownCount + 1) - 20
      ),
      height: getRandomNumber(
        50 * nestedTownCount + 20,
        50 * (nestedTownCount + 1) - 20
      ),
    };
  }
}

export { Model };
