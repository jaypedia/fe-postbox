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

const fetchData = async () => {
  const data = await fetch('/constants');
  return data.json();
};

export { getRandomNumber, getRandomBool, delay, fetchData };
