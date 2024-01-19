const test = () => {};
const random = (min = 1, max = 0) => {
    let between = 99999;
    if (min < max) {
        between = max - min + 1;
    }

    return Math.floor(Math.random() * between) + min;
};

const NumberHelper = { test, random };

export default NumberHelper;
