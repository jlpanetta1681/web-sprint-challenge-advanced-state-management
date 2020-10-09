import React, { useEffect } from 'react';
import Smurf from '../store/actions/Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../store/actions/index.js';

const List = (props) => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	return (
		<div className="List">
			<h3>Smurf-Ville Towne Charter</h3>
			{props.isLoading && <h3>Loading smurf data...</h3>}
			{props.error && <p className="error">{props.error}</p>}
			{props.smurfs.length > 0 &&
				props.smurfs.map((smurf) => (
					<Smurf key={smurf.id} smurf={smurf} />
				))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		smurfs: state.smurfs,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(List);
