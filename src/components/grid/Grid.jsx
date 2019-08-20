import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GridCard from './GridCard';
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-flow: row wrap;
	overflow: auto;
	height: 100%;
	width: calc(100% + 40px);
	margin: 0 -20px;
	@media screen and (max-width: 640px) {
		flex-direction: column;
	}
`;

class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.makeGrid = this.makeGrid.bind(this);
	}
	makeGrid(items) {
		return items.length
			? items.map((item, index) => (
				<GridCard
					key={index}
					data={item}
					action={this.props.action}
				/>
			))
			: null;
	}
	render() {
		return <Container>{this.makeGrid(this.props.items)}</Container>;
	}
}
Grid.propTypes = {
	items: PropTypes.array,
	action: PropTypes.func,
};
export default Grid;
