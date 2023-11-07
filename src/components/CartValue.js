import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function CartValue() {
	const { expenses, Location } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.unitprice * item.quantity);
	}, 0);
	return (
		<div className="alert alert-primary">
			<span>
				Cart Value: {Location}
				{totalExpenses}
			</span>
		</div>
	);
}

// Here, you are importing AppContext from your Context.
// Import the useContext hook, and pass your AppContext to it - this is how a component connects to
// the context in order to get values from global state.
// The Bootstrap Alert classes are used to give a nice gray background by adding some text and hard coding
// a value.
// Now if you change the budget in AppContext and reload your browser, you will see the budget updates on the UI.
