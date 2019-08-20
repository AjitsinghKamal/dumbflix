import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const CardWrap = styled.div`
	background: #fff;
	box-shadow: 0 0 2px 2px #d2d2d2;
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	flex-flow: row nowrap;
	flex: 1 0 30%;
`;
const Card = props => (
	<CardWrap>
		<img src={props.poster} alt="poster" />
		<div>
			<p>{props.title}</p>
			<span>{props.year}</span>
			<p>{props.description}</p>
		</div>
	</CardWrap>
);
Card.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.string,
	description: PropTypes.string,
};
export default Card;
