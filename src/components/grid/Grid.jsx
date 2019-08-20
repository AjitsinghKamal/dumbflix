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
const makeGrid = items => {
	return items.length
		? items.map((item, index) => <GridCard key={index} data={item} />)
		: null;
};
const Grid = props => <Container>{makeGrid(props.items)}</Container>;
Grid.propTypes = {
	items: PropTypes.array,
};
export default Grid;
