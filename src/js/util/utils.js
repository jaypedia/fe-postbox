const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBool = () => {
  return !!Math.floor(Math.random() * 2);
};

export { getRandomNumber, getRandomBool };
