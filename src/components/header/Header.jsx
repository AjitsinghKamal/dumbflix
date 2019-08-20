import styled from 'styled-components';
import React from 'react';
import Search from 'components/search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { resetActive } from 'store/actions';
import { Container } from 'components/shared/styleHelpers';

const HeadWrap = styled(Container)`
	background: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-flow: row nowrap;
	padding-top: 0;
	padding-bottom: 0;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	height: 70px;
`;
const Back = styled.span`
	font-size: 12px;
	margin-right: 12px;
	font-weight: 600;
	cursor: pointer;
`;
const Header = props => {
	const back = () => {
		props.resetActive();
		props.history.goBack();
	};
	return (
		<HeadWrap as="header">
			<h3 onClick={() => (!props.showSearch ? back() : null)}>
				{!props.showSearch ? <Back> ⮃ </Back> : null}DumbFlix
			</h3>
			{props.showSearch ? <Search /> : null}
		</HeadWrap>
	);
};
Header.propTypes = {
	showSearch: PropTypes.bool,
	history: PropTypes.object,
	resetActive: PropTypes.func,
};
export default connect(
	state => ({ showSearch: !state.active.details }),
	{ resetActive }
)(withRouter(Header));
