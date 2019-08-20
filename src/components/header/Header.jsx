import styled from 'styled-components';
import React from 'react';
import Search from 'components/search';
import { connect } from 'react-redux';
import { setSearch } from 'store/actions';
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
	@media screen and (max-width: 640px) {
		flex-direction: column;
		padding-top: 20px;
	}
`;
const Back = styled.span`
	font-size: 12px;
	margin-right: 12px;
	font-weight: 600;
	cursor: pointer;
`;
const Header = props => {
	const showSearch = props.match.isExact && props.match.path === '/';
	const clickHandler = () => {
		if (!showSearch) {
			props.resetActive();
			props.history.goBack();
			return;
		}
	};
	return (
		<HeadWrap as="header">
			<h3 onClick={() => clickHandler()}>
				{!showSearch ? <Back> ⮃ </Back> : null}DumbFlix
			</h3>
			{showSearch ? <Search /> : null}
		</HeadWrap>
	);
};
Header.propTypes = {
	showSearch: PropTypes.bool,
	history: PropTypes.object,
	match: PropTypes.object,
	resetActive: PropTypes.func,
	searchActive: PropTypes.string,
	setSearch: PropTypes.func,
};
export default connect(
	state => ({ searchActive: state.list.activeSearch }),
	{ resetActive, setSearch }
)(withRouter(Header));
