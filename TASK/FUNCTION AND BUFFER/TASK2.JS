function calculate(operator, num1, num2) {
    let result;
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        throw new Error('Invalid operator');
    }
    return result;
  }
  
  const num1 = 10;
  const num2 = 5;
  
  const resultAddition = calculate('+', num1, num2);
  console.log(`Addition of ${num1} and ${num2} is: ${resultAddition}`);
  
  const resultSubtraction = calculate('-', num1, num2);
  console.log(`Subtraction of ${num1} and ${num2} is: ${resultSubtraction}`);
  
  const resultMultiplication = calculate('*', num1, num2);
  console.log(`Multiplication of ${num1} and ${num2} is: ${resultMultiplication}`);
  
  const resultDivision = calculate('/', num1, num2);
  console.log(`Division of ${num1} and ${num2} is: ${resultDivision}`);
  