const CAP_FEE: number = 2000;
const NGN_WAIVE_LIMIT_PRICE: number = 2500;
const NGN_PERCENTAGE: number = 1.5 / 100;
const USD_PERCENTAGE: number = 3.9 /100;


class NGNFeeHelper {
  static calculateBelowWaive(charge: number) {
    if (typeof charge !== 'number') {
      throw new Error('Should be a number type');
    }

    const fee = charge * NGN_PERCENTAGE;
    if (fee > CAP_FEE) {
      return CAP_FEE;
    }
    return fee;
  }  

  static calculateAboveWaive(charge: number) {
    if (typeof charge !== 'number') {
      throw new Error('Should be a number type');
    }

    const fee = (charge * NGN_PERCENTAGE) + 100;
    if (fee > CAP_FEE) {
      return CAP_FEE;
    }
    return fee;
  }
};

/**
 * 
 * @param charge Amount to charge in Naira
 * @returns Paystack fee
*/
const calculateUSDFee = (charge: number): number => {
  if (typeof charge !== 'number') {
    throw new Error('Charge should be a number type');
  }
  if (charge <= 0) {
    throw new Error('Charge should not be negative or zero');
  }

  const fee = (charge * USD_PERCENTAGE) + 100;
  return fee;
};

/**
 * 
 * @param charge Amount to charge in Naira
 * @returns Paystack fee
*/
const calculateFee = (charge: number): number => {
  if (typeof charge !== 'number') {
    throw new Error('Charge should be a number type');
  }
  if (charge <= 0) {
    throw new Error('Charge should not be negative or zero');
  }

  if (charge >= NGN_WAIVE_LIMIT_PRICE) {
    return NGNFeeHelper.calculateAboveWaive(charge);
  }

  return NGNFeeHelper.calculateBelowWaive(charge);
};

export default calculateFee;
export { calculateUSDFee };
