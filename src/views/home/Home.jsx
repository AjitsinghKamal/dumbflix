import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setActive } from 'store/actions';
import Grid from 'components/grid';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.showDetails = this.showDetails.bind(this);
	}

	static propTypes = {
		titles: PropTypes.array,
		history: PropTypes.object,
		setActive: PropTypes.func,
	};

	showDetails(selected) {
		this.props.setActive(selected);
		this.props.history.push({
			pathname: '/' + selected.title.replace(/\s/g, ''),
		});
	}
	render() {
		return (
			<main>
				<Grid items={this.props.titles} action={this.showDetails} />
			</main>
		);
	}
}
const mapStateToProps = ({ list }) => {
	let titles = [];
	if (list.activeSearch) {
		titles = list.catalogue.filter(show =>
			show.title.toLowerCase().includes(list.activeSearch)
		);
	} else if (list.catalogue) {
		titles = list.catalogue.map(show => show);
	}
	return {
		titles,
	};
};
export default connect(
	mapStateToProps,
	{ setActive }
)(withRouter(Home));
