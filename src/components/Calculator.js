import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        setResult(n1 / n2);
        break;
      default:
        setResult('');
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={handleNum1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={handleNum2Change} />
        </label>
      </div>
      <div>
        <label>
          Operator:
          <select value={operator} onChange={handleOperatorChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={calculateResult}>Calculate</button>
      </div>
      <div>
        <label>
          Result:
          <input type="text" value={result} readOnly />
        </label>
      </div>
    </div>
  );
};

export default Calculator;
