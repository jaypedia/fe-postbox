import { getRandomNumber } from './util/utils.js';
import {
  MAX_TOWN_COUNT,
  MIN_TOWN_COUNT,
  WRAP_COUNT,
} from './util/constants.js';

class Model {
  constructor() {
    this.wrapCount = WRAP_COUNT;
    this.maxTownCount = MAX_TOWN_COUNT;
    this.minTownCount = MIN_TOWN_COUNT;
    this.townNameIdx = 0;
    this.townData = {};
  }

  get nestedTownCount() {
    return getRandomNumber(this.minTownCount, this.maxTownCount);
  }

  createData() {
    this.townData = {
      location: { top: 10, left: 10 },
      size: { width: 30, heigth: 90 },
      nameIdx: 0,
      children: [],
    };
  }
}

export { Model };
