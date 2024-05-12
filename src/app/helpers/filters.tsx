export const bedroomsData = [
  { key: 0, value: '0' },
  { key: 1, value: '1' },
  { key: 2, value: '2' },
  { key: 3, value: '3' },
  { key: 4, value: '4' },
  { key: 5, value: '5' },
  { key: 6, value: '6' },
  { key: 7, value: '7' },
  { key: 8, value: '8' }
];

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const priceRangeData = (isMin: boolean) => {
  const values = [];
  // values.push({
  //   key: '',
  //   value: firstText
  // });

  for (let index = isMin ? 10000 : 20000; index <= 300000; index += 10000) {
    values.push({
      key: index,
      value: '£' + numberWithCommas(index)
    });
  }

  for (let index = 325000; index <= 500000; index += 25000) {
    values.push({
      key: index,
      value: '£' + numberWithCommas(index)
    });
  }

  for (let index = 550000; index <= 1000000; index += 50000) {
    values.push({
      key: index,
      value: '£' + numberWithCommas(index)
    });
  }

  for (let index = 1100000; index <= 2400000; index += 100000) {
    values.push({
      key: index,
      value: '£' + numberWithCommas(index)
    });
  }

  for (let index = 2500000; index <= 10000000; index += 250000) {
    values.push({
      key: index,
      value: '£' + numberWithCommas(index)
    });
  }

  return values;
};
