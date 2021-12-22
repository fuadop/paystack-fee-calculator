/**
 *
 * @param charge Amount to charge in Naira
 * @returns Paystack fee
*/
declare const calculateUSDFee: (charge: number) => number;
/**
 *
 * @param charge Amount to charge in Naira
 * @returns Paystack fee
*/
declare const calculateFee: (charge: number) => number;
export default calculateFee;
export { calculateUSDFee };
