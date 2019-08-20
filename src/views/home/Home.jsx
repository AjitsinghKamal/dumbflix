import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from 'components/grid';

const Home = props => (
	<main>
		<Grid items={props.titles} />
	</main>
);
Home.propTypes = {
	titles: PropTypes.array,
};
const mapStateToProps = state => {
	let titles = [];
	if (state.activeSearch) {
		titles = state.catalogue.filter(show =>
			show.title.toLowerCase().includes(state.activeSearch)
		);
	} else if (state.catalogue) {
		titles = state.catalogue.map(show => show);
	}
	return {
		titles,
	};
};
export default connect(
	mapStateToProps,
	null
)(Home);
