"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateUSDFee = void 0;
const CAP_FEE = 2000;
const NGN_WAIVE_LIMIT_PRICE = 2500;
const NGN_PERCENTAGE = 1.5 / 100;
const USD_PERCENTAGE = 3.5 / 100;
class NGNFeeHelper {
    static calculateBelowWaive(charge) {
        if (typeof charge !== 'number') {
            throw new Error('Should be a number type');
        }
        const fee = charge * NGN_PERCENTAGE;
        if (fee > CAP_FEE) {
            return CAP_FEE;
        }
        return fee;
    }
    static calculateAboveWaive(charge) {
        if (typeof charge !== 'number') {
            throw new Error('Should be a number type');
        }
        const fee = (charge * NGN_PERCENTAGE) + 100;
        if (fee > CAP_FEE) {
            return CAP_FEE;
        }
        return fee;
    }
}
;
/**
 *
 * @param charge Amount to charge in Naira
 * @returns Paystack fee
*/
const calculateUSDFee = (charge) => {
    if (typeof charge !== 'number') {
        throw new Error('Charge should be a number type');
    }
    if (charge <= 0) {
        throw new Error('Charge should not be negative or zero');
    }
    const fee = (charge * USD_PERCENTAGE) + 100;
    return fee;
};
exports.calculateUSDFee = calculateUSDFee;
/**
 *
 * @param charge Amount to charge in Naira
 * @returns Paystack fee
*/
const calculateFee = (charge) => {
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
exports.default = calculateFee;
