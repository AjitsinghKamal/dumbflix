import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'views/home';
import Header from 'components/header';
import { Container } from 'components/shared/styleHelpers';

const Main = styled(Container)`
	width: 100%;
	height: 100%;
	padding-top: 100px;
`;
const Shell = styled.div`
	width: 100vw;
	height: 100vh;
`;
export default class App extends React.Component {
	render() {
		return (
			<Shell>
				<Header />
				<Main>
					<Router>
						<Route exact path="/" component={Home} />
						{/* <Route path="/:id" component={About} /> */}
					</Router>
				</Main>
			</Shell>
		);
	}
}
