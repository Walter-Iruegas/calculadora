import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleOperatorClick = (operator) => {
    setExpression((prev) => prev + operator);
  };

  const handleNumberClick = (number) => {
    setExpression((prev) => prev + number);
  };

  const handleClearClick = () => {
    setExpression('');
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="calculator">
      <input
        className="calculator-screen"
        type="text"
        value={expression}
        disabled
      />
      <div className="calculator-buttons">
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleOperatorClick('%')}>%</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('(')}>(</button>
        <button onClick={() => handleOperatorClick(')')}>)</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('^')}>^</button>
        <button onClick={() => handleOperatorClick('Math.sqrt(')}>
          &radic;
        </button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('Math.log10(')}>log</button>
        <button onClick={() => handleOperatorClick('Math.exp(')}>exp</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
        <button id="clear" onClick={handleClearClick}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;

