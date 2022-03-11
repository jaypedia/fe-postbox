const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBool = () => {
  return !!Math.floor(Math.random() * 2);
};

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
};

export { getRandomNumber, getRandomBool, delay };
