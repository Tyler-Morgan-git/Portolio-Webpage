const globalData = {};

const globalVar = {
  get(key) {
    return globalData[key];
  },
  set(key, data) {
    globalData[key] = data;
  },
};

export default globalVar;
