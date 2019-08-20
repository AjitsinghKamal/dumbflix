import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
const importAll = r => {
	let images = {};
	r.keys().map(item => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
};

const images = importAll(
	require.context('assets/images/posters', false, /\.(png|jpe?g|svg)$/)
);

const CardWrap = styled.div`
	background: #fff;
	box-shadow: 0 0 4px 1px #d2d2d2;
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	flex-flow: row nowrap;
	flex: 1 0 30%;
	height: 300px;
	margin: 20px;
	border-radius: 5px;
	overflow: hidden;
	cursor: pointer;
	transition: box-shadow 0.3s;
	&:hover {
		box-shadow: 0 0px 10px 4px #d2d2d2;
	}
`;
const ImageWrap = styled.div`
	flex: 0 0 46%;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Content = styled.div`
	padding: 20px 15px;
`;
const Title = styled.p`
	font-size: 20px;
	font-weight: 600;
	color: #1d1d1d;
	margin-bottom: 10px;
`;
const Sub = styled.p`
	font-size: 14px;
	color: #3c3c3c;
	margin: 8px 0;
`;
const Year = styled(Sub)`
	font-size: 13px;
`;
const GridCard = ({ data }) => (
	<CardWrap>
		<ImageWrap>
			<Image src={images[data.poster]} alt="poster" />
		</ImageWrap>
		<Content>
			<Title>{data.title}</Title>
			<Year>{data.year}</Year>
			<Sub>{data.description}</Sub>
		</Content>
	</CardWrap>
);
GridCard.propTypes = {
	data: PropTypes.object,
};
export default GridCard;
