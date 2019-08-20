import styled from 'styled-components';
import React from 'react';
import { Container } from 'components/shared/styleHelpers';

const HeadWrap = styled(Container)`
	background: #fff;
	box-shadow: 0 0 2px 2px #d2d2d2;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row nowrap;
	padding: 25px 20px;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
`;
const Header = () => (
	<HeadWrap as="header">
		<h4>DumbFlix</h4>
	</HeadWrap>
);
export default Header;
