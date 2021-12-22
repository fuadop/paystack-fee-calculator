# paystack-fee-calculator
Paystack fee calculator

# Usage

To calculate NGN fee
```js
import calculateFee from 'paystack-fee-calculator';

console.log(calculateFee(50))
// 0.75
```

To calculate USD fee
```js
import { calculateUSDFee } from 'paystack-fee-calculator';

console.log(calculateUSDFee(50))
// 101.95
```
__Note: The argument and the return values of both functions are in NGN units.__
