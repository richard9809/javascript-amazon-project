import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency');

// Test Case 1
console.log('1. Converts cents into dollars:');

if (formatCurrency(2095) === '20.95') {
  console.log('Passed');  
} else {
  console.log('Failed');
}

// Test Case 2
console.log('2. Works with 0:');

if (formatCurrency(0) === '0.00') {
  console.log('Passed');
} else {
  console.log('Failed');
}

// Test Case 3
console.log('3. Rounds up to the nearest cent:');

if (formatCurrency(2000.5) === '20.01') {
  console.log('Passed');  
} else {
  console.log('Failed');
}

// Test Case 4
console.log('4. Rounds down to the nearest cent:');
if (formatCurrency(2000.4) === '20.00') {
  console.log('Passed');
} else {
  console.log('Failed');
}