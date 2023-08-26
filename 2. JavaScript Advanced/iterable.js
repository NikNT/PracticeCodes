const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step == 1) {
          return { value: "Hello", done: false };
        } else if (step == 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}

const objs = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;

        if (step == 1) {
          return {
            value: "Hello",
            done: false,
          };
        } else if (step == 2) {
          return {
            value: "World",
            done: false,
          };
        }

        return {
          value: undefined,
          done: true,
        };
      },
    };
    return iterator;
  },
};

const customIterable = {
  data: [4, 5, 6],

  [Symbol.iterator]: function () {
    let index = 0;
    const iterable = this;
    const iterator = {
      next: function () {
        if (index < iterable.data.length) {
          return {
            value: iterable.data[index++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
    return iterator;
  },
};

for (const item of customIterable) {
  console.log(item);
}
