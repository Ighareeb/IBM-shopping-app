import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

export default function ExpenseItem(props) {
	const { Location, dispatch } = useContext(AppContext);

	function handleDeleteItem() {
		const item = {
			name: props.name,
		};

		dispatch({
			type: 'DELETE_ITEM',
			payload: item,
		});
	}

	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.quantity}</td>
			<td>
				{Location}
				{parseInt(props.unitprice)}
			</td>
			<td>
				{Location}
				{parseInt(props.quantity) * parseInt(props.unitprice)}
			</td>
			<td>
				<FaTimesCircle size="2.2em" onClick={handleDeleteItem}></FaTimesCircle>
			</td>
		</tr>
	);
}

// In ExpenseItem you are importing dispatch from Context, which allows you to dispatch a delete action.
//  You are creating a function that gets called when the delete icon is clicked.
