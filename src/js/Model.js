import { getRandomNumber, getRandomBool } from './util/utils.js';

class Model {
  constructor(constants) {
    this.count = constants.COUNT;
    this.townName = constants.TOWN_NAME;
    this.placeSelf = constants.PLACE_SELF;
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
    const nestedTownCount = getRandomNumber(
      this.count.MIN_TOWN,
      this.count.MAX_TOWN - 1
    );
    this.totalTownCount += nestedTownCount + 1;

    const outerTownData = this.eachTownData;
    outerTownData.townName = this.townName[this.townNameIdx++];
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
      child.townName = this.townName[this.townNameIdx++];
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
    while (this.count.WRAP--) {
      this.townData = [...this.townData, this.createEachTownData()];
    }
  }

  setLocation() {
    return this.placeSelf[getRandomNumber(0, this.placeSelf.length - 1)];
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
