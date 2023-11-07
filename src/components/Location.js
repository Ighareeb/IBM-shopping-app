import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Location() {
	const { dispatch } = useContext(AppContext);

	function changeLocation(val) {
		dispatch({
			type: 'CHG_LOCATION',
			payload: val,
		});
	}

	return (
		<div className="alert alert-primary">
			{' '}
			Location{' '}
			{
				<select
					name="Location"
					id="Location"
					onChange={(event) => changeLocation(event.target.value)}
				>
					<option value="£">Uk(£)</option>
					<option value="₹">India(₹)</option>
					<option value="€">Europe(€)</option>
					<option value="CAD">Canada(CAD)</option>
				</select>
			}
		</div>
	);
}

// In Location.js, you are importing AppContext and adding changeLication class to change the location along with its currencies.
//  When you change theLocation, currencies will be updated at all the required places.
