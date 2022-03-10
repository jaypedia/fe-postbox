import { Controller } from './Controller.js';
import { Model } from './Model.js';
import { View } from './View.js';

const init = () => {
  const model = new Model();
  const view = new View();
  new Controller(model, view);
};

init();
