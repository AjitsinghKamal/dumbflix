import styled from 'styled-components';
import React from 'react';
const Container = styled.main`
	display: flex;
	padding: 15px;
	align-items: center;
	justify-content: space-between;
	flex-flow: row nowrap;
	overflow: auto;
	height: 100%;
	width: 100%;
`;
const Grid = () => <Container>hello</Container>;
export default Grid;
