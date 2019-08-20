import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Player from 'components/player';

const PlayerWrap = styled.div`
	height: calc(100vh - 242px);
	width: 100%;
	border-radius: 5px;
	overflow: hidden;
`;
const Heading = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 20px;
`;
const Title = styled.h1`
	flex: 1 0;
`;
const Content = styled.p`
	color: #4a4a4a;
	padding: 20px 0;
`;
const Rating = styled.p`
	flex: 0 0 20%;
	line-height: 2;
	font-size: 16px;
	text-align: right;
	span {
		font-weight: 600;
		margin-left: 10px;
		font-size: 22px;
	}
`;
class Details extends React.Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		detail: PropTypes.object,
		rating: PropTypes.string,
	};

	render() {
		return (
			<main>
				<Heading>
					<Title>
						{this.props.detail && this.props.detail.title}
					</Title>
					<Rating>
						Rating <span>{this.props.rating}</span>
					</Rating>
				</Heading>
				<PlayerWrap>
					<Player
						trailerUrl={
							this.props.detail ? this.props.detail.trailer : ''
						}
					/>
				</PlayerWrap>
				<Content>
					{this.props.detail && this.props.detail.description}
				</Content>
			</main>
		);
	}
}
const mapStateToProps = ({ active }) => ({
	detail: active.details,
	rating: active.rating || '',
});
export default connect(
	mapStateToProps,
	null
)(Details);
