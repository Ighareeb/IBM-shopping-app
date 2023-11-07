import React, { createContext, useReducer } from 'react';

// the reducer is used to update the state based on the action
// In AppContext.js you are setting the initial state of Expenses and Location.
// You can see how the items, their respective unit price are all added to Expenses.
// Here, you are adding an initial expenses, creating a Provider component,
// setting up the useReducer hook which will hold your state, and allow you to update  the state via dispatch.
// Adding a new case to the switch statement called “ADD_QUANTITY”, “RED_QUANTITY”, “DELETE_ITEM”, “CHG_LOCATION”.

export const AppReducer = (state, action) => {
	let new_expenses = [];
	switch (action.type) {
		case 'ADD_QUANTITY':
			// let updatedqty = false;
			state.expenses.map((expense) => {
				if (expense.name === action.payload.name) {
					expense.quantity = expense.quantity + action.payload.quantity;
					// updatedqty = true;
				}
				new_expenses.push(expense);
				return true;
			});
			state.expenses = new_expenses;
			action.type = 'DONE';
			return {
				...state,
			};
		case 'RED_QUANTITY':
			state.expenses.map((expense) => {
				if (expense.name === action.payload.name) {
					expense.quantity = expense.quantity - action.payload.quantity;
				}
				expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
				new_expenses.push(expense);
				return true;
			});
			state.expenses = new_expenses;
			action.type = 'DONE';
			return {
				...state,
			};
		case 'DELETE_ITEM':
			state.expenses.map((expense) => {
				if (expense.name === action.payload.name) {
					expense.quantity = 0;
				}
				new_expenses.push(expense);
				return true;
			});
			state.expenses = new_expenses;
			action.type = 'DONE';
			return {
				...state,
			};
		case 'CHG_LOCATION':
			action.type = 'DONE';
			state.Location = action.payload;
			return {
				...state,
			};
		default:
			return state;
	}
};

// 1. Set the initial state when the app loads
const initialState = {
	expenses: [
		{ id: 'Shirt', name: 'Shirt', quantity: 0, unitprice: 500 },
		{ id: 'Jeans', name: 'Jeans', quantity: 0, unitprice: 300 },
		{ id: 'Dress', name: 'Dress', quantity: 0, unitprice: 400 },
		{ id: 'Dinner set', name: 'Dinner set', quantity: 0, unitprice: 600 },
		{ id: 'Bags', name: 'Bags', quantity: 0, unitprice: 200 },
	],
	Location: '£',
};

// 2. Create context - what our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children which are the nested(wrapped) components
export const AppProvider = (props) => {
	// 4. sets up the app state. takes a reducer and an initial state
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const totalExpenses = state.expenses.reduce((total, item) => {
		return (total = total + item.unitprice * item.quantity);
	}, 0);
	state.CartValue = totalExpenses;

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				CartValue: state.CartValue,
				dispatch,
				Location: state.Location,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
