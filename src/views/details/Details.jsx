import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRating } from 'store/actions';
import Player from 'components/player';
class Details extends React.Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		trailer: PropTypes.string,
		fetchRating: PropTypes.func,
	};

	componentDidMount() {
		this.props.fetchRating();
	}
	render() {
		return (
			<main>
				<Player trailerUrl={this.props.trailer} />
			</main>
		);
	}
}
const mapStateToProps = ({ active }) => ({
	trailer: active.details ? active.details.trailer : '',
	rating: active.rating || '',
});
export default connect(
	mapStateToProps,
	{ fetchRating }
)(Details);
