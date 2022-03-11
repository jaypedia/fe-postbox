import { Controller } from './Controller.js';
import { TownModel } from './TownModel.js';
import { View } from './View.js';
import { fetchData } from './util/utils.js';

const init = () => {
  fetchData().then(({ COUNT, TOWN_NAME, PLACE_SELF }) => {
    const model = new TownModel({ COUNT, TOWN_NAME, PLACE_SELF });
    const view = new View(TOWN_NAME);
    new Controller(model, view);
  });
};

init();
