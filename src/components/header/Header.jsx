import styled from 'styled-components';
import React from 'react';
import Search from 'components/search';
import { Container } from 'components/shared/styleHelpers';

const HeadWrap = styled(Container)`
	background: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row nowrap;
	padding-top: 0;
	padding-bottom: 0;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	height: 70px;
`;
const Header = () => (
	<HeadWrap as="header">
		<h3>DumbFlix</h3>
		<Search />
	</HeadWrap>
);
export default Header;
