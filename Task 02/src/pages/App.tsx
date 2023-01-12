import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
	const [current, setCurrent] = useState<string>('0');
	const [operator, setOperator] = useState('');
	const [previous, setPrevious] = useState<string>('');

	const updateDisplay = (value: any) => {
		if (current === '0' && value !== '.') setCurrent(value);
		else setCurrent(`${current}${value}`);
	};

	const calculate = () => {
		if (previous === '') return;

		let result = 0;
		const parsedCurrent = parseFloat(current);
		const parsedPrevious = parseFloat(previous);
		switch (operator) {
			case '%':
				result = parsedPrevious + parsedCurrent;
				break;
			case '+':
				result = parsedPrevious + parsedCurrent;
				break;
			case '-':
				result = parsedPrevious - parsedCurrent;
				break;
			case '*':
				result = parsedPrevious * parsedCurrent;
				break;
			case '/':
				result = parsedPrevious / parsedCurrent;
				break;
			default:
				console.log('Sadness');
		}

		setCurrent(result?.toString() || '0');
		setOperator('');
		setPrevious('0');
	};

	const useOperator = (newOperator: string) => {
		if (operator && previous !== null) {
			calculate();
		}
		setOperator(newOperator);
		setPrevious(current);
		setCurrent('0');
	};

	const clear = () => {
		setCurrent('0');
		setOperator('');
		setPrevious('0');
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		const key = event.key;
		if (
			key === '1' ||
			key === '2' ||
			key === '3' ||
			key === '4' ||
			key === '5' ||
			key === '6' ||
			key === '7' ||
			key === '8' ||
			key === '9' ||
			key === '0'
		) {
			updateDisplay(key);
		} else if (key === '.') {
			updateDisplay('.');
		} else if (key === '+' || key === '-' || key === '*' || key === '/') {
			setOperator(key);
		} else if (key === 'Enter' || key === '=') {
			calculate();
		} else if (key === 'c' || key === 'C' || key === 'Backspace') {
			clear();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', e => handleKeyPress(e));
	});
	return (
		<div className="wrapper">
			<div className="calculator">
				<div className="calculator__theme" />

				<div className="calculator__field">{current}</div>

				<div className="calculator__buttons">
					<button
						className="calculator__buttons__item calculator__buttons__item--special"
						onClick={clear}
					>
						AC
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--special"
						onClick={() => useOperator('-')}
					>
						{' '}
						+/-{' '}
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--special"
						onClick={() => useOperator('%')}
					>
						{' '}
						%{' '}
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--method"
						onClick={() => useOperator('-')}
					>
						{' '}
						÷{' '}
					</button>

					<button className="calculator__buttons__item" onClick={() => updateDisplay(7)}>
						{' '}
						7{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(8)}>
						{' '}
						8{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(9)}>
						{' '}
						9{' '}
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--method"
						onClick={() => useOperator('*')}
					>
						×
					</button>

					<button className="calculator__buttons__item" onClick={() => updateDisplay(4)}>
						{' '}
						4{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(5)}>
						{' '}
						5{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(6)}>
						{' '}
						6{' '}
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--method"
						onClick={() => useOperator('-')}
					>
						-
					</button>

					<button className="calculator__buttons__item" onClick={() => updateDisplay(1)}>
						{' '}
						1{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(2)}>
						{' '}
						2{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(3)}>
						{' '}
						3{' '}
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--method"
						onClick={() => useOperator('+')}
					>
						+
					</button>

					<button className="calculator__buttons__item" onClick={clear}>
						{' '}
						C{' '}
					</button>
					<button className="calculator__buttons__item" onClick={() => updateDisplay(0)}>
						{' '}
						0{' '}
					</button>
					<button
						className="calculator__buttons__item"
						onClick={() => updateDisplay('.')}
					>
						{' '}
						.{' '}
					</button>
					<button
						className="calculator__buttons__item calculator__buttons__item--method"
						onClick={() => calculate()}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
