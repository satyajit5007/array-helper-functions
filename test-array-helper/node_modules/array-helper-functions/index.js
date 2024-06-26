// index.js
class ArrayHelper {
  static sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  static clearDuplicates(arr) {
    return [...new Set(arr)];
  }

  static average(arr) {
    return arr.length ? ArrayHelper.sum(arr) / arr.length : 0;
  }

  static max(arr) {
    return Math.max(...arr);
  }

  static min(arr) {
    return Math.min(...arr);
  }

  static unique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  }

  static flatten(arr) {
    return arr.reduce(
      (acc, val) =>
        acc.concat(Array.isArray(val) ? ArrayHelper.flatten(val) : val),
      []
    );
  }

  static chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  static removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }

  static intersect(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value));
  }
}

module.exports = ArrayHelper;
