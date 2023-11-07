import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
// In ItemSelected, you are importing AppContext and useContext as usual and getting dispatch from your global state.
//  You are creating an event to reduce or
// add quantity.You are dispatching an action, with a type and your payload. The type tells the reducer how to update the state.

export default function ItemsSelected(props) {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState('');
	const [action, setAction] = useState('');

	function submitEvent() {
		const item = {
			name: name,
			quantity: parseInt(quantity),
		};
		if (action === 'Reduce') {
			dispatch({
				type: 'RED_QUANTITY',
				payload: item,
			});
		} else {
			dispatch({
				type: 'ADD_QUANTITY',
				payload: item,
			});
		}
	}

	return (
		<div>
			<div className="row">
				<div className="input-group mb-3" style={{ marginLeft: '2remn' }}>
					<div className="input-group-prepend">
						<label className="input-group-text" htmlFor="inputGroupSelect01">
							Items
						</label>
					</div>
					<select
						className="custom-select"
						id="inputGroupSelect01"
						onChange={(event) => setName(event.target.value)}
					>
						<option defaultValue>Choose...</option>
						<option value="Shirt" name="Shirt">
							{' '}
							Shirt
						</option>
						<option value="Dress" name="Dress">
							{' '}
							Dress
						</option>
						<option value="Jeans" name="Jeans">
							{' '}
							Jeans
						</option>
						<option value="Dinner Set" name="Dinner Set">
							{' '}
							Dinner Set
						</option>
						<option value="Bags" name="Bags">
							{' '}
							Bags
						</option>
					</select>

					<div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
						<label className="input-group-text" htmlFor="inputGroupSelect02">
							Quantity
						</label>
					</div>
					<select
						className="custom-select"
						id="inputGroupSelect02"
						onChange={(event) => setAction(event.target.value)}
					>
						<option defaultValue value="Add" name="Add">
							Add
						</option>
						<option value="Reduce" name="Reduce">
							Reduce
						</option>
					</select>
					<span
						className="eco"
						style={{ marginLeft: '2rem', marginRight: '8px' }}
					></span>

					<input
						required="required"
						type="number"
						id="cost"
						value={quantity}
						style={{ size: '10' }}
						onChange={(event) => {
							setQuantity(event.target.value);
						}}
					></input>

					<button
						className="btn btn-primary"
						onClick={submitEvent}
						style={{ marginLeft: '2rem' }}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}
