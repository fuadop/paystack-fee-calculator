import calculateFee, { calculateUSDFee } from './index';

describe('NGN Fees', () => {
  let charge: number;

  beforeAll(() => {
    // Generate random charge
    charge = Math.random() * 54321
  });

  test('string charge', () => {
    expect(() => {
      // @ts-ignore
      calculateFee('string');
    }).toThrowError('Charge should be a number type');
  });

  test('negative charge', () => {
    expect(() => {
      calculateFee(-2500);
    }).toThrowError('Charge should not be negative or zero');
  });

  test('charge less than NGN2500', () => {
    expect(calculateFee(50)).toEqual(0.75)
  });
  
  test('charge equal to NGN2500', () => {
    expect(calculateFee(2500)).toEqual(137.5);
  });

  test('Should return 2000', () => {
    expect(calculateFee(200000)).toEqual(2000);
  });

  test('default test', () => {
    expect(typeof calculateFee(charge)).toEqual('number');
  });
});

describe('USD Fees', () => {
  let charge: number;

  beforeAll(() => {
    // Generate random charge
    charge = Math.random() * 54321
  });

  test('string charge', () => {
    expect(() => {
      // @ts-ignore
      calculateUSDFee('string');
    }).toThrowError('Charge should be a number type');
  });

  test('negative charge', () => {
    expect(() => {
      calculateUSDFee(-2500);
    }).toThrowError('Charge should not be negative or zero');
  });

  test('Should be 101.95', () => {
    expect(calculateUSDFee(50)).toEqual(101.95)
  });

  test('default test', () => {
    expect(typeof calculateUSDFee(charge)).toEqual('number');
  });
});
