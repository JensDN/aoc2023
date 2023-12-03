import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split("\n");
  return lines.reduce((previousValue, currentValue) => getNumbersPart1(currentValue) + previousValue, 0);
};
function getNumbersPart1(string: string): number {
  let x = string.split('').find((s) => !isNaN(parseFloat(s)));
  let y = string.split('').reverse().find((s) => !isNaN(parseFloat(s)));
  return parseFloat(`${x}${y}`);
}
const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split("\n");
  return lines.reduce((previousValue, currentValue) => getNumbersPart2(currentValue) + previousValue, 0);
  return;
};
const numbersList = [
  {
    names: ['one', '1'],
    value: 1,
  },
  {
    names: ['two', '2'],
    value: 2,
  },
  {
    names: ['three', '3'],
    value: 3,
  },
  {
    names: ['four', '4'],
    value: 4,
  },
  {
    names: ['five', '5'],
    value: 5,
  },
  {
    names: ['six', '6'],
    value: 6,
  },
  {
    names: ['seven', '7'],
    value: 7,
  },
  {
    names: ['eight', '8'],
    value: 8,
  },
  {
    names: ['nine', '9'],
    value: 9,
  },
];

function getNumbersPart2(line: string) {
  const indexedValuesX = numbersList.map(({value, names}) => {
    const lowestIndex = names
        .map((name) => line.indexOf(name))
        .reduce((previousValue, currentValue) => (currentValue >= 0 && currentValue < previousValue ? currentValue : previousValue), Number.POSITIVE_INFINITY);
    return {
      value,
      index: lowestIndex
    };
  });
  const indexedValuesY = numbersList.map(({value, names}) => {
    const highestIndex = names
        .map((name) => line.lastIndexOf(name))
        .reduce((previousValue, currentValue) => (currentValue >= 0 && currentValue > previousValue ? currentValue : previousValue), -1);
    return {
      value,
      index: highestIndex
    };
  });
  let x = indexedValuesX.sort((a, b) => {
        return a.index - b.index;
      }
  )[0].value;
  let y = indexedValuesY.sort((a, b) => {
        return b.index - a.index;
      }
  )[0].value;
  return parseFloat(`${x}${y}`);
}
run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
