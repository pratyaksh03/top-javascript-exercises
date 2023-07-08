const findTheOldest = require('./findTheOldest')

describe('findTheOldest', () => {
  test('finds the oldest person!', () => {
    const people = [
      {
        name: "Carly",
        birth: 1942,
        death: 1970,
      },
      {
        name: "Ray",
        birth: 1962,
        death: 2011,
      },
      {
        name: "Jane",
        birth: 1912,
        death: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if someone is still living', () => {
    const people = [
      {
        name: "Carly",
        birth: 2018,
      },
      {
        name: "Ray",
        birth: 1962,
        death: 2011,
      },
      {
        name: "Jane",
        birth: 1912,
        death: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if the OLDEST is still living', () => {
    const people = [
      {
        name: "Carly",
        birth: 1066,
      },
      {
        name: "Ray",
        birth: 1962,
        death: 2011,
      },
      {
        name: "Jane",
        birth: 1912,
        death: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
