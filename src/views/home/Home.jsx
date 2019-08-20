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
const mapStateToProps = state => ({
	titles: state.catalogue ? state.catalogue.shows.map(show => show) : [],
});
export default connect(
	mapStateToProps,
	null
)(Home);
